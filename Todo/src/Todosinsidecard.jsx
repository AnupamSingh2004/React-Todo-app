import axios from "axios";



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

export default Todoincard;