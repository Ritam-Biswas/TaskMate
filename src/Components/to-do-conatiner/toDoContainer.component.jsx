import { useContext } from 'react';
import { RenderContext } from '../../Context/render.context';
import Categories from '../categories/categories.component';
import ToDoList from '../to-do-list/toDoList.component';
import ProgressList from '../progress-list/progressList.component';
import ImportantList from '../important-list/importantList.component'
import './toDoContainer.style.scss';

const ToDoContainer = () => {

    const { renderElement } = useContext(RenderContext)
    
    return(
        <div className="to-do-container">
            <Categories/>
            {(()=>{
                if(renderElement=="Tasks"){
                    return <ToDoList/>
                }else if(renderElement=="Progress"){
                    return <ProgressList/>
                }else{
                    return <ImportantList/>
                }
            })()}
        </div>
    )
}

export default ToDoContainer;