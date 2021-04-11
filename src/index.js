import React from 'react';
import ReactDOM from 'react-dom';
import ForecastContainer from './components/ForecastContainer';
import { hot } from 'react-hot-loader';

const App = hot(module)(
  () => {
    return (
      <div>
        <ForecastContainer />
      </div>
    )
  }
)

ReactDOM.render(<App />, document.getElementById('root'));
