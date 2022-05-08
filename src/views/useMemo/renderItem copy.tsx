import { memo } from "react";

const RenderItem = memo(
  ({ fruit = [] }) => {
    return fruit.map((item, index) => (
      <p key={item.toString(10) + index}>{item}</p>
    ));
  },
    (prevProps, nextProps) => { 
        return nextProps.fruit.length == prevProps.fruit.length
    }
);
export default RenderItem;