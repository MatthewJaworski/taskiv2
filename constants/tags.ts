import { text } from '@/constants/en';
import { TTag } from '@/types/tag';

const {
  newProject: { tags },
} = text;

export const KEY_TAGS: TTag[] = [
  { key: 'backend', name: tags.backend },
  { key: 'websiteDesign', name: tags.websiteDesign },
  { key: 'uxDesign', name: tags.uxDesign },
  { key: 'frontend', name: tags.frontend },
];
