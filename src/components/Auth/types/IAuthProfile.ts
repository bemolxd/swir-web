import { ContextType } from "types";

export interface IAuthProfile {
  userId: string;
  personalNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  contextType: ContextType;
}
