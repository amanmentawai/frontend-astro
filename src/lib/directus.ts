import { createDirectus, rest } from '@directus/sdk';

const DIRECTUS_URL = import.meta.env.PUBLIC_DIRECTUS_URL || 'http://localhost:8055';

export const directus = createDirectus(DIRECTUS_URL).with(rest());

export function getDirectusAsset(fileId: string) {
  if (!fileId) return '/images/placeholder.jpg';
  return `${DIRECTUS_URL}/assets/${fileId}`;
}