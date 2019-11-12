// Test away!
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

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

// test('has default states ', () => {
// 	const { getByText } = render(<Controls locked={false} closed={false} />);
// 	expect(getByText('Unlocked'));
// 	expect(getByText('Open'));
// 	expect(getByText('Lock Gate'));
// 	expect(getByText('Close Gate'));
// });
// test('buttons change', () => {
// 	const { getByText, queryByText } = render(<Controls />);
// 	const closeButton = queryByText('Close Gate');
// 	fireEvent.click(closeButton);
// 	expect(getByText('Unlocked'));
// 	expect(getByText('Closed'));
// 	expect(getByText('Lock Gate'));
// 	expect(getByText('Open Gate'));
// });
