/**
 * Wallet component
 *
 * Wallet and balance management interface
 */

import React, { useState } from "react";

const Wallet = () => {
  const [addFundsAmount, setAddFundsAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  const walletData = {
    balance: 2567.89,
    totalDeposits: 5000.00,
    totalSpent: 2432.11,
    pendingPayments: 125.50,
  };

  const transactions = [
    {
      id: "T001",
      type: "deposit",
      amount: 100.00,
      method: "PayPal",
      status: "Completed",
      date: "2024-01-17 14:30",
    },
    {
      id: "T002",
      type: "order",
      amount: -15.99,
      method: "Balance",
      status: "Completed",
      date: "2024-01-16 10:15",
      description: "Instagram Followers - Order #1001",
    },
    {
      id: "T003",
      type: "deposit",
      amount: 250.00,
      method: "Stripe",
      status: "Completed",
      date: "2024-01-15 09:45",
    },
    {
      id: "T004",
      type: "order",
      amount: -25.50,
      method: "Balance",
      status: "Completed",
      date: "2024-01-14 16:20",
      description: "YouTube Views - Order #1002",
    },
  ];

  const handleAddFunds = (e) => {
    e.preventDefault();
    if (addFundsAmount && parseFloat(addFundsAmount) > 0) {
      alert(`Adding $${addFundsAmount} via ${paymentMethod}`);
      setAddFundsAmount("");
    }
  };

  return (
    <section id="wallet" className="wallet-section">
      <div className="wallet-container">
        <div className="wallet-header">
          <h1>Wallet & Balance</h1>
          <p>Manage your funds and payment methods</p>
        </div>

        {/* Balance Overview */}
        <div className="balance-cards">
          <div className="balance-card main">
            <h3>Current Balance</h3>
            <p className="balance-amount">${walletData.balance.toFixed(2)}</p>
            <button className="add-funds-quick">+ Add Funds</button>
          </div>
          
          <div className="balance-card">
            <h4>Total Deposits</h4>
            <p className="amount positive">${walletData.totalDeposits.toFixed(2)}</p>
          </div>
          
          <div className="balance-card">
            <h4>Total Spent</h4>
            <p className="amount negative">${walletData.totalSpent.toFixed(2)}</p>
          </div>
          
          <div className="balance-card">
            <h4>Pending</h4>
            <p className="amount pending">${walletData.pendingPayments.toFixed(2)}</p>
          </div>
        </div>

        {/* Add Funds Form */}
        <div className="add-funds-section">
          <h2>Add Funds</h2>
          <form onSubmit={handleAddFunds} className="add-funds-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="amount">Amount (USD)</label>
                <input
                  type="number"
                  id="amount"
                  value={addFundsAmount}
                  onChange={(e) => setAddFundsAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="10"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="payment-method">Payment Method</label>
                <select
                  id="payment-method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="paypal">PayPal</option>
                  <option value="stripe">Credit Card (Stripe)</option>
                  <option value="crypto">Cryptocurrency</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
            </div>
            
            <button type="submit" className="add-funds-btn">
              Add Funds
            </button>
          </form>
        </div>

        {/* Transaction History */}
        <div className="transaction-history">
          <h2>Transaction History</h2>
          <div className="transactions-table">
            <div className="table-header">
              <span>Transaction ID</span>
              <span>Type</span>
              <span>Amount</span>
              <span>Method</span>
              <span>Status</span>
              <span>Date</span>
            </div>
            
            {transactions.map(transaction => (
              <div key={transaction.id} className="table-row">
                <span>{transaction.id}</span>
                <span className={`transaction-type ${transaction.type}`}>
                  {transaction.type === "deposit" ? "Deposit" : "Order Payment"}
                </span>
                <span className={`amount ${transaction.amount > 0 ? 'positive' : 'negative'}`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </span>
                <span>{transaction.method}</span>
                <span className={`status ${transaction.status.toLowerCase()}`}>
                  {transaction.status}
                </span>
                <span>{transaction.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;