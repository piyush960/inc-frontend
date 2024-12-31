import * as React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "../../lib/utils";

const Select = React.forwardRef(({ options, onChange, className, ...props }, ref) => {
  const radius = 100; // Radius of hover effect
  const [visible, setVisible] = React.useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
            #FEAE13,
            #FEAE13,
            #77A9E7
          )
        `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/select"
    >
      <select
        className={cn(
          `flex w-full border-none bg-[#060C1C] text-black dark:text-white shadow-input rounded-md px-3 py-2 text-lg 
          placeholder:text-neutral-400
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 
          disabled:cursor-not-allowed disabled:opacity-50 group-hover/select:shadow-none transition duration-300`,
          className
        )}
        onChange={onChange}
        ref={ref}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </motion.div>
  );
});

Select.displayName = "Select";

export { Select };
