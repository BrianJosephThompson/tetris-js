// code to initialize the game and overall game logic

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// set size of canvas from contants
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = COLS * BLOCK_SIZE;

// set scale of blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
