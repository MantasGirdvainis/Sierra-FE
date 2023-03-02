import { SignUpCredentials, SignUpResponse, SignInCredentials, SignInResponse } from './types';
import { post } from '../shared/methods';

export async function signUp(credentials: SignUpCredentials): Promise<SignUpResponse> {
  const { data } = await post<SignUpCredentials, SignUpResponse>('sign-up', credentials);
  return data;
};

export async function logIn(credentials: SignInCredentials): Promise<SignInResponse> {
  const { data } = await post<SignInCredentials, SignInResponse>('login', credentials);
  return data;
}