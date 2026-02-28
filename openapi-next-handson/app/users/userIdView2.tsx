'use client';

import { usePariSwr } from '../hooks/use-pari-swr';
import { fetchUsersDataId } from './actions';

export default function UsersIdView2() {
  const { d: user, e: error, isLoading } = usePariSwr(fetchUsersDataId, [{ id: 1 }]);

  if (isLoading) return <p>UsersIdView2のローディング中</p>;
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
