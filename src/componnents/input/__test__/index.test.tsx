import { render, screen } from '@testing-library/react';
import Input from '..';

describe('Testing Input component', () => {
      // existance test
      it('should render Input', () => {
            render(<Input onlyNumber />);

            const input = screen.getByRole('textbox');

            expect(input).toBeInTheDocument();
            expect(input).not.toBe(null);
      });

      it('should check by id', () => {
            render(<Input id="input-test" />);

            const input = document.getElementById('input-test');
            expect(input).toBeInTheDocument();
            expect(input).not.toBe(null);
      });

      it('check by label', () => {
            render(<Input id="input-test" label="test-label" />);

            const input = screen.getAllByText(/test-label/i);
            expect(input).not.toBe(null);
      });
});
