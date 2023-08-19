import React, { useEffect } from 'react';
import styled from "styled-components";
import { InnerLayout } from '../styles/layouts';
import Form from './Form1';
import { useUserContext } from '../context/UserContext';
import IncomeItem from './IncomeItem';
import { dollar } from '../utils/icons';

function Incomes(){
    const {addIncome,getIncomes,incomes,deleteIncome,totalIncome}=useUserContext();
    useEffect(()=>{
        getIncomes();
    },[])
    return(
        <IncomesStyle>
            <InnerLayout>
            <h1>Incomes</h1>
            <h2 className='total-income'>Total Income: <span>{dollar}{totalIncome()}</span></h2>
            <div className='income-content'>
                <div className='form-container'>
                    <Form/>

                </div>
                <div className='incomes'>
                    {incomes?incomes.map((income)=>{
                        const {_id,title,amount,date,category,type,description}=income;
                        return <IncomeItem
                        key={_id}
                        id={_id}
                        title={title}
                        type={type}
                        date={date}
                        description={description}
                        amount={amount}
                        category={category}
                        indicatorColor="var(--color-green)"
                        deleteItem={deleteIncome}
                        />
                    }):""}

                </div>

            </div>
            </InnerLayout>
        </IncomesStyle>
    )
}

const IncomesStyle=styled.div`
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

export default Incomes;