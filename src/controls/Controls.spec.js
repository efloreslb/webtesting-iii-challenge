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

   it('provides buttons to toggle states', () => {

   })

   it('should change button text to reflect coming state', () => {

   })

   it('should disable closed toggle button when gate is locked', () => {

   })

   it('should disable locked toggle button when gate is open', () => {

   })
})