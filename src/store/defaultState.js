import { getRandomNewBlock } from 'blocks';
import { createNextBlockQueue } from 'blocks/blockQueue';
import { createGrid } from 'grid';
import GAME_STATES from 'constants/gameStates';
import GAME_SPEEDS from 'constants/gameSpeeds';

export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 20;

export const STARTING_BLOCK_COORDINATES = [0, 3];

export function generateStartingBlock() {
    return {
        properties: getRandomNewBlock(),
        positionCoordinates: STARTING_BLOCK_COORDINATES,
    };
}

export default {
    isHelpOn: true,
    score: 0,
    grid: createGrid(GRID_HEIGHT, GRID_WIDTH),
    currentBlock: generateStartingBlock(),
    nextBlockQueue: createNextBlockQueue(),
    gameSpeed: GAME_SPEEDS.STARTING,
    gameState: GAME_STATES.NEW_GAME,
};
