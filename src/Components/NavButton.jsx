import { useState } from 'react';
import styles from '../StyleSheets/NavButton.module.css';
import {Link} from 'react-scroll';



export const NavButton = ({text, to, Sticky}) => {
    const [active, setActive] = useState(false);

    const handleSetActive = () => {
        setActive(true);
      }
    
      const handleSetInactive = () => {
        setActive(false);
      }

console.log(to)
console.log(Sticky)
return <>
<Link 
className={`${styles.button49} ${active ? styles.active : ''}`} 
to={to} 
spy={true} 
onSetActive={handleSetActive}
onSetInactive={handleSetInactive}
smooth={true} 
offset={!Sticky ? -29 : -29} 
duration={500} 
contentText={text}>{text}</Link> 

</>

//<button className={styles.button49} data={text}>{text}</button>

}