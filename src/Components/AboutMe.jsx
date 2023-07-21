
import styles from '../StyleSheets/AboutMe.module.css';
import commonStyles from '../StyleSheets/CommonSectionChildEven.module.css';
import { SideNumbers } from './SideNumbers';



export const AboutMe = () => {

return <div className={commonStyles.Container}>
    
    <div><h3>2.About Me</h3></div>
        <div className={commonStyles.ContentContainer}>
            <div className={commonStyles.DummyTerminalContainer}>
                <SideNumbers/>
                </div>
                <div className={commonStyles.InnerContentContainer}>
<h1></h1>
<div className={commonStyles.ImageContainer}>
    {/* <img src={Code}></img><img src={Code}></img> */}
    </div>

<p></p>
</div>
</div>
</div>

}