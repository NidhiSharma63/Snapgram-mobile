import z from 'zod';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const signUpFormSchema = z.object({
  username: z
    .string()
    .min(2, {message: 'Username must be 2 character long'})
    .max(20, {message: 'Username should not be 20 character long'}),
  email: z.string().email(),
  password: z
    .string()
    .min(8, {message: 'Password must be 8 character long'})
    .regex(passwordRegex, 'Pasword must contains special characters'),
  avatar: z.string().nullable(),
  uniqueBrowserId: z.string(),
  bio: z.string(),
});
