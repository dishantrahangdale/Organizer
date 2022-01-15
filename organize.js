let fs = require("fs")
let path = require("path")
let types = require("./types")

function get_category(name){
    let ext = path.extname(name);
    for(let type in types){
        let folder = types[type];
        for(let k=0; k<folder.length; k++){
            if(ext==folder[k]){
                return type;
            }
        }
    }
    return "others";
}

function send_file(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
}
function fn_organize(direc){
    let des;
    if(direc==undefined){
        // direc = process.cwd();
        console.log("No input for path..")
    }
    else{
        if(fs.existsSync(direc)){
            des = path.join(direc,"Organized");
            if(fs.existsSync(des)==false){
                fs.mkdirSync(des);
            }
        }
        else{
            console.log("Path does not Exist!!")
            return;
        }
        let allfiles = fs.readdirSync(direc)
        for(let i=0; i<allfiles.length; i++){
            let file_path = path.join(direc,allfiles[i]);
            let is_file = fs.lstatSync(file_path).isFile();
            if(is_file){
                let category = get_category(allfiles[i]);
                send_file(file_path,des,category);
                // console.log(allfiles[i]+" belongs to --->"+category);
            }
        }
    }
}

module.exports ={
    organize:fn_organize
}