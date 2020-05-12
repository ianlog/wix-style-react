import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SortableGrid from '../SortableGrid';
import { sortableGridPrivateDriverFactory } from './SortableGrid.private.uni.driver';

describe(SortableGrid.displayName, () => {
  const render = createRendererWithUniDriver(sortableGridPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SortableGrid />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<SortableGrid />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<SortableGrid buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
