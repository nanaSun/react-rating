import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from '../Button';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>button Demo</h1>
        <Button  primary large>hello world！</Button>
        <Button>hello world！</Button>
        <Button type="submit">Submit button</Button>
        <Button href=".">Submit button</Button>
        <Button disabled>Submit button</Button>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
