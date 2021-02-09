import Apple from "./Apple";
import Play from "./Play-store";

export { Apple, Play };

export type Props = {
  width: number;
  height: number;
  onClick: () => void
};
