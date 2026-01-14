type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
  submit?: string;
};

type User = {
  email: string;
  id: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export type { FormData, FormErrors, User, AuthContextType };
