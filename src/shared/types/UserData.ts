export type LoginData = {
  email?: string,
  password?: string
};

export type UserData = {
  isAuthenticated: boolean;
  user: {
    id: number,
    email: string,
    token: string;
  }
};

export type UserState = {
  user: UserData;
};