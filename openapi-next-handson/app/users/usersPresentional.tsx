'use client';

import { Suspense } from 'react';
import { usePariSwr } from '../hooks/use-pari-swr';
import { fetchUsersData } from './actions';
import UsersIdView from './userIdView';
import UsersIdView2 from './userIdView2';

export default function UsersPresentional() {
  const { d: users, e: error, isLoading } = usePariSwr(fetchUsersData);

  if (isLoading) return <p>Loading...UsersPresentional</p>;
  if (error) return <p>エラーだよ😭: {error.message}s</p>;

  return (
    <div>
      <Suspense fallback="UsersIdViewのローディング中 : Suspense">
        <UsersIdView />
      </Suspense>

      <br />
      <br />
      <UsersIdView2 />

      <br />
      <br />
      <ul className="divide-y">
        {users?.map((user) => (
          <li key={user.id} className="py-2">
            {user.completed ? '✅' : '⏳'} {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
