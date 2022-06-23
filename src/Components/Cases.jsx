import React, { useState } from "react";
import Case1 from "./Case1/Case1";
import Case2 from "./Case2/Case2";
import Case3 from "./Case3/Case3";
import styles from "./style.module.css";
const Cases = () => {
  const [active, setActive] = useState(0);
  const steps = [
    {
      id: 0,
      name: "Use Case 1",
      component: <Case1 active={active} setActive={setActive} />,
    },
    {
      id: 1,
      name: "Use Case 2",
      component: <Case2 active={active} setActive={setActive} />,
    },
    {
      id: 2,
      name: "Use Case 3",
      component: <Case3 active={active} setActive={setActive} />,
    },
  ];

  return (
    <>
      {active < steps.length - 1 && (
        <div className="py-3 headerBg">
          <nav
            aria-label="breadcrumb "
            className="d-flex justify-content-center"
          >
            <ol className="breadcrumb my-auto">
              {steps.map((item) => (
                <li key={item.id} className={`breadcrumb-item`}>
                  <span className={active === item.id ? "active" : ""}>
                    {item.name}
                  </span>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      )}

      {steps[active].component}
    </>
  );
};

export default Cases;
