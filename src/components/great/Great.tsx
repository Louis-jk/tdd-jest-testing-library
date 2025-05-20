import React from "react";

type GreatProps = {
  name?: string;
};

const Great = (props: GreatProps) => {
  return <div>Hello {props.name}</div>;
};

export default Great;
