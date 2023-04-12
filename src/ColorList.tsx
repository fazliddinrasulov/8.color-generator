import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const ColorList = ({ colors }: any) => {
  return (
    <section className="colors">
      {colors.map((color: string, index: number) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
