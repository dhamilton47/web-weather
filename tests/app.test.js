require('jest');
const { App } = require('../app');

import ReactDOM from 'react-dom';
import ForecastContainer from '../src/components/ForecastContainer';

describe('App', () => {
  it('should render without crashing.', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should contain components Controls and ForecastContainer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsAllMatchingElements([
      <Controls />,
      <ForecastContainer />
    ])).toEqual(true);
  });
});