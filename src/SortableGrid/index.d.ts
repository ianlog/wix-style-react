import * as React from 'react';

import WixComponent, {
  WixComponentProps,
} from '../BaseComponents/WixComponent';
import { DraggableProps } from '../DragAndDrop/Draggable';

export interface SortableGridProps extends WixComponentProps, DraggableProps {
  usePortal?: boolean;
  dragPreview?: boolean;
  items?: object[];
  className?: string;
  contentClassName?: string;
  startFixedElement?: React.ReactNode;
  endFixedElement?: React.ReactNode;
}

export default class SortableGrid extends WixComponent<SortableGridProps> {}
