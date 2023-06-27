import styles from '../StyleSheets/Footer.module.css';
import { useState, useRef, useEffect,useLayoutEffect} from 'react';


export const Footer = () => {
    const [isSticky, setSticky] = useState(true);
    const footerRef = useRef(null);
    const initialBottom = useRef(0);

    useEffect(() => {
        if (footerRef.current) {
            initialBottom.current = footerRef.current.getBoundingClientRect().bottom - window.scrollY;
        }
    }, []);

    const checkStickiness = () => {
        const footerHeight = footerRef.current ? footerRef.current.offsetHeight : 0;
        const offsetFromBottom = document.body.scrollHeight - (window.scrollY + window.innerHeight);
        const extraDistance = window.innerHeight * 0.12;
        setSticky(offsetFromBottom > (footerHeight + extraDistance));
    };

    useLayoutEffect(() => {
        checkStickiness();
        window.addEventListener('scroll', checkStickiness);

        return () => {
            window.removeEventListener('scroll', checkStickiness);
        };
    }, []);

    const style = `${isSticky ? styles.footerSticky : styles.NonStickyFooter}`;

    return (<><footer ref={footerRef} className={style}><h1>hello</h1></footer>
    <footer className={styles.RealFooter}><h1>Hello</h1></footer>
    </>
    )
}
