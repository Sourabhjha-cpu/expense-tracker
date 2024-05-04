import React from 'react';
import {useForm} from "react-hook-form"

const ExpenseForm = ({ addExpense}) => {

  const {register, handleSubmit ,reset ,formState:{errors}}= useForm()


  return (
    <form action="" className='mb-5' onSubmit={handleSubmit((data)=>{
     data.date = new Date().toISOString();
        addExpense(data);
    reset()})
    }>
        <div className="mb-3">
             <label htmlFor="description" className="form-label">Description</label>
        <input id='description' type="text" className='form-control' {...register("description" ,{minLength:6,required:true})} /> 
        {errors.description?.type== "required" && <p className='text-danger'>This field is required</p>}
         {errors.description?. type=="minLength" && <p className='text-danger'>This field required at least 6 characters</p>}
        </div>

        <div className="mb-3">
             <label htmlFor="amount" className="form-label">Amount</label>
        <input id='amount' type="number" className='form-control' {...register("amount" ,{required:true})} />
        {errors.amount?.type== "required" && <p className='text-danger'>This field is required</p>} 
        </div>

        <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          id="date"
          type="date"
          className="form-control"
          {...register('date', { required: true })}
        />
        {errors.date?.type === 'required' && (
          <p className="text-danger">This field is required</p>
        )}
      </div>

        <div className="mb-3">
             <label htmlFor="description" className="form-label">
                Category
                </label>
           <select name="" id="" className='form-select' {...register("category" ,{required:true})}>
            <option value=""></option>
            <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="groceries">Groceries</option>
           </select>
           {errors.category?.type== "required" && <p className='text-danger'>This field is required</p>}

        </div>
        <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default ExpenseForm