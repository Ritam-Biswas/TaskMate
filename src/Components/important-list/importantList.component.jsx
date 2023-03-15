import { useEffect, useState } from 'react';
import { getImportantDataFromPending } from '../../firebase.utils';
import './importantList.style.scss';

const ImportantList = () => {

    const [ importantTasks, setImportantTasks ] = useState([])

    useEffect(()=>{
        const getData = async () => {
            const data = await getImportantDataFromPending();
            setImportantTasks(data)
        }
        getData();
    },[])

    return(
        <div className="important-task-container">
            <h3>Important Tasks</h3>
            <div className="important-tasks">
                {
                    importantTasks && importantTasks.map((task)=>{
                        return <p key={task.task}>{task.task}</p>
                    })
                }
            </div>
        </div>
    )
}

export default ImportantList;