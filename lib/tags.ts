import { TTagKeys } from '@/types/tag';

export function mapTagKeysToOptions(
  tagKeys?: TTagKeys[]
): { value: string; label: string }[] {
  if (!tagKeys) return [];

  return tagKeys.map((tagKey) => {
    const value = tagKey.replace(/\s+/g, '').toLowerCase();
    const label = tagKey;
    return { value, label };
  });
}
