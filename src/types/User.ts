export interface User {
  familyId: number;
  name: string;
  birth: Date;
  gender: Gender;
  position: FamilyPosition;
}

export interface CreateUserPayload {
  phoneNumber: string;
  password: string;
  userName: string;
  birthday: string;
  familyName: string;
  familyPassword: string;
}

export interface LoginUserPayload {
  phoneNumber: string;
  password: string;
}

export enum Gender {
  M = "male",
  F = "female",
}

export enum FamilyPosition {
  M_MOTHER = "MATERNAL_MOTHER",
  M_FATHER = "MATERNAL_FATHER",
  F_MOTHER = "PARENTAL_MOTHER",
  F_FATHER = "PARENTAL_FATHER",
  MOTHER = "MOTHER",
  FATHER = "FATHER",
  CHILD_1 = "CHILD_1",
  CHILD_2 = "CHILD_2",
  CHILD_3 = "CHILD_3",
}
