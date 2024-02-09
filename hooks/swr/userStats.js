import useSWR from 'swr'
import { statsService } from 'api/statsService';
import { STATS } from 'constants/queryKeys';

export const useStats = () => {
  const fetcher = url => statsService();
  const { data, error, isLoading } = useSWR(STATS.STATS, fetcher)
  return {
    data: data,
    isLoading,
    isError: error
  }
};