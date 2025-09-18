/**
 * Orders component
 *
 * Order management interface for viewing and tracking orders
 */

import React, { useState } from "react";

const Orders = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  
  const orders = [
    {
      id: 1001,
      service: "Instagram Followers",
      quantity: 1000,
      status: "Completed",
      amount: 15.99,
      date: "2024-01-15",
      startCount: 1250,
      remains: 0,
      link: "https://instagram.com/example"
    },
    {
      id: 1002,
      service: "YouTube Views",
      quantity: 5000,
      status: "In Progress",
      amount: 25.50,
      date: "2024-01-16",
      startCount: 850,
      remains: 2300,
      link: "https://youtube.com/watch?v=example"
    },
    {
      id: 1003,
      service: "Facebook Likes",
      quantity: 500,
      status: "Pending",
      amount: 8.75,
      date: "2024-01-17",
      startCount: 320,
      remains: 500,
      link: "https://facebook.com/post/example"
    },
    {
      id: 1004,
      service: "Twitter Followers",
      quantity: 2000,
      status: "Completed",
      amount: 18.00,
      date: "2024-01-14",
      startCount: 750,
      remains: 0,
      link: "https://twitter.com/example"
    },
    {
      id: 1005,
      service: "Instagram Likes",
      quantity: 1500,
      status: "Cancelled",
      amount: 12.00,
      date: "2024-01-13",
      startCount: 200,
      remains: 1500,
      link: "https://instagram.com/p/example"
    },
  ];

  const statusOptions = [
    { value: "all", label: "All Orders" },
    { value: "Pending", label: "Pending" },
    { value: "In Progress", label: "In Progress" },
    { value: "Completed", label: "Completed" },
    { value: "Cancelled", label: "Cancelled" },
  ];

  const filteredOrders = statusFilter === "all" 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "#28a745";
      case "In Progress": return "#ffc107";
      case "Pending": return "#6c757d";
      case "Cancelled": return "#dc3545";
      default: return "#6c757d";
    }
  };

  return (
    <section id="orders" className="orders-section">
      <div className="orders-container">
        <div className="orders-header">
          <h1>Order Management</h1>
          <p>Track and manage all your orders</p>
        </div>

        {/* Filter Controls */}
        <div className="orders-controls">
          <div className="filter-group">
            <label htmlFor="status-filter">Filter by Status:</label>
            <select 
              id="status-filter"
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className="status-filter"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button className="new-order-btn">+ New Order</button>
        </div>

        {/* Orders Table */}
        <div className="orders-table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Service</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Start Count</th>
                <th>Remains</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{order.service}</td>
                  <td>{order.quantity.toLocaleString()}</td>
                  <td>${order.amount.toFixed(2)}</td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>{order.date}</td>
                  <td>{order.startCount.toLocaleString()}</td>
                  <td>{order.remains.toLocaleString()}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="btn-small view-btn">View</button>
                      {order.status === "Pending" && (
                        <button className="btn-small cancel-btn">Cancel</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredOrders.length === 0 && (
          <div className="no-orders">
            <p>No orders found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Orders;