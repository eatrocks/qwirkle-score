import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Tile } from './PlayerTile';

storiesOf('PlayerTile', module) 
  .add('empty', () => <Tile />)
  .add('typical', () => <Tile name="Elizabeth" score="32" />)
  .add('no score', () => <Tile name="Evan" />)
  .add('active', () => <Tile name="Dad" score="32" active />)
  .add('long', () => <Tile name="Mom Is the Best-est Ever" score="32000" />);


 