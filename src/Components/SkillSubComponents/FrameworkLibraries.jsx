import { SkillContainer } from "../SkillContainer"
import reactsvg from '../../assets/svg/react.svg';
import ef8 from '../../assets/img/ef8.png';
import net from '../../assets/svg/net.svg'
import { useTranslation } from "react-i18next";
export const FrameWorkLibraries = () => {
    const {t} = useTranslation('FrameWorkLibraries');
return <div>
    <h4>{t('FrameWorksLibraries')}:</h4>
<SkillContainer text={t('React')} imgSrc={reactsvg}/>
<SkillContainer text={t('Net6')} imgSrc={net}/>
<SkillContainer text={t('EntityCoreFramework')} imgSrc={ef8}/>
</div>




}