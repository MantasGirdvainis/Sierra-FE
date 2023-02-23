import { SignUpCredentials, SignUpResponse } from './types';
import { post } from '../shared/methods';

export async function signUp(credentials: SignUpCredentials): Promise<SignUpResponse> {
    const { data } = await post<SignUpCredentials, SignUpResponse>('sign-up', credentials);
    return data;
  };