import {InputContext} from './Context/InputFieldContext' ;
import { useContext } from "react";

export default function TaskInput(){
    const newInputContext = useContext(InputContext)
    return(
        <>
        <div className="input-field">
        <button onClick={(event)=>{
            newInputContext.handleAdd
        }}>إضافة</button>
        <input className="task-input" type="text"  placeholder="عنوان المهمة" onChange={(value)=>{
            newInputContext.handleChange
        }
        }/>
        </div>
       
        </>
    )
}