"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.game = void 0;
const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  audio: {
    disableWebAudio: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      fps: 60,
      gravity: {
        y: 0
      }
    }
  }
};
const game = new Phaser.Game(config);
exports.game = game;