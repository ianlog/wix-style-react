import * as React from 'react';
import SortableGrid from '..';
import { sortableGridTestkitFactory } from '../../../testkit';
import { sortableGridTestkitFactory as sortableGridEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { sortableGridTestkitFactory as sortableGridPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function sortableGridWithMandatoryProps() {
  return <SortableGrid />;
}

function sortableGridWithAllProps() {
  return (
    <SortableGrid
      dataHook="dataHook"
      className="className"
      buttonText="buttonText"
    />
  );
}

async function testkits() {
  const testkit = sortableGridTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = sortableGridEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await sortableGridPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
