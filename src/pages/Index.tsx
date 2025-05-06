
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import AddArchiveItemForm from '../components/AddArchiveItemForm';
import ArchiveItem from '../components/ArchiveItem';
import { archiveItems } from '../lib/data';
import { Link } from 'react-router-dom';

const Index = () => {
  const recentItems = archiveItems.slice(0, 3);

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">WEB_HOARDER</h1>
            <p className="text-xl text-muted-foreground">Archive and organize your favorite web content</p>
          </div>
          
          <p className="text-muted-foreground">
            Save articles, videos, tweets, and more from around the web.
            Organize them with tags and categories for easy retrieval.
          </p>
          
          <div className="flex gap-4">
            <Button asChild>
              <Link to="/archive">Browse Archive</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="pt-4">
            <h2 className="text-xl font-semibold mb-4">Recently Added</h2>
            <div className="space-y-4">
              {recentItems.map(item => (
                <ArchiveItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Add to Archive</h2>
          <AddArchiveItemForm />
        </section>
      </div>
    </Layout>
  );
};

export default Index;
