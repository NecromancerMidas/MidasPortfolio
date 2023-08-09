import { SkillContainer } from "../SkillContainer"
import reactsvg from '../../assets/svg/react.svg';
import ef8 from '../../assets/img/ef8.png';
import net from '../../assets/svg/net.svg'
import styles from '../../StyleSheets/SkillSubStyles/FrameworkLibraries.module.css';
import { useTranslation } from "react-i18next";
export const FrameWorkLibraries = () => {
    const {t} = useTranslation('FrameWorkLibraries');
return <div className={styles.Frameworks}>
    <h4>{t('FrameWorksLibraries')}:</h4>
    <div className={styles.FrameworksContainer}>
        <div>
<SkillContainer text={t('React')} imgSrc={reactsvg}/>
<SkillContainer text={t('Net6')} imgSrc={net}/>
</div>
</div>
<div>
<SkillContainer text={t('EntityCoreFramework')} imgSrc={ef8}/>
</div>
</div>




}