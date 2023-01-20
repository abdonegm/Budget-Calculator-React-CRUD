import React from 'react';
import { MdSend } from 'react-icons/md';


const ExpenseForm = ({charge,amount,handleCharge,handlesubmit, handleAmount,edit}) => {
  return (
    <form>
        <div className='form-center'>
            <div className='form-group'>
                <label htmlFor="charge" >charge</label>
                <input type="text" className='form-control' id="charge" name="charge" placeholder='e.g. rent' value={charge} onChange={handleCharge}/>
            </div>
            <div className='form-group'>
                <label htmlFor="amount" >charge</label>
                <input type="text" className='form-control' id="amount" name="amount" placeholder='e.g. 100' value={amount} onChange={handleAmount}/>
            </div>
        </div>
        <button type='submit' className='btn' onClick={handlesubmit}>{edit?"edit":"submit"} <MdSend /></button>
        </form>
  )
}

export default ExpenseForm
