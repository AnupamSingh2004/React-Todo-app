
import { useEffect, useState } from "react";
import axios from "axios";

function Todos() {

  return (
    <div>
      <Todocard />

    </div>
  );
}

function Todocard() {

  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/todosget`).then((res)=>{
      setToDos(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, [updateUI]);

  const addTodo = ()=>{
    axios.post(`http://localhost:3000/api/todossave`,{todo:input}).then((res)=>{
      console.log(res.data);
      setUpdateUI((prevState)=>!prevState);
      setInput("");
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <>
      <div
        className={
          " flex  justify-around w-[28vw] h-[70vh] border-2-bac1 bg-bac1 backdrop-filter backdrop-blur-md bg-opacity-20 shadow-2xl rounded-xl"
        }
      >
        <div className={"w-full mx-auto p-10"}>
          <h1 className={"text-4xl flex justify-center pb-5 font-mono"}>
            Todos
          </h1>

          <form className={"flex flex-row justify-center"}>
            <div>
              <input
                type={"text"}
                className={
                  "rounded-l p-3 w-[18vw] outline-none text-xl font-semibold"
                }
                value={input}
                onChange={(e) => {

                  setInput(e.target.value);

                }}
                placeholder={"Add a Todo"}
              />
            </div>
            <div className={"bg-cyan-500"}>
              <button
                className={
                  "flex border-spacing-1 p-3.5 bg-buttoncolor hover:bg-buttonhover font-medium text-md "
                }
                onClick={addTodo}
              >
                Add Todo
              </button>

            </div>
          </form>
          <div className={"pt-6"}>
            <div
              className={
                "flex flex-col border-2 border-bac1 rounded-xl  p-5 w-full border-dashed  h-[48vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden"
              }
            >

              {toDos.map((toDo) => (
                  // eslint-disable-next-line react/jsx-key
                  <Todoincard  text={toDo.todo} id={toDo._id} setUpdateUI = {setUpdateUI}/>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function Todoincard({ text ,id,setUpdateUI}) {

  const deleteTodo = ()=>{
    axios.delete(`http://localhost:3000/api/todos/${id}`).then(res=>{
      console.log(res.data);
      setUpdateUI((prevState)=>!prevState);
    })
  }


  return (
    <>
      <div className={"flex flex-col space-y-2 w-full pb-2 "}>
        <div
          draggable={"true"}
          className={
            "pb-2  flex  text-2xl bg-bac1 hover:bg-buttoncolor hover:border-b-bac1 border-b-2 p-1 pl-2 pb-1 border-b-todoing rounded-xl w-full"
          }
        >
          <div className={"flex-1 gap-3 items-center"}>
            <h1 className={"pt-2 pl-2   "}> {text}</h1>
          </div>

          <div className={"flex space-x-2 items-center"}>
            <div>
              <button>done</button>
            </div>

            <div>
              <button className={"p-2 float-end"} onClick={deleteTodo}>delete</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Todos;
