/* 
State
- score
- lives
- difficulty
- level
- player position
- enemies position
- bullets position
- game over
*/

const constants = {
    player: {
        dimensions: { width: 30, height: 30 }
    },
    enemy: {
        dimensions: { width: 40, height: 20 }
    },
    bullet: {
        dimensions: { width: 5, height: 10 }
    },
    scene: {
        dimensions: { width: 800, height: 600 }
    }
}

const state = {
    score: 0,
    lives: 3,
    difficulty: 'easy',
    level: 1,
    player: {
        position: { x: 0, y: 0 }
    },
    enemies: [{
        position: { x: 10, y: 10 }
    }, {
        position: { x: 20, y: 20 }
    }, {
        position: { x: 40, y: 40 }
    }],
    bullets: [{
        position: { x: 15, y: 15 },
        type: 'player'
    }, {
        position: { x: 25, y: 25 },
        type: 'enemy'
    }],
    gameOver: false
};

/*
Logic
- move player
- move enemies
- shoot bullet
- check collision
- update score
- update lives
- update level
- reset game
*/ 