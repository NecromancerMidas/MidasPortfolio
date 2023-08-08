import { SkillContainer } from "../SkillContainer";
import { useTranslation } from "react-i18next";



export const Tools = () => {
const {t} = useTranslation('Tools');
return <div>
    <h4>{t('Tools')}:</h4>
<SkillContainer text={t('Git')}/>
<SkillContainer text={t('VisualStudio')}/>
<SkillContainer text={t('Unity')}/>
</div>


    
}