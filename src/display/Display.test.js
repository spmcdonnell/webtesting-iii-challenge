// Test away
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

describe('<Display />', () => {
    it('defaultProps to be unlocked and open', () => {
        const { findByText } = render(<Display />);

        findByText(/unlocked/i);
        findByText(/open/i);
    });

    it('displays locked and closed state', () => {
        const { findByText } = render(<Display locked={true} close={true} />);

        findByText(/locked/i);
        findByText(/closed/i);
    });

    it('displays unlocked and open state', () => {
        const { findByText } = render(<Display locked={false} close={false} />);

        findByText(/unlocked/i);
        findByText(/open/i);
    });

    it('displays correct classes', () => {
        const { findAllByText } = render(<Display locked={true} close={true} />);

        findAllByText(/red-led/i);
    });
});
