
import React from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Layout>
      <div className="space-y-8 max-w-2xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold mb-2">About Web Hoarder</h1>
          <p className="text-muted-foreground">A simple tool for archiving web content</p>
        </div>

        <section className="space-y-4">
          <p>
            Web Hoarder is a personal archiving tool designed for digital collectors, researchers, and
            anyone who wants to save and organize content from around the web.
          </p>

          <p>
            Unlike traditional bookmarking services, Web Hoarder focuses on creating a personal,
            searchable archive that you control. Save articles, videos, tweets, images, and more in
            a single organized repository.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Save content from any website</li>
            <li>Organize with categories and tags</li>
            <li>Advanced search and filtering</li>
            <li>Clean, minimal interface</li>
            <li>Fast access to your entire archive</li>
            <li>Data export and backup</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">How It Works</h2>
          <p>
            When you find something interesting online, simply copy the URL and add it to your Web Hoarder
            archive. The tool will automatically extract the title, description, and other metadata.
            You can add your own tags and notes to make it easier to find later.
          </p>
        </section>

        <div className="flex gap-4 pt-4">
          <Button asChild>
            <Link to="/">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/archive">Browse Archive</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
