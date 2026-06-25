"use client";

import React from "react";

type Dir = "right" | "left" | "up" | "down";
type ArrowProps = { size?: number; color?: string; className?: string; style?: React.CSSProperties };

const dots = [
  { x: 5, y: 2 }, { x: 8.5, y: 4.5 }, { x: 12, y: 7 }, { x: 15.5, y: 9.5 }, { x: 19, y: 12 },
  { x: 15.5, y: 14.5 }, { x: 12, y: 17 }, { x: 8.5, y: 19.5 }, { x: 5, y: 22 },
];

const rotations: Record<Dir, string> = {
  right: "0",
  left: "180",
  up: "-90",
  down: "90",
};

export const DotChevron = ({ size = 16, color, className, style, direction = "right" }: ArrowProps & { direction?: Dir }) => (
  <svg
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    className={className}
    style={{ transform: `rotate(${rotations[direction]}deg)`, ...style }}
  >
    {dots.map((d, i) => (
      <circle key={i} cx={d.x} cy={d.y} r="1.0" />
    ))}
  </svg>
);

export const DotArrowRight = (props: ArrowProps) => <DotChevron direction="right" {...props} />;
export const DotArrowLeft = (props: ArrowProps) => <DotChevron direction="left" {...props} />;
export const DotArrowUp = (props: ArrowProps) => <DotChevron direction="up" {...props} />;
export const DotArrowDown = (props: ArrowProps) => <DotChevron direction="down" {...props} />;

const crossDots = [
  { x: 8, y: 5 }, { x: 11, y: 8 }, { x: 14, y: 11 }, { x: 11, y: 14 }, { x: 8, y: 17 },
];

export const DotCross = ({ size = 16, color, className, style }: ArrowProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={color || "currentColor"}
    width={size}
    height={size}
    className={className}
    style={style}
  >
    {crossDots.map((d, i) => (
      <circle key={i} cx={d.x} cy={d.y} r="0.9" />
    ))}
  </svg>
);
