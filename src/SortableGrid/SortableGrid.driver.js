import ReactTestUtils from 'react-dom/test-utils';

import {
  getInstanceOfDraggableProvider,
  getInstanceOfDraggableSource,
  getInstanceOfDraggableTarget,
} from '../SortableList/driverHelpers';

export default ({ element, wrapper }) => {
  // in case if wrapper is coming from enzyme, we want to get it instance
  const vanillaWrapper = wrapper.instance ? wrapper.instance() : wrapper;
  const isCompositeComponent = ReactTestUtils.isCompositeComponent(
    vanillaWrapper,
  );

  if (!isCompositeComponent) {
    // eslint-disable-next-line no-console
    console.warn(
      'SortableGrid factory expect to receive wrapper as composite component(react instance, and not a dom instance)',
    );
  }
  const backend = isCompositeComponent
    ? getInstanceOfDraggableProvider(vanillaWrapper)
        .getManager()
        .getBackend()
    : null;

  return {
    exists: () => !!element,
    reorder: ({ removedId, addedId }) => {
      if (backend) {
        backend.simulateBeginDrag([
          getInstanceOfDraggableSource(
            vanillaWrapper,
            removedId,
          ).getHandlerId(),
        ]);
        backend.simulateHover([
          getInstanceOfDraggableTarget(vanillaWrapper, addedId).getHandlerId(),
        ]);
        backend.simulateDrop();
        backend.simulateEndDrag();
      }
    },
  };
};
