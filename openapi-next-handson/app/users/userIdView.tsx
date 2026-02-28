'use client';

import { useFetchSwr } from '../hooks/use-fetch-swr';
import { fetchUsersDataId } from './actions';

export default function UsersIdView() {
  const { d: user, e: error } = useFetchSwr(fetchUsersDataId, [{ id: 1 }], {
    suspense: true,
  });

  if (error) return <p>エラーだよ😭: {error.message}s</p>;

  if (!user) return null;

  return (
    <div>
      <ul className="divide-y">
        <li key={user.id} className="py-2">
          {user.userId && `my userId is ${user.userId}`} <br />
          {user.id && `my id is ${user.id}`} <br />
          {user.completed ? '✅' : '⏳'} {user.title}
        </li>
      </ul>
    </div>
  );
}
