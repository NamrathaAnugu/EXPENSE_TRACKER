import React, { useEffect } from 'react';
import styled from "styled-components";
import { InnerLayout } from '../styles/layouts';
import Form from './Form2';
import { useUserContext } from '../context/UserContext';
import IncomeItem from './IncomeItem';
import { dollar } from '../utils/icons';

function Expenses(){
    const {addExpense,getExpenses,expenses,deleteExpense,totalExpense}=useUserContext();
    useEffect(()=>{
        getExpenses();
    },[])
    return(
        <ExpensesStyle>
            <InnerLayout>
            <h1>Expenses</h1>
            <h2 className='total-income'>Total Expense: <span>{dollar}{totalExpense()}</span></h2>
            <div className='income-content'>
                <div className='form-container'>
                    <Form/>
                </div>
                <div className='incomes'>
                    {expenses?expenses.map((income)=>{
                        const {_id,title,amount,date,category,description,type}=income;
                        return <IncomeItem
                        key={_id}
                        id={_id}
                        title={title}
                        date={date}
                        description={description}
                        amount={amount}
                        category={category}
                        type={type}
                        deleteItem={deleteExpense}
                        indicatorColor="var(--color-green)"
                        />
                    }):""}

                </div>

            </div>
            </InnerLayout>
        </ExpensesStyle>
    )
}

const ExpensesStyle=styled.div`
display: flex;
    overflow: scroll;
    &::-webkit-scrollbar{
        width: 0;
      }
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: #5C8984;
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        .incomes{
            flex: 1;
        }
    }

`

export default Expenses;