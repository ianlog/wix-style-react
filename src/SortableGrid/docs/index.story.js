import React from 'react';
import {
  api,
  code as baseCode,
  description,
  divider,
  example as baseExample,
  header,
  importExample,
  playground,
  tab,
  tabs,
  testkit,
  title,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import SortableGridArea from './SortableGridArea';

import SortableGrid from '..';

const example = config =>
  baseExample({
    components: { ...allComponents, SortableGridArea },
    ...config,
  });
const code = config =>
  baseCode({ components: { ...allComponents, SortableGridArea }, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: SortableGrid,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${SortableGrid.displayName}/`,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: '<SortableGridArea />',
            // component: <SortableGrid />,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
