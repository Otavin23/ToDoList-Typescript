import React,{ChangeEvent, useState} from 'react'
import * as S from "./style"
import LixeiraIcon from "../../Assets/caixa.png"



const Main = ()=>{

    const [valueInput, setValueInput] = useState<string>("")
    const [tasks, setTasks] = useState<string[]>([])

    
    function handleTaskName({target}: ChangeEvent<HTMLInputElement>){
        setValueInput(target.value)
    }

    function handleAddTask(){
        setTasks([valueInput, ...tasks])
    } 

    return (
        <S.BackgroundM>
            <S.MContainer>
                <S.InputAdd>
                    <input type="text" placeholder='Digite algo..' onChange={handleTaskName}/>
                    <button onClick={handleAddTask}>submit</button>
                </S.InputAdd>
                <S.blockAdd>
                    {tasks?.map((task,index)=> (
                        <div className="blockAddContainer" key={index}>
                            <div className="BackgroundBlockAdd">
                                <p>{task}</p>
                                <button onClick={()=> setTasks(tasks.slice(0, index))}>
                                    <img  src={LixeiraIcon} alt="foto de uma lixeira" />
                                </button>
                            </div>
                        </div>
                    ))}
                </S.blockAdd>
            </S.MContainer>
        </S.BackgroundM>
    )

}
export default Main 