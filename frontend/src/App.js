import NavBar from "./comps/NavBar.jsx";
import HomePage from "./comps/HomePage.jsx"
import NotFound from "./comps/NotFound.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from "./comps/Posts.jsx";
import Login from "./comps/Login.jsx";
import Register from "./comps/Register.jsx";
import { createContext, useContext, useReducer } from "react";
import Logout from "./comps/Logout.jsx";
import Edit from "./comps/Edit.jsx";
import { Context } from "./context/Context.js";
import Reducer from "./context/Reducer.js";


export const userContext = createContext();
function App() {
  const { user, state ,dispatch }= useContext(Context);
  var userdetails=localStorage.getItem("user");
  var obj=JSON.parse(userdetails);
  if(obj!=null)
    user.loggedIn=true;
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
        <Route path="/" element={<HomePage />}/>
          <Route path="*"element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />}/> 
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
