
import { useEffect, useState } from "react";

function Todos() {

  const [message, setMessage] = useState("");
  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:3000/api/todos");
      const todos = await res.json();

      setMessage(todos.mssg);

      // console.log(todos);
    }

    getTodos();
  }, []);
  return (
    <div>
      <Todocard />

    </div>
  );
}

function Todocard() {
  const [todo, setTodo] = useState("");

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
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
            </div>
            <div className={"bg-cyan-500"}>
              <button
                className={
                  "flex border-spacing-1 p-3.5 bg-buttoncolor hover:bg-buttonhover font-medium text-md "
                }
                onClick={(event) => event.preventDefault()}
              >
                Add Todo
              </button>
            </div>
          </form>
          <div className={"pt-6"}>
            <div
              className={
                "flex border-2 border-bac1 rounded-xl  p-5 w-full border-dashed  h-[48vh]"
              }
            >
              <Todoincard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Todoincard() {
  return (
    <>
      <div className={"flex flex-col space-y-2 w-full "}>
        <div
          draggable={"true"}
          className={
            "pb-2  flex  text-2xl bg-bac1 hover:bg-buttoncolor hover:border-b-bac1 border-b-2 p-1 pl-2 pb-1 border-b-todoing rounded-xl w-full"
          }
        >
          <div className={"flex-1 gap-3 items-center"}>
            <h1 className={"pt-2 pl-2   "}>Go to Gym</h1>
          </div>

          <div className={"flex space-x-2 items-center"}>
            <div>
              <button>done</button>
            </div>

            <div>
              <button className={"p-2 float-end"}>delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todos;
