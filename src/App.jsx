import React, {useState, useEffect} from "react";
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo';
import {db} from './firebase';
import {query, collection, onSnapshot, updateDoc, doc} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-green-500 text-slate-100`,
  count: `text-center p-2`,
};

function App() {
  // States
  const [todos, setTodos] = useState([])

  // create todo
  // useEffect is a react hook
  useEffect(() => {
    const q = query(collection(db, 'todo')) // path for db
    // unsubscribe takes a snapshot of db so we can render
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = []
      querySnapshot.forEach((doc) => {
        todoArr.push({...doc.data(), id: doc.id})
      });
      setTodos(todoArr) // set to our state (setTodos) after the snapshot
    })
    return () => unsubscribe() // unsubscribe after
  }, []) // a dependecy array is passed to prevent a memory leak

  // Read todo from firebase
  // update todo: basically toggle the boolean value
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todo', todo.id),{
      completed: !todo.completed
  })
}

  // delete todo
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input className={style.input} type="text" placeholder="Add Todo"/>
          <button className={style.button}><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete}/>
          ))}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
}

export default App;
