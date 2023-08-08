import commonStyles from '../StyleSheets/CommonSectionChildOdd.module.css';
import { Languages } from './SkillSubComponents/Languages';
import { FrameWorkLibraries } from './SkillSubComponents/FrameworkLibraries';
import { SideNumbers } from './SideNumbers';
import { LanguageContext } from './LanguageContext';
import { Databases } from './SkillSubComponents/Databases';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { SkillContainer } from './SkillContainer';




import  styles  from '../StyleSheets/Skills.module.css';
import { Tools } from './SkillSubComponents/Tools';





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
<div>
<Languages/>
<FrameWorkLibraries/>
</div>
<div><Databases/>
<Tools/>
</div>

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
