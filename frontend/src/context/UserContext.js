import { createContext,useContext,useState } from "react";
import axios from 'axios';

const UserContext=createContext();
const BASE_URL="https://ecommerce-backend-ivory.vercel.app/";


export const UserProvider=({children})=>{
    const [user, setUser] = useState("akash");
    const [auth,setAuth]=useState(false);
    const [name,setName]=useState("");
    const [incomes,setincomes]=useState([]);
    const [expenses,setExpenses]=useState([]);
    const [error,setError]=useState(null);
    const login=async(lemail,lpass)=>{
        await axios.post(`${BASE_URL}login`,{email:lemail,password:lpass}).then((res)=>{
            if(res.data.message=="Logged in"){
                setUser(res.data.user);
                setName(res.data.name);
                setAuth(true);
                console.log(res.data.user);

            }else{
                alert(res.data.message);
            }
        })
    }
    const register=async(name,remail,rpass)=>{
        await axios.post(`${BASE_URL}register`,{name:name,email:remail,password:rpass}).then((res)=>{
            console.log(res.data);
            if(res.data.message=="Registered"){
                alert("Registered Succesfully Now Login!");
                
            }else{
                alert(res.data.message);
            }
        }).catch((e)=>{
            console.log(e)
        })
    }

    const logout=async()=>{
        setUser("");
        setName("");
        setAuth(false);
    }


    const addIncome=async(income)=>{
        const res=await axios.post(`${BASE_URL}add-income`,income)
    .catch((err)=>{
        alert("Fill all fields")
        console.log(err);
        setError(err.response.data.message);
        

    })
    getIncomes();
}
const getIncomes=async()=>{
    const response=await axios.post(`${BASE_URL}get-incomes`,{user:user});
    setincomes(response.data);
    console.log(response.data);
}


const deleteIncome=async(id)=>{
    const res=await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes();
}
const addExpense=async(expense)=>{
    const res=await axios.post(`${BASE_URL}add-expense`,expense)
.catch((err)=>{
    console.log(err);
    alert("Fill all fields");
    setError(err.response.data.message);

    

})
getExpenses()
}



const getExpenses=async()=>{
const response=await axios.post(`${BASE_URL}get-expenses`,{user:user});
setExpenses(response.data);
console.log(response.data);
}
const deleteExpense=async(id)=>{
    const res=await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses();
}


const totalIncome=()=>{
    let total=0;
    incomes.forEach((income)=>{
        total=total+income.amount;
    })
    return total;
}
const totalExpense=()=>{
    let total=0;
    expenses.forEach((income)=>{
        total=total+income.amount;
    })
    return total;
}
const totalBalance=()=>{
    return totalIncome()-totalExpense();
}
const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0, 3)
}


    return (
        <UserContext.Provider value={{auth,register,transactionHistory,name, user, login, logout ,addIncome,getIncomes,incomes,addExpense,getExpenses,expenses,deleteIncome,deleteExpense,totalIncome,totalExpense,totalBalance}}>
          {children}
        </UserContext.Provider>
      );
}



export const useUserContext=()=>{
    return useContext(UserContext)
}

