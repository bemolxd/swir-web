import { useMutation, useQueryClient } from "react-query";

import { api } from "utils";
import { ContextType } from "types";

import { useQueryParams } from "components/QueryParamsV2";

import { UsersResponse } from "../application";
import { getUsersQueryKey } from "./useUsersQuery";

export const useChangeUserRole = (userId: string) => {
  const queryClient = useQueryClient();
  const { params } = useQueryParams();

  const { mutateAsync, isLoading } = useMutation(
    async (role: ContextType) => {
      return await api.put(`users/${userId}/role`, role);
    },
    {
      onSuccess: (_, role) => {
        const previousData = queryClient.getQueryData<UsersResponse>(
          getUsersQueryKey(params)
        );

        if (!!previousData) {
          queryClient.setQueryData<UsersResponse>(getUsersQueryKey(params), {
            ...previousData,
            collection: previousData.collection.map((user) => {
              if (user.userId === userId) {
                return {
                  ...user,
                  contextType: role,
                };
              }
              return user;
            }),
          });
        }
      },
    }
  );

  return [mutateAsync, isLoading] as const;
};
