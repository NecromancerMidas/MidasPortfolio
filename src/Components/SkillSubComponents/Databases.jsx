import { SkillContainer } from "../SkillContainer"
import { useTranslation } from "react-i18next";
import styles from '../../StyleSheets/SkillSubStyles/Databases.module.css';
import MySql from '../../assets/img/MySQL.png';
import FireStore from '../../assets/img/FireStore.png';
export const Databases = () => {
    const {t} = useTranslation('Databases');
return <div className={styles.Databases}>
<h4>{t('Databases')}:</h4>
<SkillContainer text={t('MySQL')} imgSrc={MySql}/>
<SkillContainer text={t('FireBaseFireStore')} imgSrc={FireStore}/>
</div>



}