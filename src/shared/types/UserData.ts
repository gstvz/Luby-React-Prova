export type LoginData = {
  email?: string,
  password?: string
};

export type UserData = {
  isAuthenticated: boolean;
  user: {
    id: number | null,
    email: string | null,
    token: string | null,
    expires_at: string | null
  }
};

export type UserState = {
  user: UserData;
};