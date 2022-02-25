import { useQuery } from "react-query";

import { api } from "utils";

import { IAuthProfile } from "./types";

export const useMeQuery = () =>
  useQuery("me", () => api.get<IAuthProfile>("auth/me")).data?.data;
