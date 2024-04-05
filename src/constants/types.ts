export type contentInPlaygroundType = {
  id: number;
  ball: boolean;
  target: boolean;
  controller: boolean;
};
export type ballPositionType = {
  id: number;
  top: number;
  left: number;
};
export type positionType = {
  top: number;
  left: number;
};
export type BallPositionContext = {
  setPosition: (
    prev: (
      prevState: { top: number; left: number }[]
    ) => { top: number; left: number }[]
  ) => void;
};
