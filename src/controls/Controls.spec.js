import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {

   it('renders without crashing', () => {
      render(<Controls />);
   })
})