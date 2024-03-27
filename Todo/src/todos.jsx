
import { useEffect, useState } from "react";
import axios from "axios";
import Todoincard from "./Todosinsidecard.jsx"

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
      // console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, [updateUI]);

  const addTodo = (e)=>{
    if (input){
      axios.post(`http://localhost:3000/api/todossave`,{todo:input,done:false}).then((res)=>{
        console.log(res.data);
        setUpdateUI((prevState)=>!prevState);
        setInput("");
      }).catch((err)=>{
        console.log(err);
      })
    }
    e.preventDefault();
  }

  const handleCheckedChange =(id)=>{

  axios.put(`http://localhost:3000/api/todos/${id}`).then(
    (res)=>{
      console.log(res.data)}).catch((err)=>{
    console.log(err)});

    setUpdateUI((prevState)=>!prevState);
    window.location.reload();


  }

  return (
    <>
      <div
        className={
          " flex  justify-center  w-0  sm:w-[28vw] h-[70vh] border-2-bac1 bg-bac1 backdrop-filter backdrop-blur-md bg-opacity-20 shadow-2xl rounded-xl font-poppins"
        }
      >

        <div className={"pl-1 sm:w-full  sm:mx-auto sm:p-10"}>

          <h1 className={"text-4xl  flex justify-center items-center pb-5 font-mono"}>
            Todos
          </h1>

          <form className={"flex  w-full flex-col sm:flex-row justify-center"}>
            <div>
              <input
                type={"text"}
                className={
                  "rounded-l p-3 w-[85vw] sm:w-[18vw] outline-none text-xl font-semibold"
                }

                value={input}

                onChange={(e) => {
                  setInput(e.target.value);
                }}
                placeholder={"Add a Todo"}
              />
            </div>

            <div className={"flex pt-5 sm:pt-0 justify-center bg-cyan-500"}>
              <button
                className={
                  "flex  border-spacing-1 rounded-l sm:rounded-none p-3.5 bg-buttoncolor hover:bg-buttonhover font-medium text-md "
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
                "flex flex-col border-2 border-bac1 rounded-xl  p-5 w-full border-dashed w-[85vw] sm:w-[24vw] h-[48vh] sm:h-[48vh] overflow-y-scroll [&::-webkit-scrollbar]:hidden"
              }
            >
              {toDos.map((toDo) => (
                  // eslint-disable-next-line react/jsx-key
                  <Todoincard  text={toDo.todo} id={toDo._id} setUpdateUI = {setUpdateUI} handleChange={handleCheckedChange} done={toDo.done} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Todos;
