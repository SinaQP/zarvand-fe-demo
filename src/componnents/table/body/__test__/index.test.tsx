import { render } from '@testing-library/react';
import Table from '../..';
import TBody from '../index';

test('TBody renders successfully', () => {
  render(
    <Table>
      <TBody />
    </Table>,
  );

  let tBody: HTMLBodyElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.bodyContainer');

  expect(tBody).not.toBe(null);
  expect(tBody).not.toBe(undefined);
});
