import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Controls from './Controls';

describe('<Controls />', () => {

   it('renders without crashing', () => {
      render(<Controls />);
   })

   it('provides buttons to toggle states', () => {
      const { getByText } = render(<Controls />);

      const lockbutton = getByText(/lock gate/i);
      const closebutton = getByText(/close gate/i);

      expect(lockbutton).toBeInTheDocument();
      expect(closebutton).toBeInTheDocument();
   })

   it('should change button text to reflect coming state', () => {
      const { getByTestId } = render(<Controls locked={false} closed={false} />);
      
      const toggleclosed = getByTestId('closeButton');
      expect(toggleclosed).toHaveTextContent('Close Gate');
   })

   it('should disable closed toggle button when gate is locked', () => {
      const { getByTestId } = render(<Controls locked={true} />);

      const closebutton = getByTestId('closeButton');

      expect(closebutton.disabled).toBeTruthy();
   })

   it('should disable locked toggle button when gate is open', () => {
      const { getByTestId } = render(<Controls closed={false} />);

      const lockbutton = getByTestId('lockButton');

      expect(lockbutton.disabled).toBeTruthy();
   })
})