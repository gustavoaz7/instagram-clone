import { INSTAGRAM_TOKEN } from '../env';

export const RECENT_MEDIA_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTAGRAM_TOKEN}`;

export const ALERT_MESSAGE =
  'This Instagram Clone App is limited to the features provided by Instagram developer API.';
