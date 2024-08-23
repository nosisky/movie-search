import React from "react";

interface HeaderProps {
  title: string;
  onSearch: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ title, onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gradient-to-r from-purple-700 to-purple-500 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-6">
          <a
            href="/"
            className="text-white text-2xl font-bold hover:text-purple-200"
          >
            {title}
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-purple-200">
              Home
            </a>
            <a href="#" className="text-white hover:text-purple-200">
              About
            </a>
            <a href="#" className="text-white hover:text-purple-200">
              Movies
            </a>
            <a href="#" className="text-white hover:text-purple-200">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
