import HeaderPicture from '../assets/img/HeaderPicture.png';
import NorwegianFlag from '../assets/img/Flag_of_Norway.png';
import BritishFlag from '../assets/img/Flag_of_the_United_Kingdom_(1-2).png';
import DutchFlag from  '../assets/img/vlag-nederland.png';
import EnglishFlag from '../assets/svg/English.svg';
import { LanguageContext } from './LanguageContext';
import classnames from 'classnames';
import styles from '../StyleSheets/Header.module.css';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';

export const Header = () => {
    const {t} = useTranslation('Header');
const {language, changeLanguage} = useContext(LanguageContext);
const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    console.log(language);
}
return <header id="Home">

<img src={HeaderPicture} className={styles.HeaderPicture}></img>
<h1>{t('title')}</h1>
<div className={styles.HeaderAccessabilityContainer}>
    <div className={styles.ThemeContainer}><h4>Color Mode:</h4>
    <label className={styles.switch}><input type="checkbox"/><span className={classnames(styles.slider ,styles.round)}></span>
</label></div>
    <div className={styles.FlagsContainer}>
<img src={BritishFlag} className={styles.Flags} onClick={() => handleLanguageChange("en")}></img>
<img src={NorwegianFlag} className={styles.Flags} onClick={() => handleLanguageChange("no")}></img>
<img src={DutchFlag} className={styles.Flags} onClick={() => handleLanguageChange("nl")}></img>
    </div>
</div>
</header>



}