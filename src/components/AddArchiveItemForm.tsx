
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { categories } from '../lib/data';
import { useToast } from '../hooks/use-toast';

const AddArchiveItemForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would add the item to the archive
    toast({
      title: "Item saved",
      description: "Your item has been added to the archive.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md">
      <div className="space-y-2">
        <label htmlFor="url" className="text-sm font-medium">URL</label>
        <Input id="url" placeholder="https://example.com" required />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">Title</label>
        <Input id="title" placeholder="Enter a title" required />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">Description</label>
        <Textarea id="description" placeholder="Add a description" />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="category" className="text-sm font-medium">Category</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="tags" className="text-sm font-medium">Tags</label>
        <Input id="tags" placeholder="Enter tags separated by commas" />
      </div>
      
      <Button type="submit" className="w-full">Save to Archive</Button>
    </form>
  );
};

export default AddArchiveItemForm;
