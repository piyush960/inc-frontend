import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  activeId
}) => {

	useEffect(() => {

    const calcIndex = propTabs.findIndex(tab => tab.value === activeId)
    
    moveSelectedTabToTop(calcIndex)
    setActive(propTabs[calcIndex])

	}, [])

  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (<>
    <div
      className={cn(
        "flex flex-row items-center justify-center [perspective:1000px] relative no-visible-scrollbar max-w-full w-full",
        containerClassName
      )}>
      {propTabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => {
            moveSelectedTabToTop(idx);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          style={{
            transformStyle: "preserve-3d",
          }}>
          {active.value === tab.value && (
            <motion.div
              layoutId="clickedbutton"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className={cn(
                "absolute inset-0 bg-slate-800",
                activeTabClassName
              )} />
          )}

          <span className="relative block text-white-100">
            {tab.title}
          </span>
        </button>
      ))}
    </div>
    <FadeInDiv
      tabs={tabs}
      active={active}
      key={active.value}
      hovering={hovering}
      className={cn("mt-10", contentClassName)} />
  </>);
};

export const FadeInDiv = ({
  className,
  tabs,
  active,
  hovering
}) => {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    (<div className="relative w-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.14,
            top: hovering ? idx * -85 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 30, 0] : 0,
          }}
          className={cn("w-full absolute top-0 left-0", className)}>
          {tab.content}
        </motion.div>
      ))}
    </div>)
  );
};
