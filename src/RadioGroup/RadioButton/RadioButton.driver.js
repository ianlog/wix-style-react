import ReactTestUtils from 'react-dom/test-utils';
import { dataHooks } from './constants';

const radioButtonDriverFactory = ({ element }) => {
  const radioWrapper = () => element.childNodes[0];
  const radioButton = () => radioWrapper().childNodes[0];
  const label = () => radioWrapper().childNodes[1];

  return {
    exists: () => !!element,
    check: () => ReactTestUtils.Simulate.change(radioButton()),
    isChecked: () => radioButton().checked,
    isDisabled: () => radioButton().disabled,
    getLabel: () => label().textContent,
    getLabelElement: () => label(),
    getValue: () => radioButton().value,
    getTabIndex: () => radioWrapper().getAttribute('tabIndex'),
    getContent: () =>
      element.querySelector(`[data-hook="${dataHooks.RadioButtonContent}"]`),
  };
};

export default radioButtonDriverFactory;
