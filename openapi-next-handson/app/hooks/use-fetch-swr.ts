import useSWR, { SWRConfiguration } from 'swr';
import { safe } from '../utils/safe';

/**
 * PARI Engine
 * P: 引数の型（配列）
 * T: 戻り値の型
 */
export function useFetchSwr<T, P extends any[]>(
  action: (...args: P) => Promise<T>,
  args?: P, // 引数はオプション（?）にする
  config?: SWRConfiguration,
) {
  // args が無いときは [action] だけの配列
  const key = [action, ...(args || [])] as const;

  // ✅ 2. fetcher の引数 'k' に型を付ける (typeof key) で any を追放！
  const { data, isLoading, mutate } = useSWR(
    key,
    async (k: typeof key) => {
      const [fn, ...params] = k;
      return await safe((fn as (...args: P) => Promise<T>)(...(params as P)));
    },
    config,
  );

  return {
    d: data?.data,
    e: data?.error,
    isLoading,
    refresh: mutate,
  };
}
