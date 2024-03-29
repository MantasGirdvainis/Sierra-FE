export type SignUpCredentials = {
  name?: string;
  email: string;
  password: string;
};

export type SignUpResponse = {
  id: string;
  name: string;
  email: string;
};

export type SignInCredentials = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};
