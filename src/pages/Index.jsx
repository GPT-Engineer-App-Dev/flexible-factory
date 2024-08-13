import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
        <p className="text-lg mb-4">This is a bare-bones application that you can modify and build upon.</p>
        <Button>Get Started</Button>
      </main>
      <Footer />
    </div>
  );
};

export default Index;