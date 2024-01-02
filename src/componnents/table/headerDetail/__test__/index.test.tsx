import { render } from '@testing-library/react';
import THead from '../../header';
import Table from '../../index';
import Tr from '../../row';
import Th from '../index';

test('Th renders successfully', () => {
  render(
    <Table>
      <THead>
        <Tr>
          <Th />
        </Tr>
      </THead>
    </Table>,
  );

  let th: HTMLTableHeaderCellElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.thContainer');

  expect(th).not.toBe(null);
  expect(th).not.toBe(undefined);
});

test('Th get operation style successfully', () => {
  render(
    <Table>
      <THead>
        <Tr>
          <Th className={'operation'} />{' '}
        </Tr>
      </THead>
    </Table>,
  );

  let th: HTMLTableHeaderCellElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.operation');
  expect(th).not.toBe(null);
  expect(th).not.toBe(undefined);
});
