'use client';
import { fetchUsers } from '@/src/lib/api/users';

const data = await fetchUsers();

export default function Page() {
  if (data.users == undefined) return <>データがありません</>;

  const handleSubmit = async () => {
    try {
      await fetch('api/users/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'taro',
          email: 'taro@hoge.jp',
        }),
      });
      console.log('成功しました');
    } catch (error) {
      throw new Error('エラーです');
    }
  };

  return (
    <>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>handleSubmit</button>
    </>
  );
}
