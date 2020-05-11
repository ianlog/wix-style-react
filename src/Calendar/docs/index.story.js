import React from 'react';
import addDays from 'date-fns/add_days';
import CodeExample from 'wix-storybook-utils/CodeExample';

import { Container, Row, Col } from 'wix-style-react/Grid';
import Calendar from '..';

import ExampleStandard from './ExampleStandard';
import ExampleStandardRaw from '!raw-loader!./ExampleStandard';

import ExampleYearMonths from './ExampleYearMonths';
import ExampleYearMonthsRaw from '!raw-loader!./ExampleYearMonths';

import { storySettings } from './storySettings';

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Calendar,
  componentPath: '..',

  componentProps: setState => ({
    onChange: value => setState({ value }),
    showYearDropdown: false,
    showMonthDropdown: false,
    shouldCloseOnSelect: true,
    excludePastDates: false,
    selectionMode: 'day',
    autoFocus: true,
    numOfMonths: 1,
  }),

  exampleProps: {
    value: [
      {
        label: `1st of Today's month`,
        value: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      },
      {
        label: `Today`,
        value: new Date(),
      },
      {
        label: `Next Week (Range)`,
        value: { from: new Date(), to: addDays(new Date(), 6) },
      },
      {
        label: `Last Week (Range)`,
        value: { from: addDays(new Date(), -6), to: new Date() },
      },
    ],
    locale: [
      'en',
      'es',
      'pt',
      'fr',
      'de',
      'pl',
      'it',
      'ru',
      'ja',
      'ko',
      'tr',
      'sv',
      'no',
      'nl',
      'da',
      'zh',
      'th',
      'cs',
    ],
  },

  hiddenProps: ['dataHook', 'className'],

  examples: (
    <Container>
      <Row>
        <Col span={4}>
          <CodeExample title="Standard" code={ExampleStandardRaw}>
            <ExampleStandard />
          </CodeExample>
        </Col>
        <Col span={4}>
          <CodeExample
            title="With Years and Months selection"
            code={ExampleYearMonthsRaw}
          >
            <ExampleYearMonths />
          </CodeExample>
        </Col>
      </Row>
    </Container>
  ),
};
