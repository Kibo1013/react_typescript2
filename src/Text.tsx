import { VFC } from "react";

type props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>Text!!!</p>;
};
