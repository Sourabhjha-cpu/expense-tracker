import React from 'react'

const ExpenseList = ({items,deleteItem ,editItem}) => {
  return (
    <table className="table">
  <thead>
    <tr>
     
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      
      <th scope="col">Date and Time</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
      
      
    </tr>
  </thead>
  <tbody>
    {items.map((item,index)=> <tr key={index}>
      <td >{item.description}</td>
    <td>${item.amount}</td>
    <td>{formatDateTime(item.date)}</td>
    <td>{item.category}</td>
    
    <td><button className="btn btn-outline-danger" onClick={()=>deleteItem(item.id)}>Delete</button>
    <button className="btn btn-outline-dark "  onClick={() =>  editItem(item.id) }>
                
                Edit
              </button>
    </td>
    
    
    
  </tr>)
  }
    <tr>
      <td><h3>Total</h3></td>

      
    <td><h3>${ items.reduce((total,item) => total + parseInt(item.amount),0).toFixed(2)}</h3></td>
    
  </tr>
    
  </tbody>
</table>
  )
}
const formatDateTime = (dateTimeString) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  return new Date(dateTimeString).toLocaleString(undefined, options);
};

export default ExpenseList