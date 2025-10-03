"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50" data-class="header">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-heading font-bold text-primary" data-class="logo">
            <Link href="/">Athena Academia</Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block" data-class="nav">
            <ul className="flex space-x-8">
              <li><Link href="/" className="text-primary hover:text-secondary transition-colors">首页</Link></li>
              <li><Link href="#services" className="text-primary hover:text-secondary transition-colors">服务</Link></li>
              <li><Link href="#about" className="text-primary hover:text-secondary transition-colors">关于</Link></li>
              <li><Link href="#contact" className="text-primary hover:text-secondary transition-colors">联系</Link></li>
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-class="menu-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t" data-class="mobile-nav">
            <ul className="flex flex-col space-y-4">
              <li><Link href="/" className="block text-primary hover:text-secondary transition-colors">首页</Link></li>
              <li><Link href="#services" className="block text-primary hover:text-secondary transition-colors">服务</Link></li>
              <li><Link href="#about" className="block text-primary hover:text-secondary transition-colors">关于</Link></li>
              <li><Link href="#contact" className="block text-primary hover:text-secondary transition-colors">联系</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}