import { SkillContainer } from "../SkillContainer"
import javascript from '../../assets/img/javascript.png';
import CSharp from '../../assets/img/C_Sharp.png';
import HTML from '../../assets/svg/HTML5.svg';
import css from '../../assets/svg/CSS.svg';
import { useTranslation } from "react-i18next";
import styles from "../../StyleSheets/SkillSubStyles/Languages.module.css";


export const Languages = () => {
    const {t} = useTranslation('Languages');
return <div className={styles.Languages}>
<h4>{t('Languages')}:</h4>
<div className={styles.LanguagesContainer}>
<div className={styles.LanguagesDiv}>
<SkillContainer text={t('HTML')} imgSrc={HTML}/>
<SkillContainer text={t('CSS')} imgSrc={css}/>
</div>
<div>
<SkillContainer text={t('Javascript')} imgSrc={javascript}/>
<SkillContainer text={t('CSharp')} imgSrc={CSharp}/>
</div>
</div>
</div>

}