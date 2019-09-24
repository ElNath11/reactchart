import React, { Component } from "react";

const range = [
  'Today',
  'Week',
  'Month',
  'Year'
];
class SelectFilter extends Component {
  render() {
    return (
      <>
            <select
              className=" m-1 "
              name="FilterRange"
              value={this.props.valRange}
              onChange={this.props.onChangeRange}
            >
            <option value="" selected="selected">Select Filter</option>
              {range.map(y => {
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>          
      </>
    );
  }
}

export default SelectFilter;
