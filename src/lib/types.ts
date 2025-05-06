
export interface ArchiveItem {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
  tags: string[];
  dateAdded: string;
  favicon?: string;
}

export type Category = 'article' | 'video' | 'image' | 'tweet' | 'other';
