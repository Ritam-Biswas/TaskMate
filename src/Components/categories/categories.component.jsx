import './categories.style.scss';
import { useContext } from 'react';
import { RenderContext } from '../../Context/render.context';
import { ReactComponent as Calender } from '../../assets/calender.svg';
import { ReactComponent as MyDay } from '../../assets/my-day.svg';
import { ReactComponent as PaperClip } from '../../assets/paper-clip.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';

const Categories = () => {

    const { setRenderElement } = useContext(RenderContext);

    const handleClick = (event) => {
        event.preventDefault();
        setRenderElement(event.target.outerText)

    }

    return(
            <div className="categories-container">
                <div className="categories">
                    <div className="category" onClick={handleClick}>
                        <Calender/>
                        <h3>Tasks</h3>
                    </div>
                    <div className="category" onClick={handleClick}>
                        <MyDay/>
                        <h3>Progress</h3>
                    </div>
                    <div className="category" onClick={handleClick}>
                        <PaperClip/>
                        <h3>Important</h3>
                    </div>
                </div>
                <div className="settings category">
                    <Settings/>
                    <h3>Settings</h3>
                </div>
            </div>
    )
}

export default Categories;