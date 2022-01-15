#!/usr/bin/env node
let tree = require("./tree")
let organize = require("./organize")
let tutorial = require("./tutorial")

let inp = process.argv;

let cmd = inp[2];
let dir = inp[3];
switch(cmd){
    case "tree":
        tree.tree(dir);
        break;
    case "organize":
        organize.organize(dir)
        break;
    case "tutorial":
        tutorial.tutorial();
        break;
    default:
        console.log("Invalid Input! Please Enter the valid Input..")
        break;
}
