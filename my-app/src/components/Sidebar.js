import React, { useState } from 'react';
import './Sidebar.css';

export const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('my-work');

  const navItems = [
    { id: 'my-work', label: 'My Work', icon: '📋', href: '/my-work' },
    { id: 'automation', label: 'Automation', icon: '⚙️', href: '/automation' },
    { id: 'search', label: 'Search', icon: '🔍', href: '/search' },
    { id: 'sessions', label: 'Sessions', icon: '📂', href: '/sessions' }
  ];

  const handleClick = (id) => {
    setActiveItem(id);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Navigation</h3>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};
