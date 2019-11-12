// Test away!
import React from 'react';
import { render, getByDisplayValue } from '@testing-library/react';
import Display from './Display';

test('Display renders correctly', () => {
	expect(render(<Display />)).toMatchSnapshot();
});

test('Uses "red-led" if locked.', () => {
	const { queryByText } = render(<Display locked={true} />);
	const locked = queryByText(/locked/i);
	expect(locked.className.includes('red-led')).toBeTruthy();
});

test('Uses "green-led" if locked.', () => {
	const { getByText } = render(<Display locked={false} />);
	const unlocked = getByText(/locked/i);
	expect(unlocked.className.includes('green-led')).toBeTruthy();
});
