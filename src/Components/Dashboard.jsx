/**
 * Dashboard component
 *
 * Main dashboard for the SMM panel showing overview stats and quick actions
 */

import React from "react";

const Dashboard = ({ user }) => {
  // Sample data for demonstration
  const stats = {
    totalOrders: 1234,
    pendingOrders: 45,
    completedOrders: 1189,
    totalBalance: 2567.89,
    totalSpent: 15430.50,
  };

  const recentOrders = [
    { id: 1001, service: "Instagram Followers", quantity: 1000, status: "Completed", amount: "$15.99" },
    { id: 1002, service: "YouTube Views", quantity: 5000, status: "In Progress", amount: "$25.50" },
    { id: 1003, service: "Facebook Likes", quantity: 500, status: "Pending", amount: "$8.75" },
    { id: 1004, service: "Twitter Followers", quantity: 2000, status: "Completed", amount: "$18.00" },
  ];

  return (
    <section id="dashboard" className="dashboard-section">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <p>Welcome back, {user}!</p>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Total Orders</h3>
            <p className="stat-number">{stats.totalOrders.toLocaleString()}</p>
          </div>
          <div className="stat-card">
            <h3>Pending Orders</h3>
            <p className="stat-number pending">{stats.pendingOrders}</p>
          </div>
          <div className="stat-card">
            <h3>Completed Orders</h3>
            <p className="stat-number completed">{stats.completedOrders.toLocaleString()}</p>
          </div>
          <div className="stat-card">
            <h3>Balance</h3>
            <p className="stat-number balance">${stats.totalBalance.toFixed(2)}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button className="action-btn primary">Add Funds</button>
            <button className="action-btn secondary">New Order</button>
            <button className="action-btn secondary">View Services</button>
            <button className="action-btn secondary">Order History</button>
          </div>
        </div>

        {/* Recent Orders */}
        <div className="recent-orders">
          <h2>Recent Orders</h2>
          <div className="orders-table">
            <div className="table-header">
              <span>Order ID</span>
              <span>Service</span>
              <span>Quantity</span>
              <span>Status</span>
              <span>Amount</span>
            </div>
            {recentOrders.map(order => (
              <div key={order.id} className="table-row">
                <span>#{order.id}</span>
                <span>{order.service}</span>
                <span>{order.quantity.toLocaleString()}</span>
                <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                  {order.status}
                </span>
                <span>{order.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;