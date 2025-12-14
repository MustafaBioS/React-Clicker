"use client";
import SantaClicker from "./santaClick";
import {useState} from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="main">
      <h1 className="counter">Clicks: {count}</h1>
      <SantaClicker onClick={() => {setCount(count + 1)}}/>
    </div>
  );
}
