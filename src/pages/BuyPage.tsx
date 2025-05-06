
import React from 'react';
import EbookLayout from '../components/EbookLayout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const BuyPage = () => {
  return (
    <EbookLayout>
      <div className="py-24 min-h-[80vh] bg-gradient-to-b from-white to-gray-50 flex flex-col items-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">THE INTERNET HOE</h1>
            <p className="text-xl text-gray-600 mb-4">Your complete guide to thriving online</p>
          </div>

          <Card className="border border-gray-200 shadow-lg overflow-hidden mb-12">
            <div className="bg-primary text-white p-6 text-center">
              <h2 className="text-2xl font-bold mb-1">Complete E-Book</h2>
              <p className="opacity-90">One-time purchase, lifetime access</p>
            </div>
            <CardContent className="p-8">
              <div className="flex justify-center mb-8">
                <div className="text-center">
                  <span className="text-4xl font-bold">£100</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="mr-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                  <span>Comprehensive 31-page guide</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                  <span>Proven strategies for content creation</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                  <span>Marketing techniques for growing your audience</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">✓</div>
                  <span>Bonus resources and templates</span>
                </li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mb-8 text-center">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-medium">Instant delivery</span> • PDF download
                </p>
                <p className="text-xs text-gray-500">
                  Pay securely with credit card or PayPal
                </p>
              </div>
              
              <a href="https://buy.stripe.com/6oE9Eg77PaAN3Is3cc" target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Buy Now
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-gray-500">
            <p>Questions? Contact support@myasworld.com</p>
          </div>
        </div>
      </div>
    </EbookLayout>
  );
};

export default BuyPage;
