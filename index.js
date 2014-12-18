#!/usr/bin/env node
var nut = require('nut-cli');
var Lineup = require('lineup');
lineup = new Lineup();
var path = require('path');
var concatenator = require('./lib/concatenate');

nut.bootCommand('fs-con');
nut.addCommand('','[path:String]','Enter input and output paths');

nut.addCommandOptions('','-i','[<path/to/input_directory>:String]','Enter input path');
nut.addCommandOptions('','-o','[<path/to/output_directory>:String]','Enter output path');
var commands = nut.parse();

if(commands['-i'] && commands['-o']){
  var input = commands["-i"];
  var output = commands["-o"];

  if(path.resolve(input) !== path.normalize(input)){
    input = path.join(process.cwd(),input);
  }
  if(path.resolve(output) !== path.normalize(output)){
    output = path.join(process.cwd(),output);
  }
  concatenator.concatenate(input,[],output);

}else{
  lineup.log.error("Enter input directory and output path");
  process.exit(1);
}

var m = require('./modules.js');
console.log(Object.keys(m));
