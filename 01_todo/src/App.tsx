
import { todo } from "node:test";
import { useState } from "react"


type Filter = "all" | "active" | "completed";

type Priority = "low" | "medium" | "high";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
}



function App() {

  const [inputText, setInputText] = useState<string>('');
  const [inputPriority, setInputPriority] = useState<Priority>("medium")

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Go to Gym", completed: false, priority: "medium", createdAt: new Date() },
    { id: 2, text: "Take a selfie", completed: false, priority: "low", createdAt: new Date() },

  ])

  // to count the completed todos
  const completedCount = todos.filter((todo) => todo.completed).length;

  const addTodo = () => {
    const trimmed = inputText.trim();

    if (!trimmed) return alert("Input is required");

    setTodos([
      ...todos,
      { id: Date.now(), text: trimmed, completed: false, priority: inputPriority, createdAt: new Date() }
    ]);

    setInputText("");
    setInputPriority("medium");

  }


  const toggleCompleted = (id: number) => {
    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )))
  }




  return (
    <div>

      <h1 className="text-center font-extrabold py-5 text-2xl"> Interview Question ---- 01 (Todo List) </h1>

      <div className="flex items-center justify-center gap-3 w-full h-32">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add new task..."
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="border border-amber-600 py-1 px-4 rounded-lg outline-none"
        />

        <button className="bg-amber-800 py-1 px-4 rounded-lg cursor-pointer active:scale-95" onClick={addTodo}> Add todo </button>
      </div>


      {/* header */}
      <div className="flex items-center justify-center w-full h-12">
        <h2 className="text-rose-700 font-bold text-md"> {completedCount} todos completed out of {todos.length}  </h2>
      </div>

      {/* todos listing */}

      <div className="flex mt-12 max-w-160 flex-wrap m-auto justify-center items-center gap-12 w-full">

        {
          todos.map((todo) => (
            <div className="font-extrabold" key={todo.id}>

              <button
                onClick={() => toggleCompleted(todo.id)}
                title={todo.completed ? "Mark incomplete" : "Mark comlete"}
                 style={{
                  marginTop: 2,
                  width: 20,
                  height: 20,
                  minWidth: 20,
                  borderRadius: "50%",
                  border: `2px solid ${todo.completed ? "#6366f1" : "#cbd5e1"}`,
                  background: todo.completed ? "#6366f1" : "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {todo.completed && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>


              <h3>  {todo.text} </h3>

              <button onClick={() => deleteTodo(todo.id)} className="text-red-500 border border-rose-600 rounded-full px-2 cursor-pointer hover:bg-rose-200"> ❌ </button>
            </div>
          ))
        }

      </div>


    </div>
  )


}

export default App
