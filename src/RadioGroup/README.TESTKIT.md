## Usage Example

> Unit testing example

```javascript
  import React from 'react';
  import {radioGroupTestkitFactory} from 'wix-style-react/dist/testkit';
  import {radioGroupTestkitFactory as enzymeRadioGroupTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

  /***************
   enzyme example
  ***************/

  const dataHook = 'myDataHook';
  const wrapper = mount(<div><RadioGroup dataHook={dataHook}/></div>);
  const testkit = enzymeRadioGroupTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();

  /**********************
   ReactTestUtils example
  **********************/

  const div = document.createElement('div');
  const dataHook = 'myDataHook';
  const wrapper = div.appendChild(
    ReactTestUtils.renderIntoDocument(<div><RadioGroup dataHook={dataHook}/></div>, {dataHook})
  );
  const testkit = radioGroupTestkitFactory({wrapper, dataHook});

  //Do tests
  expect(testkit.driver.exists()).toBeTruthy();
```
> E2E example

```javascript
  //Element should be rendered with a data-hook into the DOM
  <RadioGroup dataHook='myDataHook'/>

  /*******************
   protractor example
  *******************/

  import {radioGroupTestkitFactory, waitForVisibilityOf} from 'wix-style-react/dist/testkit/protractor';

  //Create an element testkit via the data-hook attribute
  const testkit = radioGroupTestkitFactory({dataHook: 'myDataHook'});

  browser.get(appUrl); //Your application url

  waitForVisibilityOf(testkit.element(), 'Cannot find RadioGroup')
     .then(() => {
        //Do tests
        expect(testkit.element().isDisplayed()).toBeTruthy();
     });

```

