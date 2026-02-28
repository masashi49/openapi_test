'use client';

import { useState } from 'react';
import { usePariMutation } from '../hooks/use-pari-mutation';
import { updateUserData } from './actions';

export default function UserUpdateView() {
  const [newTitle, setNewTitle] = useState('');
  const { trigger, isMutating } = usePariMutation(updateUserData);

  const handleUpdate = async () => {
    if (!newTitle) return;

    // ✅ これが PARI 流！trigger の戻り値を { d, e } で受け取る
    const { data, error } = await trigger({ id: 1, title: newTitle });

    if (error) {
      alert(`更新失敗😭: ${error.message}`);
      return;
    }

    alert(`更新成功！✨ 新しいタイトル: ${data?.title}`);
    setNewTitle('');
  };

  return (
    <div className="p-4 border rounded shadow-sm bg-white">
      <h3 className="font-bold mb-2">タイトルを更新なう💅</h3>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="新しいタイトルを入力..."
      />
      <button
        onClick={handleUpdate}
        disabled={isMutating} // ✅ 連打防止！
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {isMutating ? '更新中...' : '保存する'}
      </button>
    </div>
  );
}
