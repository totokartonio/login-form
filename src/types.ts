type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email?: string;
  password?: string;
  submit?: string;
};

export type { FormData, FormErrors };
