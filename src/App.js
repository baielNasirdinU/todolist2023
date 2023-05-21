import React,{ useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {FaPen ,FaSave ,FaTrashAlt}from 'react-icons/fa'


function App() {
  const[todolist,setTodolist]=useState([])
  const [todo,setTodo]=useState('')
  const [newTodo,setNewTodo]=useState('')

  const [error,setError]=useState(false)

  const clickHandle=()=>{

if (newTodo.trim()&& newTodo ) {
  setTodolist(preveState=>[...preveState,{id:uuidv4(),todo:newTodo,delete:false,checkbox:false,update:false}])
  setNewTodo('')
  
}else{
  setError(true)

}
    
  

  }
if (error) {
  setTimeout(()=>{
    setError(false)

  },[3000])
  
}
  const checkbox=(id)=>{
    setTodolist(preveState=>preveState.map(todoItem=>todoItem.id===id?{...todoItem,checkbox:!todoItem.checkbox}:todoItem))

  }
  const deleteClick =(id)=>{
    setTodolist(preveState=>preveState.filter(item=>item.id!==id))

  }
  const update=(id ,oldTodo)=>{
    // console.log(id);
    setTodolist(preveState=>preveState.map(item=>item.id===id?{...item,update:!item.update}:item))
    setTodo(oldTodo)
  }
const saveClick=(id)=>{
 if (todo) { setTodolist(preveState=>preveState.map(item=>item.id===id?{...item,update:!item.update,todo:todo}:item))
  
 }


}

// useEffect(()=>{console.log(todolist);},[todolist])
  return (
    <div className="">
      <div className=" text-center m-6 text-[32px] capitalize font-bold ">todo list</div>
      <div className="border m-auto w-[500px] bg-white rounded-[20px] p-3">
     <div className="flex justify-around p-4">
     <input type="text " value={newTodo} className="p-1 border-4 mr-8 rounded " onChange={(e)=>setNewTodo(e.target.value)} 
        placeholder="write todo "/>

        <button className=" w-[80px]  bg-blue-500 rounded p-2 text-white capitalize" onClick={clickHandle}>add</button>
     </div>
{
  error?     <div className=" text-red-900">
wrong something
 </div>:''
}
      <div className="m-4 ">
        {
        todolist.map((item)=>
          <div className=" bg-blue-400 border mt-1 p-4 rounded-[8px]  gap-2 flex justify-between" key={item.id}>
     <div className= "flex gap-6 justify-center ">    
        <input type="checkbox"  className="w-5 h-5" value={item.checkbox} 
     onChange={()=>checkbox(item.id)} />
   {
     !item.update?    

         <h2 className={`capitalize ${item.checkbox ?'line-through':''} capitalize  text-[16px] bo`}>{item.todo}</h2>:
   <input type="text " value={todo} className="pl-2 mr-8 rounded"
    onChange={(e)=>setTodo( e.target.value)}/>
   }
          
          </div>
          <div className="flex gap-4">
{
  !item.update?
  <FaPen onClick={()=>update(item.id ,item.todo )} />:
  <FaSave  onClick={()=>saveClick(item.id)}/>
}
  <FaTrashAlt  onClick={()=>deleteClick(item.id)}/>
   </div>
          </div>
        )}
      </div>
      </div>
   
      
    </div>
  );
}

export default App;
