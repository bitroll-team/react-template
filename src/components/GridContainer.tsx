import { cva } from "class-variance-authority";

export const gridContainerVariants = cva("grid items-stretch gap-8", {
  variants: {
    variant: {
      default: "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]"
    }
  }
});
