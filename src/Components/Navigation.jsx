/**
 * Navigation component
 *
 * Top navigation bar for the SMM panel with user menu
 */
import React, { useState } from "react";

const Navigation = ({ user, onLogout, activeSection, setActiveSection }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "services", label: "Services" },
    { id: "orders", label: "Orders" },
    { id: "wallet", label: "Wallet" },
  ];

  return (
    <nav className="smm-navigation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <h2>SMM Panel</h2>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* User Menu */}
        <div className="user-menu">
          <button 
            className="user-menu-trigger"
            onClick={() => setUserMenuOpen(!userMenuOpen)}
          >
            <span className="user-avatar">👤</span>
            <span className="user-name">{user}</span>
            <span className="dropdown-arrow">▼</span>
          </button>

          {userMenuOpen && (
            <div className="user-dropdown">
              <button className="dropdown-item">Profile</button>
              <button className="dropdown-item">Settings</button>
              <button className="dropdown-item">API Documentation</button>
              <hr className="dropdown-divider" />
              <button className="dropdown-item logout" onClick={onLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;