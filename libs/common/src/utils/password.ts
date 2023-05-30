import { compareSync, hashSync } from 'bcryptjs';

export const checkPassword = (
  hashPassword: string,
  password: string,
): boolean => {
  if (!compareSync(password, hashPassword)) {
    return false;
  }

  return true;
};

export const generatePassword = (password: string): string => {
  const result = hashSync(password);

  return result;
};
