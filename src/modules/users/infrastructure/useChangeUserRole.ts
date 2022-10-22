import { useMutation } from "react-query";

import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import {
  useGetQueryData,
  useSetQueryData,
  useInvalidateQuery,
} from "components/RemoteData";
import { useCheckMobile } from "components/Layout";

import { ChangeRoleDto, UsersResponse } from "../application";
import { getUsersQueryKey } from "./useUsersQuery";
import { getUserDetailsQueryKey } from "./useUserDetailsQuery";

export const useChangeUserRole = (userId: string) => {
  const { params } = useQueryParams();
  const invalidateQuery = useInvalidateQuery();
  const setQueryData = useSetQueryData();
  const queryData = useGetQueryData<UsersResponse>(getUsersQueryKey(params));
  const isMobile = useCheckMobile();

  const { mutateAsync, isLoading } = useMutation(
    async (dto: ChangeRoleDto) => {
      return await api.put(`users/${userId}/role`, dto);
    },
    {
      onSuccess: (res, { contextType }) => {
        if (!res) return;

        if (isMobile) {
          invalidateQuery(getUsersQueryKey(params));
          invalidateQuery(getUserDetailsQueryKey(userId));
          return;
        }

        if (!!queryData) {
          setQueryData<UsersResponse>(getUsersQueryKey(params), {
            ...queryData,
            data: {
              ...queryData.data,
              collection: queryData.data.collection.map((user) => {
                if (user.userId === userId) {
                  return {
                    ...user,
                    contextType,
                  };
                }
                return user;
              }),
            },
          });
        }
        invalidateQuery(getUserDetailsQueryKey(userId));
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
