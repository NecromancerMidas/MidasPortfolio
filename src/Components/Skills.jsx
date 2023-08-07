import commonStyles from '../StyleSheets/CommonSectionChildOdd.module.css';
import { SideNumbers } from './SideNumbers';
import { LanguageContext } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { SkillContainer } from './SkillContainer';
import reactsvg from '../assets/svg/react.svg';
import javascript from '../assets/img/javascript.png';
import CSharp from '../assets/img/C_Sharp.png';
import HTML from '../assets/svg/HTML5.svg';
import css from '../assets/svg/CSS.svg';
import net from '../assets/svg/net.svg'
import ef8 from '../assets/img/ef8.png';
import  styles  from '../StyleSheets/Skills.module.css';





export const Skills = () => {
    const {t} = useTranslation('Introduction');
    const {t:tHead} = useTranslation('Nav');
    const {language, changeLanguage} = useContext(LanguageContext);
    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        console.log(language);
    }

    return <div className={commonStyles.Container}>
    
    <div><h3>3.{tHead('skills')}</h3></div>
        <div className={commonStyles.ContentContainer}>
            <div className={commonStyles.DummyTerminalContainer}>
                <SideNumbers/>
                </div>
                <div className={commonStyles.InnerContentContainer}>
<h1>{t('Title')}</h1>
<div className={commonStyles.ImageContainer}>
    {/* <img src={Code}></img><img src={Code}></img> */}
    </div>
<div className={styles.ListContainer}>
<h4>{t('Languages')}:</h4>
<SkillContainer text={t('HTML')} imgSrc={HTML}/>
<SkillContainer text={t('CSS')} imgSrc={css}/>
<SkillContainer text={t('Javascript')} imgSrc={javascript}/>
<SkillContainer text={t('CSharp')} imgSrc={CSharp}/>
<h4>{t('FrameWorksLibraries')}:</h4>
<SkillContainer text={t('React')} imgSrc={reactsvg}/>
<SkillContainer text={t('Net6')} imgSrc={net}/>
<SkillContainer text={t('EntityCoreFramework')} imgSrc={ef8}/>
<h4>{t('Databases')}</h4>
<SkillContainer text={t('MySQL')}/>
<h4>{t('Tools')}</h4>
<SkillContainer text={t('Git')}/>
<SkillContainer text={t('VisualStudio')}/>
<SkillContainer text={t('Unity')}/>
<h4>{t('OtherSkills')}</h4>
<SkillContainer text={t('Entry1')}/>
<SkillContainer text={t('Entry2')}/>
<SkillContainer text={t('Entry3')}/>
<SkillContainer text={t('Entry4')}/>
<SkillContainer text={t('Entry5')}/>
<SkillContainer text={t('Entry6')}/>
<h4>{t('KeyQualities')}</h4>
<SkillContainer text={('Entry1')}/>
<SkillContainer text={('Entry2')}/>
<SkillContainer text={('Entry3')}/>
<SkillContainer text={('Entry4')}/>
<SkillContainer text={('Entry5')}/>
<SkillContainer text={('Entry6')}/>
<SkillContainer text={('Entry7')}/>
<h4>{t('Experience')}</h4>
<SkillContainer text={('Entry1')}/>
<SkillContainer text={('Entry2')}/>
<SkillContainer text={('Entry3')}/>
<SkillContainer text={('Entry4')}/>
<SkillContainer text={('Entry5')}/>
</div>
</div>
</div>
</div>
    
    }
