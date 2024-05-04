// ExpenseForm.js
import React, { useState, useEffect } from 'react';

const ExpenseForm = ({ addExpense, editingExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (editingExpense) {
      setDescription(editingExpense.description);
      setAmount(editingExpense.amount);
    }
  }, [editingExpense]);

  const handleSubmits = (e) => {
    e.preventDefault();

    if (editingExpense) {
      // Handle editing logic
      // Update the existing expense
      // Call a function like editExpense in App component
      // Pass the updated expense details to editExpense
    } else {
      // Handle adding logic
      addExpense({
        id: new Date().getTime(),
        description,
        amount: parseFloat(amount),
        category: 'Some default category', // You might want to add a category selection logic
        date: new Date().toISOString(),
      });

      // Clear the form after adding
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmits}>
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label>Amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />

      <button type="submit">{editingExpense ? 'Save' : 'Add'}</button>
    </form>
  );
};

export default ExpenseForm;
