import { Section } from "./Section"
import { Introduction } from "./Introduction";
import {AboutMe } from "./AboutMe";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import {SectionContentOdd} from "./SectionContentOdd";
import styles from "../StyleSheets/Main.module.css";


export const Main = () => {
const ContentArray = [{Component: Introduction, id:'Introduction'},{Component:AboutMe, id:'AboutMe'},{Component:Skills, id:'Skills'},];
return <main>
{ContentArray.map((content,index) => <Section key={index + 1} id={content.id} Content={content.Component}></Section>)}


</main>



}