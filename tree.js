let fs = require("fs")
let path = require("path")
let types = require("./types")

function tree_helper(direc_path,indent){
    let is_file = fs.lstatSync(direc_path).isFile();
    if(is_file==true){
        let file_name = path.basename(direc_path);
        console.log(indent+"├──"+file_name);
    }
    else{
        let dir_name = path.basename(direc_path);
        console.log(indent+"└──"+dir_name);
        let childs = fs.readdirSync(direc_path);
        for(let i=0; i<childs.length; i++){
            let child_path = path.join(direc_path,childs[i])
            // let child_name = path.basename(child_path);
            tree_helper(child_path,indent+"\t");
        }
    }
}

function fn_tree(direc){
    if(direc==undefined){
        tree_helper(process.cwd(),"");
        // console.log("No input for the path..")
        return;
    }
    else{
        if(fs.existsSync(direc)){
            tree_helper(direc,"");
        }
        else{
            console.log("Path does not Exist!!")
            return;
        }
    }
}

module.exports ={
    tree:fn_tree
}