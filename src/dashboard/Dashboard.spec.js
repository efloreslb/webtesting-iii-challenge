import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {

   it('renders without crashing', () => {
      render(<Dashboard />);
   })

   it('matches snapshot', () => {
      const snap = renderer.create(<Dashboard />);
      expect(snap.toJSON()).toMatchSnapshot();
   })

   it('defaults to unlocked and open, options are lock and close', () => {
      const { getByText } = render(<Dashboard />);
      const open = getByText(/open/i);
      const unlocked = getByText(/unlocked/i);

      expect(open).toBeInTheDocument();
      expect(unlocked).toBeInTheDocument();
   })

   it('buttons and display text changes to reflect the state the door will be in if clicked', () => {
      const { getByTestId } = render(<Dashboard />);
      
      const toggleclosed = getByTestId('closeButton');
      const displayclosed = getByTestId('closedOpen');

      fireEvent.click(toggleclosed);

      expect(displayclosed).toHaveTextContent('Closed');
      expect(toggleclosed).toHaveTextContent('Open Gate');

      const togglelocked = getByTestId('lockButton');
      const displaylocked = getByTestId('lockedUnlocked');

      fireEvent.click(togglelocked);

      expect(displaylocked).toHaveTextContent('Locked');
      expect(togglelocked).toHaveTextContent('Unlock Gate');
   })


})