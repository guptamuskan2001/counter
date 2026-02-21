import { AccordionProps } from "./Acoordion.types";
import { useState } from "react";
import styles from "./Accordion.module.css";

export default function Accordion({items}: AccordionProps){

    const [activeTab, setActiveTab] = useState<number>(0);

    const handleToggle = (index: number) => {
        setActiveTab((prev) => (prev === index ? null : index));
    };

    return(
        <div>
            {items.map((item,index) => {
                const isOpen = activeTab === index;
                return(
                    <div key={index}>
                        <div onClick={() => handleToggle(index)} className={styles.heading}>
                            {'>'}  {item.heading} 
                        </div>
                        {isOpen && <p> {item.content}</p>}
                    </div>
                )
            })}
        </div>
    )
}