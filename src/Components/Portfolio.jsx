
import commonStyles from '../StyleSheets/CommonSectionChildOdd.module.css';
import { SideNumbers } from './SideNumbers';
import { LanguageContext } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';





export const Portfolio = () => {
    const {t} = useTranslation('Introduction');
    const {t:tHead} = useTranslation('Nav');
    const {language, changeLanguage} = useContext(LanguageContext);
    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        console.log(language);
    }

    return <div className={commonStyles.Container}>
    
    <div><h3>3.{tHead('portfolio')}</h3></div>
        <div className={commonStyles.ContentContainer}>
            <div className={commonStyles.DummyTerminalContainer}>
                <SideNumbers/>
                </div>
                <div className={commonStyles.InnerContentContainer}>
<h1></h1>
<div className={commonStyles.ImageContainer}>
    {/* <img src={Code}></img><img src={Code}></img> */}
    </div>

<p>{t('something')}</p>
</div>
</div>
</div>
    
    }
