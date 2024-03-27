import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAnglesRight, faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";


// eslint-disable-next-line react/prop-types
function CheckedText({text,done}){
    if (done){
        return <>
            <div className={"flex-1 gap-3 items-center "}>
                <h1 className={"pt-1 pl-2 pb-1 font-poppins text-2xl line-through"}> {text}</h1>
            </div>

        </>
    }
    return <>
        <div className={"flex-1 gap-3 items-center "}>
            <h1 className={"pt-1 pl-2 pb-1 font-poppins text-2xl  "}> {text}</h1>
        </div>

    </>
}
// eslint-disable-next-line react/prop-types
function Todoincard({ text ,id,setUpdateUI,handleChange,done}) {
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
                        "pb-2  flex  text-2xl bg-bac1 border-todoing hover:border-buttoncolor  p-1 pl-2 pb-1  rounded-xl w-full"
                    }
                >

                    <div className={"flex justify-center items-center pr-1 hover:cursor-pointer"}>
                        <FontAwesomeIcon icon={faAnglesRight} className={"flex justify-center items-center text-xl"}/>
                    </div>
                    
                    <CheckedText text={text} done={done}/>

                    <div className={"flex space-x-2 items-center"}>

                        <div className={"flex justify-center"}>
                            {/*<button>done</button>*/}

                            <FontAwesomeIcon icon={faCheck} className={"p-2 pr-3 pl-4 text-buttoncolor hover:text-black fill-current text-2.5xl hover:cursor-pointer "}
                                             onClick={()=>{handleChange(id)}}
                            />
                        </div>

                        <div>
                            {/*<button className={"p-2 float-end"} onClick={deleteTodo}>delete</button>*/}
                            <FontAwesomeIcon icon={faTrash} className={"p-2 pr-3 pl-4 text-deleteicon hover:text-deleteiconhover fill-current text-2xl float-end hover:cursor-pointer "} onClick={deleteTodo} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Todoincard;