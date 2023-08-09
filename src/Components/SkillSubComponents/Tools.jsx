import { SkillContainer } from "../SkillContainer";
import { useTranslation } from "react-i18next";
import styles from "../../StyleSheets/SkillSubStyles/Tools.module.css";
import Community from "../../assets/svg/Community.svg";
import Code from "../../assets/svg/Code.svg";
import Unity from "../../assets/img/Unity.png";

export const Tools = () => {
const {t} = useTranslation('Tools');
return <div>
    <h4>{t('Tools')}:</h4>
    <div className={styles.ToolsDiv}>
<SkillContainer text={t('VisualStudioCommunity')} imgSrc={Community}/>
<SkillContainer text={t('Unity')} imgSrc={Unity}/>
</div>
<SkillContainer text={t('VisualStudioCode')} imgSrc={Code}/>

</div>


    
}