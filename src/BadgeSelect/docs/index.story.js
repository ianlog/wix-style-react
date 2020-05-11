import React from 'react';
import BadgeSelect from '..';
import { SKIN, TYPE, SIZE } from '../../Badge/constants';

import { storySettings } from './storySettings';

import CodeExample from 'wix-storybook-utils/CodeExample';
import ControlledComponentExample from './ControlledComponentExample';
import ControlledComponentExampleRaw from '!raw-loader!./ControlledComponentExample';
import { commonPopoverPropsExample } from '../../../stories/utils/playgroundUtils';

const options = Object.values(SKIN).map((skin, id) => ({
  id: id.toString(),
  skin,
  text: skin,
}));

// Centering the component since the DropdownLayout is centered and overflows
// the AutoExample container. In eyes test, the overflowed part will be cut off.
const CenterBadgeSelect = props => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <BadgeSelect {...props} />
  </div>
);

CenterBadgeSelect.displayName = BadgeSelect.displayName;

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: CenterBadgeSelect,
  componentPath: '..',

  componentProps: setState => ({
    options,
    selectedId: '0',
    onSelect: ({ id }) => setState({ selectedId: id }),
    uppercase: true,
  }),

  exampleProps: {
    selectedId: options.map(({ id }) => id),
    options: [{ label: 'All badges', value: options }],
    type: Object.keys(TYPE),
    size: Object.keys(SIZE),
    popoverProps: commonPopoverPropsExample,
  },

  hiddenProps: ['dataHook', 'className'],

  examples: (
    <CodeExample
      title="Controlled component can interrupt changes"
      code={ControlledComponentExampleRaw}
    >
      <ControlledComponentExample />
    </CodeExample>
  ),
};
