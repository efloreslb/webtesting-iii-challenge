import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {

   it('renders without crashing', () => {
      render(<Display />);
   })

   it('displays closed if closed prop is true', () => {
      const { getByText } = render(<Display closed={true} locked={false}/>);
      const closed = getByText(/closed/i);
      expect(closed).toBeInTheDocument();
   })

   it('displays open if closed prop is false', () => {
      const { getByText } = render(<Display closed={false} locked={false}/>);
      const open = getByText(/open/i);
      expect(open).toBeInTheDocument();
   })

   it('displays locked if locked prop is true', () => {
      const { getByText } = render(<Display closed={false} locked={true}/>);
      const locked = getByText(/locked/i);
      expect(locked).toBeInTheDocument();
   })

   it('displays unlocked if locked prop is false', () => {
      const { getByText } = render(<Display closed={false} locked={false}/>);
      const unlocked = getByText(/unlocked/i);
      expect(unlocked).toBeInTheDocument();
   })

   it('uses red-led class when locked or closed', () => {
      const { getByTestId } = render(<Display closed={true} locked={true}/>);
      const locked = getByTestId('lockedUnlocked');
      const closed = getByTestId('closedOpen')
      expect(locked).toHaveClass('red-led');
      expect(closed).toHaveClass('red-led');
   })

   it('used green-led class when unlocked or open', () => {
      const { getByTestId } = render(<Display closed={false} locked={false}/>);
      const locked = getByTestId('lockedUnlocked');
      const closed = getByTestId('closedOpen')
      expect(locked).toHaveClass('green-led');
      expect(closed).toHaveClass('green-led');
   })
})