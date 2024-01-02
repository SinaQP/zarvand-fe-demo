import { render } from '@testing-library/react';
import Table from '../../index';
import THead from '../index';

test('THead renders successfully', () => {
  render(
    <Table>
      <THead />
    </Table>,
  );

  let tHead: HTMLHeadElement | null =
    // eslint-disable-next-line testing-library/no-node-access
    document.querySelector('.headerContainer');

  expect(tHead).not.toBe(null);
  expect(tHead).not.toBe(undefined);
});
