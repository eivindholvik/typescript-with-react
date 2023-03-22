import { IUnderProps } from "./interfaces";

function UndervisningenErSnartOver({
  one,
  two,
  three,
}: IUnderProps): JSX.Element {
  return (
    <div>
      I have a couple of props! {one}, {two}, {three}
    </div>
  );
}

export default UndervisningenErSnartOver;
