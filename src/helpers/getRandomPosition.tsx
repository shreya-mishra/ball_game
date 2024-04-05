import { ballSize, calcHeight, targetSize } from "./calc";
import { INITIAL_Ball_Position, width } from "./moveBallFunc";

// playW
export const generatePositions = () => {
  const playgroundHeight = calcHeight;
  const playgroundWidth = width - 12; // 12 is the playground margin

  const newTargetPosition = {
    top: Math.floor(Math.random() * (playgroundHeight - (targetSize - 4))), // 4 is the margin of target
    left: Math.floor(Math.random() * (playgroundWidth - (targetSize - 4))),
  };

  const newBallPositions = INITIAL_Ball_Position.map((ball, index) => {
    if (index === 0) {
      let newPosition;
      do {
        newPosition = {
          top: Math.floor(Math.random() * (playgroundHeight - targetSize)),
          left: Math.floor(Math.random() * (playgroundWidth - targetSize)),
        };
      } while (isOverlap(newPosition, newTargetPosition));
      return { ...ball, ...newPosition };
    } else {
      return ball;
    }
  });
  return {
    newTargetPosition: newTargetPosition,
    newBallPositions: newBallPositions,
  };
};

const isOverlap = (
  ballPosition: { top: number; left: number },
  targetPosition: { top: number; left: number }
) => {
  const ballBox = {
    top: ballPosition.top,
    bottom: ballPosition.top + ballSize,
    left: ballPosition.left,
    right: ballPosition.left + ballSize,
  };

  const targetBox = {
    top: targetPosition.top,
    bottom: targetPosition.top + targetSize,
    left: targetPosition.left,
    right: targetPosition.left + targetSize,
  };

  return (
    ballBox.left < targetBox.right &&
    ballBox.right > targetBox.left &&
    ballBox.top < targetBox.bottom &&
    ballBox.bottom > targetBox.top
  );
};
