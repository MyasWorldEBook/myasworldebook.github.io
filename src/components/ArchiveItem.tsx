
import React from 'react';
import { ArchiveItem as ArchiveItemType } from '../lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Link as LinkIcon } from 'lucide-react';

interface ArchiveItemProps {
  item: ArchiveItemType;
}

const ArchiveItem = ({ item }: ArchiveItemProps) => {
  return (
    <Card className="archive-item h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{item.favicon}</span>
          <CardTitle className="text-lg line-clamp-1">{item.title}</CardTitle>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs">
          <LinkIcon className="h-3 w-3" />
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="truncate hover:text-primary">
            {item.url}
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{item.description}</p>
        <div className="flex flex-wrap gap-1 mt-auto">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 text-xs text-muted-foreground flex items-center gap-1">
        <Calendar className="h-3 w-3" />
        <span>{new Date(item.dateAdded).toLocaleDateString()}</span>
      </CardFooter>
    </Card>
  );
};

export default ArchiveItem;
