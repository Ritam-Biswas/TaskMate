import './taskContainer.style.scss';
import { ReactComponent as PaperClipGrey } from '../../assets/paper-clip-grey.svg';
import { ReactComponent as Done } from '../../assets/done.svg';
import { ReactComponent as Delete } from '../../assets/delete.svg';
import { addPendingDocumentData, addCompletedDocumentData, deleteDocumentdata } from '../../firebase.utils';

const TaskConatiner = ({toDo}) => {

    const { task, date} = toDo;

    const handleClick = () => {
        addPendingDocumentData(toDo,"important");
    }

    const handleCompletedTask = async () => {
        await addCompletedDocumentData(toDo);
        await deleteDocumentdata(toDo);
        window.location.reload();
    }

    const handleDelete = async () => {
        await deleteDocumentdata(toDo);
        window.location.reload();
    }

    return(
        <div className="task-container">
            <div className="task">
                <h3>{task}</h3>
                <div className="task-details">
                    <p>{date}</p>
                    <PaperClipGrey onClick={handleClick}/>
                </div>
            </div>
            <div className="edit-icons">
                <Done onClick={handleCompletedTask}/>
                <Delete onClick={handleDelete}/>
            </div>
        </div>
    )
}

export default TaskConatiner;