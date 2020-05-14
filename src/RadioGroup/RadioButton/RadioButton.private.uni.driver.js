import { radioButtonUniDriverFactory as publicDriverFactory } from './RadioButton.uni.driver';

export const radioButtonPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
