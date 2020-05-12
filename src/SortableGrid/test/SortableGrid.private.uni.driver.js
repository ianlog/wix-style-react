import { sortableGridDriverFactory as publicDriverFactory } from '../SortableGrid.uni.driver';

export const sortableGridPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};
