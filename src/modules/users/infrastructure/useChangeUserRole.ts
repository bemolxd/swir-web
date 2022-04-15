import { useMutation } from "react-query";

import { api } from "utils";

import { useQueryParams } from "components/QueryParamsV2";
import { useGetQueryData, useSetQueryData } from "components/RemoteData";

import { ChangeRoleDto, UsersResponse } from "../application";
import { getUsersQueryKey } from "./useUsersQuery";

export const useChangeUserRole = (userId: string) => {
  const { params } = useQueryParams();
  const queryData = useGetQueryData<UsersResponse>(getUsersQueryKey(params));
  const setQueryData = useSetQueryData<UsersResponse>(getUsersQueryKey(params));

  const { mutateAsync, isLoading } = useMutation(
    async (dto: ChangeRoleDto) => {
      return await api.put(`users/${userId}/role`, dto);
    },
    {
      onSuccess: (res, { contextType }) => {
        if (!res) return;

        if (!!queryData) {
          setQueryData({
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
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
