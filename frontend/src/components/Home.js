import styled from 'styled-components';
import bg from '../img/18.jpg'
import { MainLaout } from '../styles/layouts';
import Navigation from './Navigation';
import React,{useState} from 'react';
import Dashboard from './Dashboard';
import Incomes from './Incomes';
import Expenses from './Expenses';
import { useUserContext } from '../context/UserContext';
function Home() {
    const [active,setActive]=useState(1);
    const con=useUserContext();
    const displayData=()=>{
        switch(active){
            case 1:
                return <Dashboard/>
            case 2:
              return <Dashboard/>
            case 3:
              return <Incomes/>
            case 4:
              return <Expenses/>
            default:
              return <Dashboard/>
        }
    }

  return (
    <AppStyled className='App'>
      <MainLaout>
        <Navigation active={active} setActive={setActive}/>
        <main>
            {displayData()}
        </main>
      </MainLaout>
    </AppStyled>
  );
}

const AppStyled=styled.div`
  height:120vh;
  
  background:#F2D8D8;
  position:relative;
  overflow-y:scroll;
  &::-webkit-scrollbar{
    width: 0;
  }
  main{
    flex: 1;
    width:auto;
    color:#F2D8D8;
    
    
  }
  
`

export default Home;
