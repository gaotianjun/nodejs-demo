#!/usr/bin/env node

const log = console.log;

function Bomb(id) {
  var _id = id, timeID;

  this.start = () => {
    log('#%d It will bomb after 3 second!', _id);
    timeID = setTimeout(()=>{
      log('#%d Bomb!', _id);
    }, 3000);
  };

  this.clear = () => { clearTimeout(timeID); };
}

var b1 = new Bomb(1);
b1.start();

var b2 = new Bomb(2);
b2.start();
setTimeout(b2.clear, 1000);
