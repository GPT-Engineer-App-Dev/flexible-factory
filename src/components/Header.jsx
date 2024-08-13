import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6" />
          <span className="font-semibold text-lg">My App</span>
        </Link>
        <nav>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;