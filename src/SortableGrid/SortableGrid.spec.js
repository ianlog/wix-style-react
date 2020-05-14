import React from 'react';
import { cleanup } from '../../test/utils/unit';

import SortableGrid from './SortableGrid';
import ReactTestUtils from 'react-dom/test-utils';
import TestBackend from '../DragDropContextProvider/TestBackend';
import { sortableGridTestkitFactory } from '../../testkit';
import { sortableGridTestkitFactory as enzymeSortableGridTestkitFactory } from '../../testkit/enzyme';
import DragDropContextProvider from '../DragDropContextProvider';
import { mount } from 'enzyme';

const defaultProps = {
  contentClassName: 'cl',
  dataHook: 'sortable-grid',
  containerId: 'sortable-grid',
  groupName: 'group',
  items: [
    { id: '1', text: 'item 1' },
    { id: '2', text: 'item 2' },
  ],
  renderItem: ({ item }) => <div data-hook={item.id}>{item.text}</div>,
};

describe(SortableGrid.displayName, () => {
  afterEach(() => {
    cleanup();
  });

  it('should exists', async () => {
    const wrapper = ReactTestUtils.renderIntoDocument(
      <DragDropContextProvider backend={TestBackend}>
        <SortableGrid {...defaultProps} onDrop={jest.fn()} />
      </DragDropContextProvider>,
    );
    const driver = sortableGridTestkitFactory({
      wrapper,
      dataHook: defaultProps.dataHook,
    });

    expect(await driver.exists()).toBe(true);
  });
});

describe(`Enzyme: ${SortableGrid.displayName}`, () => {
  it('should exists', async () => {
    const wrapper = mount(
      <DragDropContextProvider backend={TestBackend}>
        <SortableGrid {...defaultProps} onDrop={jest.fn()} />
      </DragDropContextProvider>,
    );
    const driver = enzymeSortableGridTestkitFactory({
      wrapper,
      dataHook: defaultProps.dataHook,
    });

    expect(await driver.exists()).toBe(true);
  });
});
