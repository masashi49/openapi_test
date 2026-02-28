import useSWRMutation from 'swr/mutation';
import { safe } from '../utils/safe';

/**
 * PARI Engine (Mutation版)
 * データを更新・作成・削除する「アクション」専用
 */
export function usePariMutation<T, P>(action: (arg: P) => Promise<T>) {
  const { trigger, isMutating } = useSWRMutation(action, async (fn, { arg }: { arg: P }) => {
    return await safe(fn(arg));
  });

  return {
    trigger,
    isMutating,
  };
}
