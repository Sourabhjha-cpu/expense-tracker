import React, { useState } from 'react';
import IncomeForm from './IncomeForm';

const ParentComponent = () => {
  const [incomes, setIncomes] = useState([]);

  const handleAddIncome = (income) => {
    setIncomes((prevIncomes) => [...prevIncomes, income]);
  };

  return (
    <div>
      <h1>Income Tracker</h1>
      <IncomeForm onAddIncome={handleAddIncome} />
      {/* Display the list of incomes */}
      <ul>
        {incomes.map((income) => (
          <li key={income.id}>
            {income.source} - ${income.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
