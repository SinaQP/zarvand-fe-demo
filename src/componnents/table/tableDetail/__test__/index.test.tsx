import { render } from '@testing-library/react';
import Table from '../../index';
import Tbody from '../../body';
import Td from '../index';
import Tr from '../../row';

test('Td renders successfully', () => {
  render(
    <Table>
      <Tbody>
        <Tr>
          <Td />
        </Tr>
      </Tbody>
    </Table>,
  );

  let td: HTMLTableCellElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.tdContainer');

  expect(td).not.toBe(null);
  expect(td).not.toBe(undefined);
});

test('Td get operation style successfully', () => {
  render(
    <Table>
      <Tbody>
        <Tr>
          <Td className={'operation'} />
        </Tr>
      </Tbody>
    </Table>,
  );

  let td: HTMLTableHeaderCellElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.operation');
  expect(td).not.toBe(null);
  expect(td).not.toBe(undefined);
});
