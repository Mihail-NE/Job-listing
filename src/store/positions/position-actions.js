export const ADD_POSITIONS = 'ADD_POSITIONS';

export function addPositions(positions) {
  return {
    type: ADD_POSITIONS,
    positions
  };

}