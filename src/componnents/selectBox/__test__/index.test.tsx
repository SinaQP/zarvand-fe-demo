import { render, screen, fireEvent } from '@testing-library/react';
import SelectBox from '../';

describe('SelectBox component', () => {
  const options = [
    { title: 'Option 1', value: "1", img: 'https://via.placeholder.com/50x50' },
    { title: 'Option 2', value: "2", img: 'https://via.placeholder.com/50x50' },
    { title: 'Option 3', value: "3" },
  ];

  it('renders the label and options', () => {
    const label = 'Test Label';
    render(<SelectBox label={label} options={options} />);
    const labelElement = screen.getAllByText(label)[0];
    expect(labelElement).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  it('renders the placeholder text when there are no options', () => {
    const noOptionsText = 'No Options';
    render(<SelectBox label="" options={[]} noOptionsText={noOptionsText} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(noOptionsText)).toBeInTheDocument();
  });

  it('disables the component when the disabled prop is true', () => {
    const label = 'Test Label';
    render(<SelectBox label={label} options={options} disabled />);        
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
