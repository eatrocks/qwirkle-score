import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ScoreButton from './ScoreButton';

storiesOf('ScoreButton', module)
  .add('default', () => <ScoreButton>0</ScoreButton>)
  .add('action', () =>
    <ScoreButton emphasis="action" onClick={action('clicked +')}>
      +
    </ScoreButton>
  )
  .add('number', () =>
    <ScoreButton emphasis="number" onClick={action('clicked 1')}>
      1
    </ScoreButton>
  );
  