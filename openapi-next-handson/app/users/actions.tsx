type UserTodo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Users = UserTodo[];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function fetchUsersData(): Promise<Users> {
  await delay(3000);
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

export async function fetchUsersDataId({ id }: { id: number }): Promise<UserTodo> {
  await delay(3000);
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

// P: Pure (引数を受け取ってfetchするだけ)
export async function updateUserData({
  id,
  title,
}: {
  id: number;
  title: string;
}): Promise<UserTodo> {
  await delay(1000); // ちょっとだけ待機💅
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ title }),
  });

  if (!res.ok) throw new Error(`Update failed: ${res.status}`);
  return res.json();
}
