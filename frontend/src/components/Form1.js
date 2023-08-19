import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {Input,Button} from "@chakra-ui/react";
import {plus } from "../utils/icons";
function Form(){
    const {user,addIncome,getIncomes}=useUserContext();
    const [inputState,setInputState]=useState({
        user:user,
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',

    })
    const {title,amount,date,category,description}=inputState;
    const handleInput=name=>e=>{
        setInputState({...inputState,[name]:e.target.value})
    }
    const handleSubmit=e=>{
        e.preventDefault();
        addIncome(inputState);
        getIncomes()
        setInputState({
            user:user,
        title:'',
        amount:'',
        date:'',
        category:'',
        description:'',
        })
    }
    return (
        <FormStyled onSubmit={handleSubmit}>
            <div className="inpt-control">
                <Input 
                
                type="text"
                style={{width:"100%"}}
                value={title}
                name={'title'}
                placeholder="Income Name"
                onChange={handleInput('title')}/>
            </div>
            <div className="inpt-control">
            <Input 
                type="text"
                style={{width:"100%"}}
                value={amount}
                name={'amount'}
                placeholder="Income Amount"
                onChange={handleInput('amount')}/>
            </div>
            <div className="input-control">
                <DatePicker 
                id="date"
                placeholderText="Enter Date"
                selected={date}
                dateFormat="dd/MM/yyyy"
                onChange={(date)=>{
                    setInputState({...inputState,date:date});
                }}/>
            </div>
            <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investiments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
            </div>
            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>
            <div className="submit-btn">
                <Button leftIcon={plus} colorScheme='purple' onClick={handleSubmit}>
                      Add Income
                </Button>
            </div>
            
        </FormStyled>
    )
}
const FormStyled=styled.form`
display: flex;
flex-direction: column;
min-height:120vh;
gap: 2rem;
color:#5C8984;
input, textarea, select{
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 2px solid #fff;
    background: transparent;
    resize: none;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    color: rgba(34, 34, 96, 0.9);
    &::placeholder{
        color: rgba(34, 34, 96, 0.4);
    }
}
.input-control{
    input{
        width: 100%;
    }
}

.selects{
    display: flex;
    justify-content: flex-end;
    select{
        color: rgba(34, 34, 96, 0.4);
        &:focus, &:active{
            color: rgba(34, 34, 96, 1);
        }
    }
}

.submit-btn{
    button{
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        &:hover{
            background: var(--color-green) !important;
        }
    }
}


`
export default Form;