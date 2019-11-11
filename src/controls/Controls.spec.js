// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';
import { get } from 'http';

test('Controls renders correctly', () => {
	expect(render(<Controls />)).toMatchSnapshot();
});

test('opens and unlocks', () => {
	const mock = jest.fn();
	const { getByText } = render(<Controls locked={false} closed={false} toggleClosed={mock} />);
	const lockButton = getByText('Lock Gate');
	expect(lockButton.disabled).toBe(true);
	const closedButton = getByText('Close Gate');
	expect(closedButton.disabled).toBe(false);
	fireEvent.click(closedButton);
	expect(mock).toHaveBeenCalledTimes(1);
});

test('closed and unlocked', () => {
	const mock = jest.fn();
	const { getByText } = render(<Controls locked={false} closed={true} toggleClosed={mock} />);
	const lockButton = getByText('Lock Gate');
	expect(lockButton.disabled).toBe(false);
	const openButton = getByText('Open Gate');
	expect(openButton.disabled).toBe(false);
	fireEvent.click(openButton);
	expect(mock).toHaveBeenCalledTimes(1);
});

test('closed and locked', () => {
	const mock = jest.fn();
	const { getByText } = render(<Controls locked={true} closed={true} toggleLocked={mock} />);
	const unlockButton = getByText('Unlock Gate');
	expect(unlockButton.disabled).toBe(false);
	const openButton = getByText('Open Gate');
	expect(openButton.disabled).toBe(true);
	fireEvent.click(unlockButton);
	expect(mock).toHaveBeenCalledTimes(1);
});
