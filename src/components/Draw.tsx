import {useCurrentFrame} from "remotion";
import {progress} from "../progress";

type DrawProps = {
  d: string;
  at?: number;
  color?: string;
  width?: number;
};

export const Draw: React.FC<DrawProps> = ({
  d,
  at = 0,
  color = "white",
  width = 2,
}) => {
  const frame = useCurrentFrame();
  const entrance = progress(frame, at, at + 36);

  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      pathLength={1}
      strokeDasharray={1}
      strokeDashoffset={1 - entrance}
    />
  );
};