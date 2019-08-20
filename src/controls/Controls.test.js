// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe('<Controls />', () => {
    it('has lock and open buttons', () => {
        const { findByText } = render(<Controls locked={true} closed={true} toggleLocked={() => {}} toggleClosed={() => {}} />);

        findByText(/unlock gate/i);
        findByText(/open gate/i);
    });

    it('button text changes based on state', () => {
        const { findByText } = render(<Controls locked={false} closed={false} toggleLocked={() => {}} toggleClosed={() => {}} />);

        findByText(/lock gate/i);
        findByText(/close gate/i);
    });

    it('the closed toggle button is disabled if the gate is locked', () => {
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();

        const { getByText } = render(<Controls locked={true} closed={true} toggleLocked={toggleLocked} toggleClosed={toggleClosed} />);

        fireEvent.click(getByText(/open gate/i));

        expect(toggleClosed).not.toHaveBeenCalled();
    });

    it('the locked toggle button is disabled if the gate is open', () => {
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();

        const { getByText } = render(<Controls locked={false} closed={false} toggleLocked={toggleLocked} toggleClosed={toggleClosed} />);

        fireEvent.click(getByText(/lock gate/i));

        expect(toggleLocked).not.toHaveBeenCalled();
    });
});
