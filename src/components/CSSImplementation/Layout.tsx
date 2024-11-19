import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Features } from './Features';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
      </main>
    </div>
  );
}