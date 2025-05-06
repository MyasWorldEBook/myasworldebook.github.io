
import { ArchiveItem } from './types';

export const archiveItems: ArchiveItem[] = [
  {
    id: '1',
    title: 'The History of the Internet',
    url: 'https://example.com/history-internet',
    description: 'An in-depth look at how the internet was created and evolved over time',
    category: 'article',
    tags: ['history', 'technology', 'internet'],
    dateAdded: '2025-05-01',
    favicon: '📄'
  },
  {
    id: '2',
    title: 'Web Design Trends 2025',
    url: 'https://example.com/web-design-trends',
    description: 'Exploring the latest web design trends that will dominate in 2025',
    category: 'article',
    tags: ['design', 'trends', 'web'],
    dateAdded: '2025-04-28',
    favicon: '📄'
  },
  {
    id: '3',
    title: 'Introduction to HTML and CSS',
    url: 'https://example.com/video/html-css-intro',
    description: 'A beginner-friendly video tutorial about HTML and CSS basics',
    category: 'video',
    tags: ['tutorial', 'html', 'css'],
    dateAdded: '2025-04-15',
    favicon: '🎬'
  },
  {
    id: '4',
    title: 'Digital Art Collection 2025',
    url: 'https://example.com/gallery/digital-art',
    description: 'A curated collection of stunning digital artwork from around the web',
    category: 'image',
    tags: ['art', 'digital', 'gallery'],
    dateAdded: '2025-03-22',
    favicon: '🖼️'
  },
  {
    id: '5',
    title: 'The Future of AI in Web Development',
    url: 'https://twitter.com/webdev/status/123456789',
    description: 'Interesting thread about how AI is changing web development',
    category: 'tweet',
    tags: ['ai', 'webdev', 'future'],
    dateAdded: '2025-05-03',
    favicon: '🐦'
  }
];

export const categories = [
  { value: 'article', label: 'Articles' },
  { value: 'video', label: 'Videos' },
  { value: 'image', label: 'Images' },
  { value: 'tweet', label: 'Tweets' },
  { value: 'other', label: 'Other' },
];
