import styles from '../StyleSheets/Nav.module.css';
import { LanguageContext } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { useState,useLayoutEffect,useRef } from 'react';
import { NavButton } from './NavButton';


export const Nav = () => {
    const {t} = useTranslation('Nav');
const {language, changeLanguage} = useContext(LanguageContext);
const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    console.log(language);
}

const [isSticky, setSticky] = useState(false);
const navbarRef = useRef(null)
const initialTop = useRef(0)
//const [navbarTop, setNavbarTop] = useState(0);
const style = isSticky ? styles.navSticky : styles.navNormal;


  useLayoutEffect(() => {
            if (navbarRef.current) {
            initialTop.current = navbarRef.current.getBoundingClientRect().top + window.scrollY;
        }

    /*if (navbarRef.current) {
        // Save the initial top offset when the component mounts
        setNavbarTop(navbarRef.current.getBoundingClientRect().top + window.scrollY);
      }*/
  
      const checkStickiness = () => {
        // Set isSticky to true if the scroll position is greater than or equal to the navbar's initial top offset
        const navbarTop = navbarRef.current ? navbarRef.current.getBoundingClientRect().top + window.scrollY : 0;
        setSticky(window.scrollY >= initialTop.current);
      };
    // When the component mounts, we check if we should stick the navbar
    checkStickiness();
    
    // When the user scrolls, we also check
    window.addEventListener('scroll', checkStickiness);

    // When the component unmounts, we need to remove the listener
    return () => {
      window.removeEventListener('scroll', checkStickiness);
    };
  }, []);

  // Determine which style to applyd


  return (
    <>
     {isSticky && <div style={{height: '6vh'}} />}
    <nav ref={navbarRef} className={style}><NavButton text={t('home')} to='Home'/><NavButton text={t('introduction')} to='Introduction' Sticky={isSticky}></NavButton><NavButton text={t('aboutMe')} to="AboutMe"></NavButton><NavButton text={t('portfolio')} to="Portfolio"/></nav>
    </>
  );
}

    