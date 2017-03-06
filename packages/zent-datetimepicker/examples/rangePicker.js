import React, { Component } from 'react';
import { DateRangePicker } from '../src';
import '../assets/reset.scss';
import '../assets/index.scss';
import 'zent-icon/lib/index.css';

export default class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      value2: [],
      logs: [],
      range: ['2017.01.01', '2017.06.01']
    };
  }
  isDisabledRangeTime(type) {
    const disabledHour = (val) => {
      return type === 'start' ? val < 12 : val > 12;
    };
    const disabledMinute = (val) => {
      return type === 'start' ? val > 30 : val > 30;
    };
    const disabledSecond = (val) => {
      return type === 'start' ? val < 20 : val > 40;
    };
    return {
      disabledHour,
      disabledMinute,
      disabledSecond
    };
  }

  onChangeRange = (val) => {
    this.setState({
      value: val,
      logs: [...this.state.logs, `选择时间段 ${val.join('~')}`]
    });
  }
  onChangeRangeTime = (val) => {
    this.setState({
      value2: val,
      logs: [...this.state.logs, `选择时间段 ${val.join('~')}`]
    });
  }
  render() {
    const state = this.state;
    const logList = state.logs.map((log, i) => {
      return (
        <li key={i}>{log}</li>
      );
    });
    return (
      <div>
        <DateRangePicker
          disabledDate={this.state.range}
          disabled
          value={this.state.value}
          onChange={this.onChangeRange}
        />
        <br />
        <br />
        <DateRangePicker
          disabledDate={state.range}
          onChange={this.onChangeRange}
          value={state.value}
        />
        <br />
        <br />
        <DateRangePicker
          showTime
          disabledDate={state.range}
          disabledTime={this.isDisabledRangeTime}
          onChange={this.onChangeRangeTime}
          value={state.value2}
        />
        <ul>
          {logList}
        </ul>
      </div>
    );
  }
}