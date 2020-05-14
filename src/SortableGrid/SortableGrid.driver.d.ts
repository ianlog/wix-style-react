import { BaseDriver } from 'wix-ui-test-utils/driver-factory';

export interface SortableGridDriver extends BaseDriver {
  reorder: (data: {
    removedId: number | string;
    addedId: number | string;
  }) => void;
}
