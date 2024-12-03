import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TopStats } from './TopStats';

interface HeaderProps {
  stats: Array<{ label: string; value: string; }>;
}

export const Header: React.FC<HeaderProps> = ({ stats }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TopStats stats={stats} onNavigate={navigate} />
      </div>
    </header>
  );
};