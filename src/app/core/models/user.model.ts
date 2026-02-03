export interface User {
  userId: string;
  name: string;
  role: 'USER' | 'SUPPORT_ENGINEER' | 'SUPERVISOR';
  email: string;
  password: string;
}
