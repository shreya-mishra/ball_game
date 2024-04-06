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
  id: number;
  top: number;
  left: number;
};
export type BallPositionContext = {
  setPosition: (
    prev: (
      prevState: { id: number; top: number; left: number }[]
    ) => { id: number; top: number; left: number }[]
  ) => void;
};
export type Timeout = ReturnType<typeof setTimeout>;
