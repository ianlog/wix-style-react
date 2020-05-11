import React from 'react';
import PropTypes from 'prop-types';

import { st, classes } from './MessageModalLayout.st.css';
import BaseModalLayout from '../BaseModalLayout';

/** MessageModalLayout */
class MessageModalLayout extends React.PureComponent {
  _renderIllustration() {
    const { illustration } = this.props;

    return (
      <div className={classes.illustrationContainer}>
        <div className={classes.imageWrapper}>
          {typeof illustration === 'string' ? (
            <img src={illustration} width="100%" />
          ) : (
            illustration
          )}
        </div>
      </div>
    );
  }

  render() {
    const {
      dataHook,
      theme,
      illustration,
      primaryButtonProps,
      secondaryButtonProps,
    } = this.props;

    const width = illustration ? '630px' : '510px';

    const new_theme = ['standard', 'premium', 'destructive'].includes(theme)
      ? theme
      : 'standard';

    primaryButtonProps['skin'] = new_theme;
    secondaryButtonProps['skin'] = new_theme;

    return (
      <div
        className={st(classes.root, { theme: new_theme })}
        data-hook={dataHook}
        style={{ width }}
      >
        {illustration && this._renderIllustration()}
        <BaseModalLayout
          {...this.props}
          secondaryButtonProps={secondaryButtonProps}
          primaryButtonProps={primaryButtonProps}
        />
      </div>
    );
  }
}

MessageModalLayout.displayName = 'MessageModalLayout';

MessageModalLayout.propTypes = {
  ...BaseModalLayout.propTypes,
  /** additional css classes */
  className: PropTypes.string,
  /** data hook for testing */
  dataHook: PropTypes.string,
  /** Illustration URL or custom element. */
  illustration: PropTypes.node,
  /** Theme will affect the buttons skins and illustration bg color. */
  theme: PropTypes.oneOf(['standard', 'premium', 'destructive']),
};

MessageModalLayout.defaultProps = {
  ...BaseModalLayout.defaultProps,
  theme: 'standard',
  primaryButtonProps: {},
  secondaryButtonProps: {},
};

export default MessageModalLayout;
