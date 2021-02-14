const fs = require('fs');
const folder='.'
let list = []
fs.readdirSync(folder).forEach(file => {
  console.log(file);
  list.push(file)
});

user = 'saewoonam'
repo = 'kicad-ideal-diode'
list = list.filter( u => u.match(/\.(sch|lib|kicad_pcb)$/))
// list = list.filter( u => u.match(/\.kicad_pcb$/))
// let prefix = "https://raw.githubusercontent.com/"+user+"/"+repo+"/main/"+path+"/"
let prefix = "https://raw.githubusercontent.com/"+user+"/"+repo+"/main/"
let kicad_list = encodeURIComponent(list.map(a => prefix+a).join('\n'))
src_url = "https://saewoonam.github.io/kicad-utils/viewer.html?url="+kicad_list;
console.log('src_url', src_url);

var getRepoInfo = require('git-repo-info');

var info = getRepoInfo();


console.log(info);
console.log(__dirname);
const simpleGit = require('simple-git');
const git = simpleGit();
git.listRemote(['--get-url'], (err, data) => {
        if (!err) {
            console.log('Remote url for repository at ' + __dirname + ':');
            console.log(data);
        }
    });
console.log('***** Done *****');
