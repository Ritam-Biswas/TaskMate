import { getCompletedDataFromPending, getNormalDataFromPending } from '../../firebase.utils';
import { useState, useEffect } from 'react';
import './progressList.style.scss';

const ProgressList = () => {

    const [ pendingTasks, setPendingTasks ] = useState([])
    const [ completedTasks, setcompletedTasks ] = useState([])

    useEffect(()=>{
        const getData = async () => {
            const data = await getNormalDataFromPending();
            setPendingTasks(data)
        }
        getData();
    },[])

    useEffect(()=>{
        const getData = async () => {
            const data = await getCompletedDataFromPending();

            setcompletedTasks(data)
        }
        getData();
    },[])

    return(
        <div className="to-do-list-container">
            <div className="progress-list-container">
                <h3>Pending Tasks</h3>
                <div className="progress-tasks">
                    {
                        pendingTasks && pendingTasks.map((task)=>{
                            return <p key={task.task}>{task.task}</p>
                        })
                    }
                </div>
            </div>
            <div className="progress-list-container">
                <h3>Completed Tasks ( yet to fix bug over here! )</h3>
                <div className="progress-tasks">
                    {
                        completedTasks && completedTasks.map((task)=>{
                            return <p key={task.task}>{task.task}</p>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProgressList;