import { radioGroupUniDriverFactory as publicDriverFactory } from '../RadioGroup.uni.driver';

export const radioGroupPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
