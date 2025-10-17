import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-2 border-foreground px-3 py-1 text-xs font-black uppercase transition-all duration-150 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-background text-foreground",
        accent: "bg-accent text-accent-foreground",
        sticker: "bg-gradient-to-br from-primary to-accent text-primary-foreground border-4 border-background shadow-[0_4px_0_0_rgba(255,255,255,0.5),_4px_4px_0_0_rgba(0,0,0,1)] rounded-md rotate-[-2deg] hover:rotate-0",
        stamp: "bg-destructive/20 text-destructive border-2 border-dashed border-destructive shadow-[inset_0_0_0_2px_hsl(var(--destructive))] rotate-[3deg] hover:rotate-0 opacity-80",
        tag: "bg-secondary text-secondary-foreground border-4 border-foreground clip-path-[polygon(0_0,_90%_0,_100%_50%,_90%_100%,_0_100%)] pr-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]",
        neon: "bg-accent text-accent-foreground border-4 border-foreground shadow-[0_0_10px_hsl(var(--accent)),_2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse-glow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
