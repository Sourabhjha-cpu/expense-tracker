import React, { useState } from 'react'
import ExpenseList from '../components/ExpenseList'
import ExpenseFilter from '../components/ExpenseFilter';
import ExpenseForm from '../components/ExpenseForm';
import EditExpense from '../components/EditExpense';


function App()  {

  const [expenses, setExpenses]= useState([
    {id:1, description:"2 packs of sugar",amount:50,category:"groceries" ,date: new Date().toISOString(),},
    {id:2, description:"2 packs of biscuit",amount:60,category:"groceries",date: new Date().toISOString(),},
    {id:3, description:"Electricity Bill",amount:100,category:"utilities",date: new Date().toISOString(),},
    {id:4, description:"1 spotify subscriptions",amount:30,category:"entertainment",date: new Date().toISOString(),},
    {id:5, description:"2 Netflix subscriptions",amount:30,category:"entertainment" ,date: new Date().toISOString(),},
]);

  const addItem=(data)=>{
    setExpenses(()=>[...expenses, data])
  }

  const [editingExpense, setEditingExpense] = useState(null);

  const deleteItem=(id)=>{
    setExpenses(expenses.filter(expense=> expense.id !== id))
  }   

  const filterItem=(cat)=>{
    setExpenses(expenses.filter(expense=> expense.category== cat))
  }

  const editExpense = (id) => {
    // Find the expense by ID and set it to the editingExpense state
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setEditingExpense(expenseToEdit);
    const newDescription = prompt('Enter new description:', expenseToEdit.description);
    const newAmount = parseFloat(prompt('Enter new amount:', expenseToEdit.amount));

    // If the user cancels, do not proceed with the update
    if (newDescription === null || isNaN(newAmount)) {
      console.log('Edit canceled.');
      return;
    }

    // Update the state using the functional form of setExpenses
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id
          ? {
              ...expense,
              description: newDescription,
              amount: newAmount,
            }
          : expense
      )
    );
  };
  
  

  const saveEditedExpense = (editedExpense) => {
    // Update the expenses array with the edited expense
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => (expense.id === editedExpense.id ? editedExpense : expense))
    );

    // Clear the editing state
    setEditingExpense(null);
  };

  return (
    <>
   
    <ExpenseForm addExpense ={addItem} editingExpense={editingExpense}/>
    <ExpenseFilter filterItem = {filterItem} />
    <ExpenseList items ={expenses} deleteItem={deleteItem} editItem={editExpense} />
    </>
  )
}

export default App