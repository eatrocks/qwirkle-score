import React from 'react';
import styles from './ScorePad.css';
import classes from 'join-classnames';

export const ScorePad = ({ className }) =>
  <div className={classes(className, styles.scorePad)}>
    <div className={styles.wrapper}>
        <div className={styles.header}>
            asdf
        </div>
      <div className={styles.buttons}>
        <button className={classes(styles.cell, styles.grey)}><span>C</span></button>
        <button className={classes(styles.cell, styles.grey)}><span>Q</span></button>
        <button className={classes(styles.cell, styles.grey)}><span>⌫</span></button>
        <button className={classes(styles.cell)}><span>7</span></button>
        <button className={classes(styles.cell)}><span>8</span></button>
        <button className={classes(styles.cell)}><span>9</span></button>
        <button className={classes(styles.cell)}><span>4</span></button>
        <button className={classes(styles.cell)}><span>5</span></button>
        <button className={classes(styles.cell)}><span>6</span></button>
        <button className={classes(styles.cell)}><span>1</span></button>
        <button className={classes(styles.cell)}><span>2</span></button>
        <button className={classes(styles.cell)}><span>3</span></button>
        <button className={classes(styles.cell, styles.span2)}><span>0</span></button>
        <button className={classes(styles.cell)}><span>.</span></button>
      </div>
      <div className={styles.operations}>
        <button className={styles.opCell}><span>÷</span></button>
        <button className={styles.opCell}><span>×</span></button>
        <button className={styles.opCell}><span>–</span></button>
        <button className={styles.opCell}><span>+</span></button>
        <button className={styles.opCell}><span>=</span></button>
      </div>
    </div>
  </div>;


export default ScorePad;
