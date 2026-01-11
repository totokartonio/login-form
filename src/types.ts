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

export type { FormData, FormErrors, User };
