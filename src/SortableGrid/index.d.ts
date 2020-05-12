import * as React from 'react';

export interface SortableGridProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class SortableGrid extends React.PureComponent<SortableGridProps>{}
