import React from "react";
const Tab = (props) => {
  return (
    <div
      className="TabNumber"
      onClick={this.handlerChange.bind(this, props.tab.id, props.tab.nr)}
    >
      {props.tab.nr}
    </div>
  );
};

export default Tab;
