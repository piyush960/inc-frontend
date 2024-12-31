import * as React from "react";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import { cn } from "../../lib/utils";

const Input = React.forwardRef((props, ref) => {
  const {
    className,
    type,
    as: Component = "input",
    validate,
    errorMessage,
    ...otherProps
  } = props;
  const radius = 100; // Radius of hover effect
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState("");

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const handleBlur = (e) => {
    const value = e.target.value;
    if (validate) {
      const isValid = validate(value);
      setError(isValid ? "" : errorMessage);
    }
  };

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
      className="p-[2px] rounded-lg transition duration-300 group/input"
    >
      <Component
        className={cn(
          `flex w-full border-none bg-[#060C1C] text-black dark:text-white shadow-input rounded-md px-3 py-2 
          file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] 
          focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 
          disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] 
          group-hover/input:shadow-none transition duration-400 text-lg`,
          className
        )}
        ref={ref}
        onBlur={handleBlur} // Trigger validation on blur
        {...otherProps}
      />
      {error && (
        <div className="mt-1 flex items-center gap-2 bg-red-100 border border-red-300 rounded-md p-2 text-sm text-red-600 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 3h.01m-6.938 4h13.856c1.054 0 1.987-.816 2.052-1.87L21.942 10c.065-1.054-.724-1.918-1.788-1.918H4.846c-1.054 0-1.787.84-1.722 1.87L4.92 19.13C4.985 20.184 5.918 21 6.972 21z"
            />
          </svg>
          <p>{error}</p>
        </div>
      )}
    </motion.div>
  );
});

Input.displayName = "Input";

export { Input };
