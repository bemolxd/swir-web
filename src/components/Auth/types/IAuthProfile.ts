export interface IAuthProfile {
  service: string;
  attributes: UserAttributes;
  id: string;
  client_id: string;
}

interface UserAttributes {
  firstName: string;
  lastName: string;
  mail: string;
  personNumber: string;
}
