import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/GlobalStyle';
import {UserProvider} from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GlobalStyle/>
  <UserProvider>
    
    <App />
  </UserProvider>
    </>
  
);


