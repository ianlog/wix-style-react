import * as React from 'react';
import { InputProps } from '../Input';
import {
  DropdownLayoutOption,
  DropdownLayoutValueOption,
} from '../DropdownLayout';

export interface AutoCompleteWithLabelProps {
  dataHook?: string;
  label: string;
  suffix?: React.ReactNode[];
  options: DropdownLayoutOption[];
  status?: InputProps['status'];
  statusMessage?: InputProps['statusMessage'];
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  name?: string;
  type?: string;
  ariaLabel?: string;
  autoFocus?: boolean;
  autocomplete?: string;
  disabled?: boolean;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  onSelect?: (option: DropdownLayoutValueOption) => void;
  native?: boolean;
}

export default class AutoCompleteWithLabel extends React.PureComponent<
  AutoCompleteWithLabelProps
> {}
