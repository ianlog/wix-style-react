import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

const getByDataHook = (base, dataHook) => base.$(`[data-hook="${dataHook}"]`);

export const radioButtonUniDriverFactory = (base, body) => {
  const radioButtonWrapper = () =>
    getByDataHook(base, dataHooks.RadioButtonWrapper);
  const radioButtonInput = () =>
    getByDataHook(base, dataHooks.RadioButtonInput);
  const radioButtonLabel = () =>
    getByDataHook(base, dataHooks.RadioButtonLabel);
  const radioButtonContent = () =>
    getByDataHook(base, dataHooks.RadioButtonContent);

  return {
    ...baseUniDriverFactory(base, body),

    /** Simulating a check action by clicking the input element */
    check: () => radioButtonInput().click(), // TODO check if this works, might need to change the target element to radio

    /** Getting the component's "checked" value */
    isChecked: () => radioButtonInput()._prop('checked'),

    /** Getting the component's "disabled" value */
    isDisabled: () => radioButtonInput()._prop('disabled'),

    /** Getting the component's label text value */
    getLabel: () => radioButtonLabel().text(),

    /** Getting the component's label element */
    getLabelElement: () => radioButtonLabel().element(),

    /** Getting the component's input value */
    getValue: () => radioButtonInput()._prop('value'),

    /** Getting the component's tab-index value */
    getTabIndex: () => radioButtonWrapper().attr('tab-index'),

    /** Getting the component's content element */
    getContent: () => radioButtonContent(),
  };
};
