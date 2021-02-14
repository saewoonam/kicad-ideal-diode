const fs = require('fs');
const folder='.'
// console.log('process.env', process.env);
console.log('process.env.GITHUB_REPOSITORY', process.env.GITHUB_REPOSITORY);
let list = []
// Read all files in root directorry
fs.readdirSync(folder).forEach(file => {
  console.log(file);
  list.push(file)
});
// filter file list down to sch, lib, and kicad_pcb files
list = list.filter( u => u.match(/\.(sch|lib|kicad_pcb)$/))
let prefix; 
let branch_name = process.env.GITHUB_REF.split('/').pop()
prefix = "https://raw.githubusercontent.com/"+process.env.GITHUB_REPOSITORY;
prefix += "/"+branch_name+"/"
// build src for iframe
let kicad_list = encodeURIComponent(list.map(a => prefix+a).join('\n'))
src_url = "https://saewoonam.github.io/kicad-utils/viewer.html?url="+kicad_list;
console.log('src_url', src_url);

let html_wrapper = `<html>\n<iframe src="${src_url}" title="kicad-viewer" style="width: 100%; height: 100%;"></iframe></html>`
console.log(html_wrapper)
