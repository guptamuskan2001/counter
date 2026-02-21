import { useState } from "react";
import { TabProps } from "./Tab.types";
import styles from "./Tab.module.css";

export default function Tab({ items }: TabProps) {
    const [activeTab, setActiveTab] = useState<number>(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {items.map((item, index) => {
                    const isActive = activeTab === index;
                    return (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`${styles.tab} ${isActive ? styles.active : ""}`}
                        >
                            {item.label}
                        </button>
                    );
                })}
            </div>

            <div style={{ marginTop: 10 }} className={styles.content}>
                {items[activeTab] && items[activeTab].content}
            </div>
        </div>
    );
}