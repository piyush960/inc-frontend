import * as React from "react";
import { cn } from "../../lib/utils";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = React.forwardRef((props, ref) => {
  const { className, required, children, ...otherProps } = props;

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "sm:text-2xl text-lg pb-1 font-medium text-black dark:text-[#FEAE13] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...otherProps}
    >
      {children}
      {required && <span className="text-orange-500 ml-1">*</span>}
    </LabelPrimitive.Root>
  );
});

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
