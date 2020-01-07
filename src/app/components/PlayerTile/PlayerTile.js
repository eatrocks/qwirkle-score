import React from 'react';
import styles from './PlayerTile.css';
import classes from 'join-classnames';

export const Tile = ({ name = "Someone", score = 0, active = false, className }) => {
  //console.log('active: ', active);
  return (
    <div className={classes(styles.tile, active && styles.active)}>
      <h1>
        <span>{name}</span>
        <span>: </span>
        <span>{score}</span>
      </h1>
      {
        //<h1>{`${name}: ${score}`}</h1>
      }
    </div>
  );  
};

export default Tile;
