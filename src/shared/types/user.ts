export type LoginData = {
  email?: string;
  password?: string;
};

export type UserBets = {
  choosen_numbers: string;
  created_at: string;
  game_id: number;
  id: number;
  price: number;
  type: { id: number; type: string };
  user_id: number;
}[];

export type UserData = {
  isAuthenticated: boolean;
  userBets: UserBets;
  user: {
    id: number | null;
    email: string | null;
    token: string | null;
    expires_at: string | null;
  };
};

export type UserState = {
  user: UserData;
};

export type NewUser = {
  email?: string;
  password?: string;
  name?: string;
};
