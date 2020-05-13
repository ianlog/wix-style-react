import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { radioButtonPrivateDriverFactory } from './RadioButton/test/RadioButton.private.uni.driver';
import { dataHooks } from './constants';

export const radioGroupUniDriverFactory = (base, body) => {
  const getRadios = async () =>
    base
      .$$(`[data-hook="${dataHooks.RadioGroupRadioContainer}"`)
      .map(radio =>
        Object.assign(radio, radioButtonPrivateDriverFactory(radio, body)),
      );

  const getLabelElements = async () => {
    const allLabels = [];
    for (const radio of await getRadios()) {
      allLabels.push(await radio.getLabelElement());
    }
    return allLabels;
  };

  const getSelectedRadio = async () => {
    for (const radio of await getRadios()) {
      if (await radio.isChecked()) {
        return radio;
      }
    }
  };

  const getRadioByValue = async value => {
    const stringValue = value.toString();
    for (const radio of await getRadios()) {
      if ((await radio.getValue()) === stringValue) {
        return radio;
      }
    }
  };

  return {
    ...baseUniDriverFactory(base, body),

    /**
     * @param value
     * @return void
     * Selects the radio that matches the provided value
     * */
    selectByValue: async value => (await getRadioByValue(value)).check(),

    /** Selects the radio in the provided index */
    selectByIndex: async index => (await getRadios())[index].check(),

    /** Get the radio value in the provided index */
    getRadioValueAt: async index => {
      const radio = (await getRadios())[index];
      if (radio) return radio.getValue();

      // Throws an error in case there is no RadioButton at the given index
      throw new Error(`No RadioButton at index ${index}`);
    },

    /** Get the radio element in the provided index */
    getRadioAtIndex: async index => (await getRadios())[index],

    /** Get the value of the selected radio */
    getSelectedValue: async () => {
      const selected = await getSelectedRadio();
      return selected ? selected.getValue() : null;
    },

    /** Checks if the radio in the provided index is disabled */
    isRadioDisabled: async index => (await getRadios())[index].isDisabled(),

    // TODO: We should deprecate getClassOfLabelAt(). Css tests should be in e2e tests.
    /** Get the class of the label element at the provided index */
    getClassOfLabelAt: async index =>
      (await getLabelElements())[index].classList,

    /** Checks if the display is set to vertical */
    isVerticalDisplay: () => base.hasClass('vertical'),

    /** Checks if the display is set to horizontal */
    isHorizontalDisplay: () => base.hasClass('horizontal'),

    /** Get the value of applied spacing between radios */
    spacing: async () => {
      const secondOption = (await getRadios())[1];
      return (await secondOption._prop('style')).marginTop;
    },

    /** Get the value of applied line-height on the radio's labels */
    lineHeight: async () => (await getLabelElements())[0].style['line-height'],

    /** Get the number of rendered radios */
    getNumberOfRadios: async () => (await getRadios()).length,
  };
};
