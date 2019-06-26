import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {

   it('renders without crashing', () => {
      render(<Dashboard />);
   })

   // it('matches snapshot', () => {
   //    const snap = renderer.create(<Dashboard />);
   //    expect(snap.toJSON()).toMatchSnapshot();
   // })

   it('defaults to unlocked and open, options are lock and close', () => {
      const { getByText } = render(<Dashboard />);
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);

      expect(open).toBeInTheDocument();
      expect(unlocked).toBeInTheDocument();
   })


})