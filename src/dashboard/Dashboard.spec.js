// Test away
import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
	expect(render(<Dashboard />)).toMatchSnapshot();
});
test('Close state shown after', () => {
	const { getByText } = render(<Dashboard />);

	fireEvent.click(getByText(/close gate/i));
	getByText(/closed/i);
	getByText(/unlocked/i);
	getByText(/open gate/i);
	getByText(/lock gate/i);
});

test('Lock shown after', () => {
	const { getByText } = render(<Dashboard />);

	fireEvent.click(getByText(/close gate/i));
	fireEvent.click(getByText(/lock gate/i));
	getByText(/closed/i);
	getByText(/locked/i);
	getByText(/open gate/i);
	getByText(/unlock gate/i);
});

test('Lock gate button works', () => {
	const { getByText } = render(<Dashboard />);

	fireEvent.click(getByText(/close gate/i));
	fireEvent.click(getByText(/lock gate/i));
	getByText(/closed/i);
	getByText(/open gate/i);
	getByText(/lock gate/i);
});

test('Clicking lock gate works to show current', () => {
	const { getByText } = render(<Dashboard />);

	fireEvent.click(getByText(/close gate/i));
	fireEvent.click(getByText(/lock gate/i));
	fireEvent.click(getByText(/unlock gate/i));
	fireEvent.click(getByText(/open gate/i));
	getByText(/open/i);
	getByText(/unlocked/i);
	getByText(/close gate/i);
	getByText(/lock gate/i);
});
