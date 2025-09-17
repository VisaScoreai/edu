/**
 * Application component
 *
 * SMM Panel - Social Media Marketing Dashboard Application
 */

import React, { useState, useEffect } from "react";

import Login from "./Components/Login";
import Navigation from "./Components/Navigation";
import Dashboard from "./Components/Dashboard";
import Services from "./Components/Services";
import Orders from "./Components/Orders";
import Wallet from "./Components/Wallet";

import "./styles.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [activeSection, setActiveSection] = useState("dashboard");

  // Check for existing authentication on app load
  useEffect(() => {
    const savedUser = localStorage.getItem("smmPanelUser");
    if (savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (email) => {
    setUser(email);
    setIsAuthenticated(true);
    localStorage.setItem("smmPanelUser", email);
  };

  const handleLogout = () => {
    setUser("");
    setIsAuthenticated(false);
    setActiveSection("dashboard");
    localStorage.removeItem("smmPanelUser");
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard user={user} />;
      case "services":
        return <Services />;
      case "orders":
        return <Orders />;
      case "wallet":
        return <Wallet />;
      default:
        return <Dashboard user={user} />;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div id="main" className="smm-app">
      <Navigation 
        user={user} 
        onLogout={handleLogout}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="main-content">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default App;
