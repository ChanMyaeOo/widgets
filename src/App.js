import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a UI library",
  },
  {
    title: "What is a Java?",
    content:
      "Java is a object oriented programming developed by Sun Micro System",
  },
  {
    title: "What is Arduino?",
    content: "Arduino is a microcontroller and it is based on C programming",
  },
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
