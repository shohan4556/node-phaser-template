//import Phaser from 'phaser';
//import imageUrl from '../public/sprites/card_diamonds_K.png'

//import { area } from "../scenes/Game";
//const test = require('../scenes/Game') 

import { log } from "./test.js";


const config = {
    width: 600,
    height: 600,
    type: Phaser.AUTO,
    audio: {
      disableWebAudio: true
    },
    physics: {
      default: 'arcade',
      arcade: {
        fps: 60,
        gravity: {y : 0},
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };
  

//Users.log();

export const game = new Phaser.Game(config);

function preload(){
  
  //test import 
  log();

  this.load.image('card', '../sprites/card_diamonds_K.png');
}


function create(){
  this.add.image(300, 300, 'card')
}
  