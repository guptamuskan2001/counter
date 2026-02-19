import { useState } from "react";
import { CounterProps } from "./Counter.types";
import styles from "./Counter.module.css";


export default function Counter({min= 0 , max=  5, step =1}:CounterProps) {

  const [count,setCount] = useState<number>(min);

  const isMin = count<=min;
  const isMax = count>=max;

  const handleIncrement = () => {
    if(isMax) return;
    setCount(count+step);
} 

const handleDecrement = () =>{
  if(isMin) return;
  setCount(count-step);
}

return(
  <div>
    <button onClick ={handleDecrement} disabled={isMin}>-</button>
    <span className={styles.span}>{count}</span>
    <button onClick ={handleIncrement} disabled={isMax}>+</button>
  </div>
);
}