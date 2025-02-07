const fs = require("fs");
// //readfile
// fs.readFile("./abc.txt", (error, data) => {
//   if (error) {
//     console.log("error " + error);
//   } else {
//     console.log(data.toString());
//   }
// });
// console.log("Terminated");

// //witefile
// let content = "wow this is dynamic file to write";
// fs.writeFile("new_file.txt", content, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Saved");
//   }
// });

// //appendfile

// fs.appendFile("abc.txt", "this is extra content", (error) => {
//   if (error) {
//     console.log("file noty found " + error);
//   } else {
//     console.log("Saved");
//   }
// });

//deletefile
// fs.unlink("new_file.txt",(err)=>{
// if(err){
//     console.log("something went wrong "+err)
// }
// else{
//     console.log("Deleted ");
// }
// })