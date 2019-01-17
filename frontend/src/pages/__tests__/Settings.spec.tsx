import React from 'react';
import { Settings } from '../index';
import { renderWithRouter } from '../../helpers/functions';
import 'jest';
import { waitForElement, cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('Settings dashboard', () => {
    test('should render two checkboxes', async () => {
        const { getAllByTestId } = renderWithRouter(<Settings />, {});
        const checkboxes = await waitForElement(() => getAllByTestId('checkbox'));
        expect(checkboxes.length).toBe(2);
    });
    test('should indluce a button with the text Save Settings', async () => {
        const { getAllByText } = renderWithRouter(<Settings />, {});
        const buttons = await waitForElement(() => getAllByText(/Save Settings/i));
        expect(buttons.length).toBe(1);
    });
    test('should indluce a button with the text Update Contact Info', async () => {
        const { getAllByText } = renderWithRouter(<Settings />, {});
        const buttons = await waitForElement(() => getAllByText(/Update Contact Info/i));
        expect(buttons.length).toBe(1);
    });
});