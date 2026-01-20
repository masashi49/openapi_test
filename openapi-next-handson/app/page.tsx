'use client';
import { fetchUsers } from '@/src/lib/api/users';

const data = await fetchUsers();

export default function Page() {
  return (
    <ul>
      {data.users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
      こんにちもおm
    </ul>
  );
}
