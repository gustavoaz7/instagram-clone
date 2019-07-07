import { INSTAGRAM_TOKEN } from '../env';

export const RECENT_MEDIA_URL = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${INSTAGRAM_TOKEN}`;
