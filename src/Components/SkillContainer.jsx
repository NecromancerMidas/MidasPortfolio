import React from 'react';
import styles from '../StyleSheets/SkillContainer.module.css';
export const SkillContainer = ({ text, imgSrc }) => (
  <div>
    <img className={styles.SkillImage} src={imgSrc} alt={text} />
    <p>{text}</p>
  </div>
);

