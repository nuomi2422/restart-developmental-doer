#!/usr/bin/env node
'use strict';
// Public reading-entry check only. Never starts Minecraft, builds, services or model requests.
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const files=['README.md','GLOSSARY.md','STATUS.md','QUICKSTART.md','SOURCE-MAP.md','CONTRIBUTING.md','SECURITY.md','docs/README.md','archive/README.md','archive/docs/README.md'];
const issues=[];
for(const name of files){const file=path.join(root,name);if(!fs.existsSync(file)){issues.push({file:name,problem:'missing entry'});continue;}const text=fs.readFileSync(file,'utf8');if(/(?:^|[\s(<])(?:[A-Z]:[\\/]|localhost|127\.0\.0\.1)/im.test(text))issues.push({file:name,problem:'local environment path in entry'});if(/(?:^|[^a-z0-9])(?:sk-[A-Za-z0-9_-]{20,}|gh[pousr]_[A-Za-z0-9]{20,})/i.test(text))issues.push({file:name,problem:'credential pattern requires review'});for(const match of text.matchAll(/\]\((?:<([^>]+)>|([^\s)]+))\)/g)){const dest=match[1]||match[2];if(/^(?:https?:|mailto:|#)/i.test(dest))continue;const target=path.resolve(path.dirname(file),decodeURIComponent(dest.split('#')[0]));const rel=path.relative(root,target);if(rel.startsWith('..')||!fs.existsSync(target))issues.push({file:name,problem:'unresolved local link',target:dest});}}
for(const name of ['src','patches','scripts','skills','templates','monitoring-station'])if(fs.existsSync(path.join(root,name)))issues.push({file:name,problem:'legacy directory still at root'});
for(const name of ['src','patches','docs','scripts','skills','templates','monitoring-station'])if(!fs.existsSync(path.join(root,'archive',name)))issues.push({file:name,problem:'expected legacy archive missing'});
console.log(JSON.stringify({checkedEntries:files.length,issues,scope:'reading navigation only; not a secret audit, game test or public network link check'},null,2));process.exitCode=issues.length?1:0;
