import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
// import { useState } from 'react';
import Table from '../index';

const title = [
  { key: 'brand', value: 'برند' },
  { key: 'size', value: 'سایز' },
  { key: 'pattern', value: 'پترن' },
  { key: 'compound', value: 'کامپوند' },
  { key: 'company', value: 'شرکت' },
];
const bodyV = [
  {
    size: 24,
    brand: 'گلداستون',
    pattern: 'اولین پترن انتخابی',
    compound: 'لدون',
    company: 'شرکت زراوند',
  },
  {
    brand: 'گلداستون',
    company: 'شرکت زراوند',
    size: 24,
    compound: 'لدون',
    pattern: 'اولین پترن انتخابی',
  },
  {
    brand: 'گلداستون',
    size: 24,
    pattern: 'اولین پترن انتخابی',
    compound: 'لدون',
    company: 'شرکت زراوند',
  },
];
// const [data, setdata] = useState<any>(null);
test('Table renders successfully', () => {
  render(<Table />);

  let table: HTMLTableElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.tableContainer');

  expect(table).not.toBe(null);
  expect(table).not.toBe(undefined);
});
test('Table get Header titles successfully', () => {
  render(<Table headerTitels={title} />);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table get Header titles and can edit successfully', () => {
  render(<Table headerTitels={title} canEdit={true} />);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table get Header titles and can delete successfully', () => {
  render(<Table headerTitels={title} canDelete={true} />);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table get Header titles, can delete and edit successfully', () => {
  render(<Table headerTitels={title} canDelete={true} canEdit={true} />);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table get Header titles and custom widths successfully', () => {
  render(
    <Table
      headerTitels={title}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let firstTh: HTMLTableCellElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('th');
  expect(firstTh).not.toBe(null);
  expect(firstTh).not.toBe(undefined);
  if (firstTh) {
    let widthFirstTh = firstTh.style.width;
    // eslint-disable-next-line jest/no-conditional-expect
    expect(widthFirstTh).toBe('30%');
  }
});
test('Table get body, successfully', () => {
  render(<Table bodyValue={bodyV} />);

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with custome widths, successfully', () => {
  render(
    <Table
      bodyValue={bodyV}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with edit , successfully', () => {
  render(<Table bodyValue={bodyV} canEdit={true} />);

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with delete , successfully', () => {
  render(<Table bodyValue={bodyV} canEdit={true} />);

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with delete and edit , successfully', () => {
  render(<Table bodyValue={bodyV} canEdit={true} />);

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with edit and custome Widths, successfully', () => {
  render(
    <Table
      bodyValue={bodyV}
      canEdit={true}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with delete and Custome Width , successfully', () => {
  render(
    <Table
      bodyValue={bodyV}
      canEdit={true}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body with delete and edit and Custome Width , successfully', () => {
  render(
    <Table
      bodyValue={bodyV}
      canEdit={true}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);
});
test('Table get body and header, successfully', () => {
  render(<Table bodyValue={bodyV} headerTitels={title} />);

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table get body, header and custome width successfully', () => {
  render(
    <Table
      bodyValue={bodyV}
      headerTitels={title}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table get Header titles, can delete and edit and custom widths successfully', () => {
  render(
    <Table
      headerTitels={title}
      canDelete={true}
      canEdit={true}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);
});
test('Table Has Create Button', () => {
  render(<Table hasCreateButton={true} />);

  let createRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.createButton');

  expect(createRow).not.toBe(null);
  expect(createRow).not.toBe(undefined);
});
test('Table Create Button Element Clicked', async () => {
  render(<Table hasCreateButton={true} headerTitels={title} />);

  // eslint-disable-next-line testing-library/no-node-access
  const buttons = document.getElementsByClassName(
    'createButton',
  ) as HTMLCollectionOf<HTMLTableRowElement>;

  expect(buttons).not.toBe(null);
  expect(buttons).not.toBe(undefined);
  expect(buttons.length).not.toBe(0);
  expect(buttons.length).toBe(1);
  buttons[0].click();
});

test('Table Create Button Element Clicked and Change to Input Element Row', () => {
  render(<Table hasCreateButton={true} headerTitels={title} />);

  let createRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.createButton');

  expect(createRow).not.toBe(null);
  expect(createRow).not.toBe(undefined);
  if (createRow) {
    createRow.click();
  }
});
test('Table Create Button Element Clicked and Change to Input Element Row wth custome Width', () => {
  render(
    <Table
      hasCreateButton={true}
      headerTitels={title}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let createRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.createButton');

  expect(createRow).not.toBe(null);
  expect(createRow).not.toBe(undefined);
  if (createRow) {
    createRow.click();
  }
});
test('Table Create Row Element from Body', () => {
  render(<Table hasCreateButton={true} bodyValue={bodyV} />);

  let createRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.createButton');

  expect(createRow).not.toBe(null);
  expect(createRow).not.toBe(undefined);
  if (createRow) {
    createRow.click();
  }
});
test('on click edit icon successfully', () => {
  let setData = jest.fn();
  render(
    <Table
      bodyValue={bodyV}
      canEdit={true}
      setData={setData}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);

  // eslint-disable-next-line testing-library/no-node-access
  let editIcons = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLImageElement>;
  expect(editIcons).not.toBe(null);
  expect(editIcons).not.toBe(undefined);
  expect(editIcons.length).not.toBe(0);
  expect(editIcons.length).toBe(3);
  editIcons[0].click();
});
test('on click delete icon successfully', () => {
  let setData = jest.fn();
  render(
    <Table
      bodyValue={bodyV}
      canDelete={true}
      setData={setData}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);

  // eslint-disable-next-line testing-library/no-node-access
  let deleteIcon = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLImageElement>;
  expect(deleteIcon).not.toBe(null);
  expect(deleteIcon).not.toBe(undefined);
  expect(deleteIcon.length).not.toBe(0);
  expect(deleteIcon.length).toBe(3);
  deleteIcon[0].click();
});
test('complite component render successfull', () => {
  let setData = jest.fn();
  render(
    <Table
      hasCreateButton={true}
      canEdit={true}
      headerTitels={title}
      bodyValue={bodyV}
      canDelete={true}
      setData={setData}
      widths={[
        { key: 'brand', value: '30%' },
        { key: 'pattern', value: '10%' },
        { key: 'size', value: '10%' },
        { key: 'compound', value: '20%' },
        { key: 'company', value: '20%' },
        { key: 'operation', value: '10%' },
      ]}
    />,
  );

  let bodyEl: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(bodyEl).not.toBe(null);
  expect(bodyEl).not.toBe(undefined);

  let headerRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');

  expect(headerRow).not.toBe(null);
  expect(headerRow).not.toBe(undefined);

  // eslint-disable-next-line testing-library/no-node-access
  let deleteIcon = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLImageElement>;
  expect(deleteIcon).not.toBe(null);
  expect(deleteIcon).not.toBe(undefined);
  expect(deleteIcon.length).not.toBe(0);
  deleteIcon[0].click();
  // eslint-disable-next-line testing-library/no-node-access
  let editIcon = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLImageElement>;
  expect(editIcon).not.toBe(null);
  expect(editIcon).not.toBe(undefined);
  expect(editIcon.length).not.toBe(0);
  editIcon[0].click();
  let createRow: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.createButton');

  expect(createRow).not.toBe(null);
  expect(createRow).not.toBe(undefined);
  createRow?.click();
});

test('Table on Input Change', () => {
  render(
    <Table
      hasCreateButton={true}
      headerTitels={title}
      externalNewClick={true}
    />,
  );

  // eslint-disable-next-line testing-library/no-node-access
  let inputs: HTMLCollectionOf<HTMLInputElement> | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.getElementsByTagName('input');

  // eslint-disable-next-line jest/no-conditional-expect
  expect(inputs).not.toBe(null);
  // eslint-disable-next-line jest/no-conditional-expect
  expect(inputs).not.toBe(undefined);
  if (inputs) {
    // eslint-disable-next-line jest/no-conditional-expect
    expect(inputs.length).toBe(5);
    fireEvent.change(inputs[0], { target: { value: 'goodYear' } });
    // eslint-disable-next-line jest/no-conditional-expect
    expect(inputs[0].value).toBe('goodYear');
  }
});

test('Table on click cancel Icon', () => {
  const setData = jest.fn();
  render(
    <Table
      hasCreateButton={true}
      headerTitels={title}
      externalNewClick={true}
      setData={setData}
    />,
  );
  // eslint-disable-next-line testing-library/no-node-access
  let cancelIcon = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLImageElement>;
  expect(cancelIcon).not.toBe(null);
  expect(cancelIcon).not.toBe(undefined);
  expect(cancelIcon.length).not.toBe(0);
  cancelIcon[1].click();
});
test('Table on click Enter Icon', () => {
  const setData = jest.fn();
  render(
    <Table
      hasCreateButton={true}
      headerTitels={title}
      externalNewClick={true}
      setData={setData}
    />,
  );
  // eslint-disable-next-line testing-library/no-node-access
  let enterIcon = document.getElementsByTagName(
    'img',
  ) as HTMLCollectionOf<HTMLImageElement>;
  expect(enterIcon).not.toBe(null);
  expect(enterIcon).not.toBe(undefined);
  expect(enterIcon.length).not.toBe(0);
  enterIcon[0].click();
});
