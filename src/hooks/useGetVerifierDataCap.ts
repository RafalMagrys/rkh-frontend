import { useContext } from 'react';
import { AccountContext } from '@/contexts/AccountContext';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

/**
 * Custom hook to access the account role.
 * @returns Account role.
 */
type VerifierDataCap = { datacap: number; verifier: string };

export function useGetVerifierDataCap(actorId: string, params?: Partial<UseQueryOptions<VerifierDataCap, Error, VerifierDataCap>>) {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error('useAccountRole must be used within an AccountProvider');
  }

  return useQuery<VerifierDataCap>({
    queryKey: ['checkActorDataCap', actorId],
    queryFn: () => context.checkActorDataCap(actorId),
    enabled: !!actorId,
    ...params,
  });
}
