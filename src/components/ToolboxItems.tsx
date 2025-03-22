import React from "react";
import { twMerge } from "tailwind-merge";

import TechIcon from "./TechIcon";

type ToolBoxItemsProps = {
  className?: string;
  itemsWrapperClassName?: string;
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
};

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: ToolBoxItemsProps) => {
  return (
    <div
      className={twMerge(
        "[mask-image:linear-gradient(to_right, transparent, black_10%,black_90%,transparent)] flex",
        className,
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName,
        )}
      >
        {[...new Array(2).fill(0)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 rounded-lg px-3 py-2 outline outline-2 outline-white/10"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
