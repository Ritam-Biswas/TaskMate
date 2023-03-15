import { useState, useEffect } from 'react';
import { ReactComponent as Add } from '../../assets/add.svg';
import TaskConatiner from '../task-container/taskContainer.component';
import { addPendingDocumentData, getNormalDataFromPending } from '../../firebase.utils';
import './toDoList.style.scss';

const ToDoList = () => {


    const [formFields, setFormFields] = useState(null);
    const [ normalTasks, setNormalTasks ] = useState([]);

    useEffect(()=>{
        if(formFields){
            addPendingDocumentData(formFields,"normal");
        }    
        const getData = async () => {
            const data = await getNormalDataFromPending();
            setNormalTasks(data)
        }
        getData();
    },[formFields])


    const handleSubmit = async (event) => {
        event.preventDefault();
        const task = event.target.elements.task.value;
        const date = event.target.elements.date.value;
        setFormFields({
            task : task,
            date : date
        });
        document.getElementById('task').value = "";
        document.getElementById('date').value = "";
    }
 

    return(
        <div className="to-do-list-container">
            <div className="list-container">
                {
                    normalTasks && normalTasks.map((task)=>{
                            return <TaskConatiner toDo={task} key={task.task}/>
                    }) 
                }
            </div>
            <div className="list-input-container">
                <form className='list-form' onSubmit={handleSubmit}>
                    <input type="text" name="task" placeholder='Add to do' className='task-input' required id='task'/>
                    <input type="date" name="date"  className='date-input' required id='date'/>
                    <button type='submit' className="list-input-icons">
                        <Add/>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ToDoList;