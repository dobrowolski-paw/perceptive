import React from "react";
import Tab from "./Tab";
const Tabel = (props) => {
  const tabel = props.tabel.map((tab) => <Tab key={tab.id} tab={tab} />);
  return <div className="Tabel">{tabel}</div>;
};

export default Tabel;
