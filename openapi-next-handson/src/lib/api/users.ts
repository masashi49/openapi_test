import type { paths } from '@/src/types/api';

type UsersResponse = paths['/api/users']['get']['responses'][200]['content']['application/json'];

export async function fetchUsers(): Promise<UsersResponse> {
  const res = await fetch('/api/users');
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  return res.json();
}
