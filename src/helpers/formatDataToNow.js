import { formatDistanceToNow } from 'date-fns';

export const formatDataToNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
