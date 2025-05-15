'use client';

import React from 'react';
import { Navigation } from './navigation';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Supreme Tile ERP</h1>
            </div>
          </div>
          <Navigation />
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
