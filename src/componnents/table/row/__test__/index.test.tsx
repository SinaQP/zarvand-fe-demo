import { render } from '@testing-library/react';
import Table from '../../index';
import Tbody from '../../body';
import Tr from '../index';
import Td from '../../tableDetail';
import THead from '../../header';

test('Row renders successfully', () => {
  render(
    <Table>
      <Tbody>
        <Tr>
          <Td></Td>
        </Tr>
      </Tbody>
    </Table>,
  );

  let row: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.trContainer');

  expect(row).not.toBe(null);
  expect(row).not.toBe(undefined);
});
test('Row get operation style successfully', () => {
  render(
    <Table>
      <THead>
        <Tr className={'operation'}>
          <Td></Td>
        </Tr>
      </THead>
    </Table>,
  );

  let tr: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.operation');
  expect(tr).not.toBe(null);
  expect(tr).not.toBe(undefined);
});
test('Row get Header style successfully', () => {
  render(
    <Table>
      <THead>
        <Tr className={'header'}>
          <Td></Td>
        </Tr>
      </THead>
    </Table>,
  );

  let tr: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.header');
  expect(tr).not.toBe(null);
  expect(tr).not.toBe(undefined);
});
test('Row get createButton style successfully', () => {
  render(
    <Table>
      <THead>
        <Tr className={'createButton'}>
          <Td></Td>
        </Tr>
      </THead>
    </Table>,
  );

  let tr: HTMLTableRowElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.createButton');
  expect(tr).not.toBe(null);
  expect(tr).not.toBe(undefined);
});
