import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions, QueryObserverResult } from '@tanstack/react-query';
import type { TConversationTagsResponse } from 'syntaxis-data-provider';
import { QueryKeys, dataService } from 'syntaxis-data-provider';

export const useGetConversationTags = (
  config?: UseQueryOptions<TConversationTagsResponse>,
): QueryObserverResult<TConversationTagsResponse> => {
  return useQuery<TConversationTagsResponse>(
    [QueryKeys.conversationTags],
    () => dataService.getConversationTags(),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      ...config,
    },
  );
};
