import { radioButtonUniDriverFactory as publicDriverFactory } from './RadioButton.uni.driver';

export const RadioButtonPrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),
  };
};
