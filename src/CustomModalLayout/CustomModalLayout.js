import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './CustomModalLayout.st.css';
import BaseModalLayout from '../BaseModalLayout';

/** CustomModalLayout */
class CustomModalLayout extends React.PureComponent {
  static displayName = 'CustomModalLayout';

  static propTypes = {
    ...BaseModalLayout.propTypes,
    /** additional css classes */
    className: PropTypes.string,
    /** data hook for testing */
    dataHook: PropTypes.string,
    /** When set to true, there will be no content padding */
    removeContentPadding: PropTypes.bool,
    /** a footnote node, to be rendered at the very bottom of the modal */
    width: PropTypes.string,
  };

  static defaultProps = {
    primaryButtonText: '',
    secondaryButtonText: '',
    title: '',
    subtitle: '',
    removeContentPadding: false,
  };

  render() {
    const { width, dataHook } = this.props;
    return (
      <div className={st(classes.root)} data-hook={dataHook} style={{ width }}>
        <BaseModalLayout {...this.props}></BaseModalLayout>
      </div>
    );
  }
}

export default CustomModalLayout;
