import "./App.css";
import Home from "./components/Home";
import Todo from "./components/Todo";
import { TodoPage } from "./pages/TodoPage";
import { Route,Routes } from "react-router-dom";
import {Calendar} from "./pages/Calendar"
import {Todaypage} from "./pages/Todaypage"
import {Homepage} from "./pages/Homepage"
function App(){
    return(

        <>
        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="/todo" element={<TodoPage/>}></Route>
            <Route path="/today" element={<Todaypage/>}></Route>
            <Route path="/calendar" element={<Calendar/>}></Route>
        </Routes>
         <div className="App">
             <div className="todo">
            <TodoPage></TodoPage>
            <Calendar></Calendar>
            <Homepage></Homepage>
            <Todaypage></Todaypage>
             </div>            
        </div>
        </>
        
    );
}
export default App;