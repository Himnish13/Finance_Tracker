import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell, Legend, BarChart, Bar
} from 'recharts';
import "./navbar.css";

// Data for charts
const dataPie = [
  { name: 'Food', value: 8500 },
  { name: 'Transportation', value: 10500 },
  { name: 'Health', value: 6200 },
  { name: 'Household', value: 9800 },
  { name: 'Subscription', value: 4100 },
  { name: 'Entertainment', value: 7300 },
  { name: 'Education', value: 5400 },
  { name: 'Others', value: 3900 },
];

const COLORS = [
  "#FF6384", "#36A2D0", "#FFCE56", "#4BC0C0",
  "#9966FF", "#FF9F40", "#8DD1E1", "#C7CEEA"
];

const data = [
  { month: '2015-01', spending: 4500 },
  { month: '2015-02', spending: 6200 },
  { month: '2015-03', spending: 3900 },
  { month: '2015-04', spending: 8100 },
  { month: '2015-05', spending: 20500 },
  { month: '2015-06', spending: 1800 },
  { month: '2015-07', spending: 11200 },
  { month: '2015-08', spending: 5200 },
  { month: '2015-09', spending: 4300 },
  { month: '2015-10', spending: 9000 },
  { month: '2015-11', spending: 13000 },
  { month: '2015-12', spending: 4000 },
  { month: '2016-01', spending: 7000 },
  { month: '2016-02', spending: 1500 },
  { month: '2016-03', spending: 8800 },
  { month: '2016-04', spending: 22000 },
  { month: '2016-05', spending: 6700 },
  { month: '2016-06', spending: 9200 },
  { month: '2016-07', spending: 17500 },
  { month: '2016-08', spending: 3400 },
];

// Transaction data
const transactions = [
  { date: '2025-04-01', category: 'Groceries', amount: 52.30, mode: 'Card', type: 'Expense' },
  { date: '2025-04-02', category: 'Salary', amount: 1500.00, mode: 'Bank Transfer', type: 'Income' },
  { date: '2025-04-03', category: 'Dining', amount: 27.80, mode: 'UPI', type: 'Expense' },
  { date: '2025-04-03', category: 'Freelancing', amount: 400.00, mode: 'PayPal', type: 'Income' },
  { date: '2025-04-04', category: 'Electricity Bill', amount: 120.45, mode: 'Card', type: 'Expense' },
  { date: '2025-04-05', category: 'Movie', amount: 18.00, mode: 'Cash', type: 'Expense' },
  { date: '2025-04-06', category: 'Gift', amount: 100.00, mode: 'Cash', type: 'Income' },
  { date: '2025-04-06', category: 'Shopping', amount: 200.99, mode: 'Card', type: 'Expense' },
  { date: '2025-04-07', category: 'Interest', amount: 35.50, mode: 'Bank Transfer', type: 'Income' },
  { date: '2025-04-07', category: 'Petrol', amount: 65.75, mode: 'UPI', type: 'Expense' }
];

// Goals data
const goals = [
  {
    title: "Buying a car",
    collected: "$1000",
    target: "$15000",
    deadline: "Aug 2030",
  },
  {
    title: "Vacation",
    collected: "$500",
    target: "$1000",
    deadline: "Aug 2024",
  },
];

const Dash = () => (
  <>
    <div className="Main">
      <div className="Nav">
        <h2>Dashboard</h2>
        <h3>Himnish</h3>
        <svg width="40px" height="30px" viewBox="-4.8 -4.8 29.60 29.60" xmlns="http://www.w3.org/2000/svg">
          {/* SVG content here */}
        </svg>
      </div>

      <div className="Content">
        <div className="graphs">
          <div className="Monthly">
            <h3>Monthly Report</h3>
            <div className="p-4 bg-white shadow-md rounded-xl mspending">
              <ResponsiveContainer width="90%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" angle={-45} textAnchor="end" interval={0} height={60} />
                  <YAxis tickFormatter={(value) => `₹${value}`} />
                  <Tooltip formatter={(value) => `₹${value}`} />
                  <Line type="monotone" dataKey="spending" stroke="#007BFF" dot />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="Category">
            <h3>Category Chart</h3>
            <div className="p-4 bg-white shadow-md rounded-xl">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={dataPie}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={140}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  >
                    {dataPie.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value}`} />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="Data">
          <div className="Info">
            <div className="Money">
              <div className="Income">
                <h3>Income</h3>
                <p>$3000</p>
                <h5>Amount of income</h5>
              </div>
              <div className="Expense">
                <h3>Expense</h3>
                <p>$1880</p>
                <h5>Amount of expense</h5>
              </div>
            </div>

            <div className="Goals">
              <h3 className="goals-title">Goals</h3>
              <div className="goals-list">
                {goals.map((goal, index) => (
                  <div key={index} className="goal-item">
                    <div className="goal-info">
                      <div className="goal-name">{goal.title}</div>
                      <div className="goal-deadline">Target Collected on {goal.deadline}</div>
                    </div>
                    <div className="goal-amounts">
                      <div className="goal-line">
                        <span className="label">Collected</span>
                        <span className="amount">{goal.collected}</span>
                      </div>
                      <div className="goal-line">
                        <span className="label">Target</span>
                        <span className="amount bold">{goal.target}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="Transactions">
            <h3>Transactions</h3>
            <table className="transaction-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Mode</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn, index) => (
                  <tr key={index}>
                    <td>{txn.date}</td>
                    <td>{txn.category}</td>
                    <td>₹{txn.amount}</td>
                    <td>{txn.mode}</td>
                    <td>{txn.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Dash;
