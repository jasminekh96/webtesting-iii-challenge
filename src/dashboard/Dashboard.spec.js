// Test away
import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Dashboard from './Dashboard';

test('Dashboard renders correctly', () => {
	expect(render(<Dashboard />)).toMatchSnapshot();
});
