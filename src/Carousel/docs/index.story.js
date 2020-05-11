import React from 'react';
import {
  tab,
  api,
  title,
  code as baseCode,
  importExample,
  playground,
  testkit,
  header,
  tabs,
} from 'wix-storybook-utils/Sections';

import Carousel from '..';
import { storySettings } from './storySettings';
import {
  InfoChild,
  buttonSkinExample,
  autoplayExample,
  withoutDotsExample,
  variableWidthExample,
} from './examples';
import allComponents from '../../../stories/utils/allComponents';

const code = config =>
  baseCode({
    components: allComponents,
    ...config,
  });

const imagesExamples = [
  {
    value: [
      {
        src:
          'https://a-static.besthdwallpaper.com/garfield-wallpaper-2800x2100-815_28.jpg',
      },
      {
        src:
          'https://m.media-amazon.com/images/M/MV5BZGMwOGIwZjUtOWQ1OS00YWRjLWJmZGMtN2Y1OWQ3ZDYwYTM3XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg',
      },
      {
        src:
          'https://a-static.besthdwallpaper.com/cartoons-garfield-wallpaper-1440x1080-6773_22.jpg',
      },
    ],
    label: 'Three images',
  },
];

const childrenExamples = [
  {
    value: [
      <InfoChild text="This is the first information text" />,
      <InfoChild text="This is the second information text" />,
      <InfoChild text="This is the third information text" />,
    ],
    label: 'Three nodes',
  },
];
export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Carousel,
  componentPath: '..',

  componentProps: () => ({
    images: imagesExamples[0].value,
    infinite: true,
    autoplay: false,
  }),

  exampleProps: {
    images: imagesExamples,
    children: childrenExamples,
    beforeChange: (before, after) => `I was called with ${before}, ${after}`,
    afterChange: index => `I was called with ${index}`,
  },

  hiddenProps: ['dataHook', 'className'],

  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Carousel/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          importExample("import { Carousel } from 'wix-style-react';"),

          title('Examples'),

          code({ title: 'Button Skin', source: buttonSkinExample }),
          code({ title: 'Autoplay', source: autoplayExample }),
          code({ title: 'Without Dots', source: withoutDotsExample }),
          code({ title: 'Variable Width', source: variableWidthExample }),
        ],
      }),

      ...[
        {
          title: 'API',
          sections: [api()],
        },

        {
          title: 'Testkit',
          sections: [testkit()],
        },

        {
          title: 'Playground',
          sections: [playground()],
        },
      ].map(tab),
    ]),
  ],
};
