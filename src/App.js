
import React,{useState} from 'react';
import './App.css';

function App() {
  const [toDos,setTodos]=useState([])
  const [toDo,setTodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now(), text: toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((object,index)=>{
          return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              setTodos(toDos.filter(object2=>{
                
                if(object2.id===object.id){
                  object2.status=e.target.checked
                }
                return object2
              }))

            }}key={index} value={object.status} type="checkbox" name="" id="" />
            <p>{object.text}</p>
            
          </div>
          <div className="right">
            <i onClick={(e)=>{
              setTodos(toDos.filter(obj2=>{
                let temp;
                if(obj2.id !== object.id){
                  temp = obj2
                }
                return temp
              }))
            }}key={index} className="fas fa-times"></i>
          </div>
        </div>
        )
        })
        
}
{toDos.map((obj,index)=>{
  if(obj.status){
    return(<h1>{obj.text}</h1>)
  }
  return null
})}
      </div>
    </div>
  );
}


export default App;