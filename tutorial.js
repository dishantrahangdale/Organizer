function fn_tutorial(){
    console.log(`
    Type the below commands:-
        -- node main.js tree "Directory"
        -- node main.js organize "Directory"
        -- node main.js tutorial
    `);    
}

module.exports = {
    tutorial: fn_tutorial
}