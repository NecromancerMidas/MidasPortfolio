import styles from '../StyleSheets/Introduction.module.css';
import Code from '../assets/img/code.png';
import { LanguageContext } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
export const Introduction = ( ) => {

    const {t} = useTranslation('Introduction');
const {language, changeLanguage} = useContext(LanguageContext);
const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    console.log(language);
}

return <div className={styles.Container}>
<h1>{t("title")}</h1>
<div className={styles.ImageContainer}>
    <img src={Code}></img><img src={Code}></img></div>

<p>{t("mainContent")}</p>

</div>



}