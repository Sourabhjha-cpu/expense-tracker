import React from 'react'

const ExpenseFilter = ({filterItem}) => {
  return (
    <select name="" className="form-select mb-3" onChange={(event)=> filterItem(event.target.value)}>
        <option value=""></option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="groceries">Groceries</option>
    </select>
  )
}

export default ExpenseFilter