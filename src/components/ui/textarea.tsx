import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex rounded-[2px] resize-none ring-outline p-4 ring-1 focus:outline-none focus:ring-[3px] focus:ring-primary transition-all hover:ring-on_surface border-outline bg-transparent text-base w-regular file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
