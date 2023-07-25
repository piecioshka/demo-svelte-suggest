import type { User } from '../types/user';
import { makeRequest } from '../utils/makeRequest';

const usersUrl = 'https://fakes.piecioshka.io/users';

const delay = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export const getUsers = async (): Promise<User[]> => {
  const users = await makeRequest<User[]>(usersUrl);
  await delay(5000);
  return users;
};

export const findUsers = async (
  phrase: string,
  options: RequestInit = {},
): Promise<User[]> => {
  const users = await makeRequest<User[]>(`${usersUrl}?q=${phrase}`, options);
  await delay(1000);
  return users;
};
