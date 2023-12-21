const mongoose=require('mongoose')
const url="mongodb+srv://ankit_33:qHZnUpmLaobrysxH@cluster0.7htk5qh.mongodb.net/?retryWrites=true&w=majority"

module.exports.connect=() => {
    mongoose
    .connect(url)
    .then((res)=> console.log("MongDB is connected sucessfully "))
    .catch((err)=> console.log('Error: ',err));
};