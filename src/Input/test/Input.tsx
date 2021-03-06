import * as React from 'react';
import Input from '..';
import { inputTestkitFactory } from '../../../testkit';
import { inputTestkitFactory as inputEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { inputTestkitFactory as inputPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function inputWithMandatoryProps() {
  return <Input />;
}

function InputWithAllProps() {
  return (
    <Input
      ariaControls="label"
      ariaDescribedby="label"
      ariaLabel="text"
      autoFocus
      autoSelect
      autocomplete="off"
      className="cls"
      clearButton
      customInput={<span />}
      dataHook="hook"
      defaultValue="value"
      disableEditing
      disabled
      forceFocus
      forceHover
      hideStatusSuffix
      id="1"
      max={10}
      maxLength={100}
      menuArrow
      min={5}
      name="name"
      noLeftBorderRadius
      noRightBorderRadius
      onBlur={_ev => {}}
      onChange={_ev => {}}
      onClear={_ev => {}}
      onCompositionChange={_isComposing => {}}
      onEnterPressed={_ev => {}}
      onEscapePressed={_ev => {}}
      onFocus={_ev => {}}
      onInputClicked={_ev => {}}
      onKeyDown={_ev => {}}
      onKeyUp={_ev => {}}
      onPaste={_ev => {}}
      placeholder="placeholder"
      prefix={<div />}
      readOnly
      ref={React.createRef()}
      required
      roundInput
      rtl
      size="large"
      inputRef={(_input: HTMLInputElement) => {}}
      status={Input.StatusError}
      statusMessage="msg"
      step={1}
      suffix={<div />}
      tabIndex={0}
      textOverflow="clip"
      tooltipPlacement="bottom"
      type="text"
      value="value"
      pattern="some pattern"
      withSelection
    >
      <Input.Ticker
        dataHook="hook"
        downDisabled
        upDisabled
        onDown={_ev => {}}
        onUp={_ev => {}}
      />
      <Input.Unit value="asd" />
      <Input.IconAffix dataHook="hook" />
      <Input.Affix value="$" />
      <Input.Group />
    </Input>
  );
}

function testInstanceMethods() {
  const instance = new Input({});
  instance.blur();
  instance.clear(null);
  instance.focus(null);
  instance.select();
  instance.handleSuffixOnClear(null);
}

async function testkits() {
  const testkit = inputTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = inputEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await inputPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
