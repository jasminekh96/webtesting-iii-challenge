// Test away
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
	expect(render(<Dashboard />)).toMatchSnapshot();
});

// it("closed and unlock", () => {
//     const mock = jest.fn();
//     const { queryByText } = render(<Controls locked={false} closed={true} toggleClosed={mock} />)
//     const lockButton = queryByText("Lock Gate");
//     expect(lockButton.disabled).toBe(false)
//     const openButton = queryByText("Open Gate");
//     expect(openButton.disabled).toBe(false)
//     fireEvent.click(openButton);
//     expect(mock).toBeCalled()
//   })

//   it("closed and locked", () => {
//     const mock = jest.fn();
//     const { queryByText } = render(<Controls locked={true} closed={true} toggleLocked={mock} />)
//     const unlockButton = queryByText("Unlock Gate");
//     expect(unlockButton.disabled).toBe(false)
//     const openButton = queryByText("Open Gate");
//     expect(openButton.disabled).toBe(true)
//     fireEvent.click(unlockButton);
//     expect(mock).toBeCalled()
//   })
// })
