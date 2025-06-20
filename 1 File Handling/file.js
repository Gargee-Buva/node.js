const fs = require("fs") ;

//sync returens the result and can store it in variable
// sync
fs.writeFileSync("./text.txt" , "Hey there") ;

// async
// fs.writeFile("./text.txt","Hey there Async",(err)=>{}) ;

// const result = fs.readFileSync("./contacts.txt","utf-8") ;
// console.log(result) ;

const result = fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("Error",err) ;
    }
    else{
        console.log(result) ;
    }
}) ;

// note readFile does not return anything hence we should give it a callback back function 

// above write methods are overiding the entries in text file now i want entries get add one by one 

fs.appendFileSync("./append.txt",`${Date.now()} Hey There\n`) ;

fs.cpSync("./text.txt" , "./copy.txt") ;  // a copy of text.txt file gets created 

fs.unlinkSync("./copy.txt") ;  // the file copy.txt gets deleted

console.log(fs.statSync("./text.txt")) ;  //statistics of a file

// fs.mkdirSync("my-docs") ;

fs.mkdirSync("folder/a/b",{recursive : true}) ; //make a directory 

/*With recursive: true:
It will automatically create:

folder

folder/a

folder/a/b
(even if none of them existed)
*/
