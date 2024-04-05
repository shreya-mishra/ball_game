import { width } from "../constants/playgroundComponents";

export const NUM_PLAYGROUND_CONTAINERS = 2; // container including space for controllers
export const calcHeight = 100 / NUM_PLAYGROUND_CONTAINERS;
export const calcPlaygroundHeight = `${calcHeight}%`;

export const STEP_SIZE = (10 / (width - 12)) * 100;
export const targetSize = 50;
export const ballSize = 25;
