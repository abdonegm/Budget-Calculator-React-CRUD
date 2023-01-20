import React from 'react';
import ExpenseItem from './ExpenseItem';
import { AiFillDelete } from 'react-icons/ai';


export default function ExpeneList({expenses,clearall,handleEdit,handleDelete}) {
  
 
  return (
    <div>
        <ul className='list'>
            {
                expenses.map((el)=>{
                    return  <ExpenseItem key={el.id} expense={el} handleDelete={handleDelete} handleEdit={handleEdit} />
                   

                })
            }

        </ul>
        {expenses.length >0 && <button className='btn' onClick={clearall}>Clear Expense <AiFillDelete className='btn-icon' /></button>}
      
    </div>
  )
}
