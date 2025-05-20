import React from "react";

type GreatProps = {
  name?: string;
};

const Great = (props: GreatProps) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};

export default Great;
