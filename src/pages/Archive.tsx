
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ArchiveItem from '../components/ArchiveItem';
import { archiveItems, categories } from '../lib/data';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Search, X } from 'lucide-react';

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from archive items
  const allTags = Array.from(
    new Set(archiveItems.flatMap(item => item.tags))
  ).sort();

  // Filter items based on search term, category, and tags
  const filteredItems = archiveItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === null || 
      item.category === selectedCategory;
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => item.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedTags([]);
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Archive</h1>
          <p className="text-muted-foreground">Browse and search your saved web content</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search archive..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Badge
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(selectedCategory === category.value ? null : category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "secondary" : "outline"}
                className="cursor-pointer text-xs"
                onClick={() => handleTagToggle(tag)}
              >
                #{tag}
              </Badge>
            ))}
            
            {(searchTerm || selectedCategory || selectedTags.length > 0) && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center gap-1 h-6" 
                onClick={clearFilters}
              >
                <X className="h-3 w-3" />
                Clear filters
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map(item => (
            <ArchiveItem key={item.id} item={item} />
          ))}
          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No items match your filters.
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Archive;
