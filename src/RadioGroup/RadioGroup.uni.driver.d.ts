import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface RadioGroupUniDriver extends BaseUniDriver {
  selectByValue: (value: string | number) => Promise<void>;
  selectByIndex: (index: number) => Promise<void>;
  getRadioValueAt: (index: number) => Promise<string | number>;
  getRadioAtIndex: (index: number) => Promise<HTMLElement>;
  getSelectedValue: () => Promise<string | number | null>;
  isRadioDisabled: (index: number) => Promise<boolean>;
  getClassOfLabelAt: (index: number) => Promise<String>;
  isVerticalDisplay: () => Promise<boolean>;
  isHorizontalDisplay: () => Promise<boolean>;
  isButtonType: () => Promise<boolean>;
  spacing: () => Promise<string>;
  lineHeight: () => Promise<string>;
  getNumberOfRadios: () => Promise<number>;
}
