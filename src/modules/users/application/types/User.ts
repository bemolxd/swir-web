import { ContextType } from "types";

export interface User {
  userId: string;
  personalNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  contextType: ContextType;
}
