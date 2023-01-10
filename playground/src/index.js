import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../src/DatePicker.css';
import { Calendar } from '../../src';
import * as serviceWorker from './serviceWorker';

const App = () => {
  const [selectedDay, setValue] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      minimumDate={{ year: 2023, month: 1, day: 1 }}
      maximumDate={{ year: 2023, month: 2, day: 1 }}
      onChange={setValue}
      shouldHighlightWeekends
    />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
