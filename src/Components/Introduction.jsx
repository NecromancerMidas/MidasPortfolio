import styles from '../StyleSheets/CommonSectionChildOdd.module.css';
import Code from '../assets/img/code.png';
import { LanguageContext } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { SideNumbers } from './SideNumbers';
export const Introduction = ( ) => {



    const {t} = useTranslation('Introduction');
const {language, changeLanguage} = useContext(LanguageContext);
const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    console.log(language);
}
const terminalNumbers = [];
for(let i = 1; i <= 20; i++) {
    terminalNumbers.push(<p key={i}>{`${i}`}</p>);
}
return <div className={styles.Container}>

        <div><h3>1.Introduction</h3></div>
        <div className={styles.ContentContainer}>
            <div className={styles.DummyTerminalContainer}>
                 <SideNumbers/>
                </div>
                <div className={styles.InnerContentContainer}>
<h1>{t("title")}</h1>
<div className={styles.ImageContainer}>
    {/* <img src={Code}></img><img src={Code}></img> */}
    </div>

<p>{t("mainContent")}</p>
</div>
</div>
</div>



}