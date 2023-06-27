import styles from '../StyleSheets/Section.module.css';


export const Section = ({Content, id}) => {
//const ContentComp = Content.Content;


return <section id={id}>

<Content/>


<svg className={styles.EndOfPageSVG}viewBox="0 0 404 6">
<defs>

    </defs>
    <ellipse className={styles.EndOfPageMarker} cx="202" cy="3" rx="202" ry="3"/>
</svg>

</section>


}