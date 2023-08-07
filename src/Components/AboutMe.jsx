
import styles from '../StyleSheets/AboutMe.module.css';
import commonStyles from '../StyleSheets/CommonSectionChildEven.module.css';
import { SideNumbers } from './SideNumbers';
import { LanguageContext } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';

export const AboutMe = () => {
    const {t} = useTranslation('AboutMe');
    const {t:tHead} = useTranslation('Nav');
    const {language, changeLanguage} = useContext(LanguageContext);
    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        console.log(language);
    }
return <div className={commonStyles.Container}>
    
    <div><h3>2.{tHead('aboutMe')}</h3></div>
        <div className={commonStyles.ContentContainer}>
            <div className={commonStyles.DummyTerminalContainer}>
                <SideNumbers number={50}/>
                </div>
                <div className={commonStyles.InnerContentContainer}>
<h1>{t('title')}</h1>
<div className={commonStyles.ImageContainer}>
    {/* <img src={Code}></img><img src={Code}></img> */}
    </div>

<p>{t('mainContentIntro')}</p>
<p>{t('mainContentGame1')}</p>
<p>{t('mainContentGame2')}</p>
<p>{t('mainContentGame3')}</p>
<p>{t('mainContentHistory')}</p>
<p>{t('mainContentMarcus')}</p>
<p>{t('mainContentStoicism')}</p>
</div>
</div>
</div>

}