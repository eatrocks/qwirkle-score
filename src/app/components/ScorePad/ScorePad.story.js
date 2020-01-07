import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ScorePad from './ScorePad';

storiesOf ('ScorePad', module)
  .add ('default', () => <ScorePad />)
