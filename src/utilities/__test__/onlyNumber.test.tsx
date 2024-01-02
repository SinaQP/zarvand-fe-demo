import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import only_number from '../onlyNumber';

describe('test only_number function', () => {
    it('test defined function', () => {
        expect(only_number).toBeDefined();
    });

    it('test working value number', () => {
        render(<input onInput={only_number} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        userEvent.type(input, 'value2002');
    });
});
