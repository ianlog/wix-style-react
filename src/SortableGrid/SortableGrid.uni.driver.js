import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';

export const sortableGridUniDriverFactory = base => {
  return {
    ...baseUniDriverFactory(base),
  };
};
