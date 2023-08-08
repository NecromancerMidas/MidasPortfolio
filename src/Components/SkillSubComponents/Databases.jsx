import { SkillContainer } from "../SkillContainer"
import { useTranslation } from "react-i18next";

export const Databases = () => {
    const {t} = useTranslation('Databases');
return <div>
<h4>{t('Databases')}:</h4>
<SkillContainer text={t('MySQL')}/>
</div>



}