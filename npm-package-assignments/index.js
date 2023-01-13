const fs = require('fs');



function jsonReader(filePath,cb){
    fs.readFile(filePath, 'utf-8', (err,jsonString) =>{
        if (err) {
            return cb && cb(err)
        }else{
            try{
                const object =JSON.parse(jsonString);
                return cb && cb(null, object);
            }catch(err){
                return cb&& cb(err)
            }

        }
     
});
}



read = function(jsonName){
    jsonReader('./'+jsonName+'.json',(err,key)=>
        { if (!fs.existsSync(jsonName+'.json')) {
                //create new file if not exist
                fs.closeSync(fs.openSync(jsonName+'.json', 'w'));
                console.log('This Json is not exist  ')
            }
            

// Error checking
     if(err){
            console.log(err)
             
        
    } else {
            //Create or overwrite over json with the next template
        let data = JSON.stringify(key);
        console.log(data);

    }
})};




write =function(jsonName,id,firstname,lastname,address){
    //Create or overwrite over json with the next template
    const newObject =[
        id,{
        "First name":firstname,
        "Last name":lastname,
        "Address":address
        }]
    fs.writeFile('./'+jsonName+'.json', JSON.stringify([newObject],null,2), err=>{
        if (err){
            console.log(err)
        }else{
            console.log('File successfully written!')
        }});
};

append =function(jsonName,id,firstname,lastname,address){

// Storing the JSON format data in myObject
var data = fs.readFileSync(jsonName+'.json');
var myObject = JSON.parse(data);



var arrayLength = myObject.length;
for (var i = 0; i < arrayLength; i++){
    if(myObject[i].includes(id)){
        
        throw new Error("This person already inside the array.")};
}

          
        // Defining new data to be added
const newObject =[
            id,{
            "First name":firstname,
            "Last name":lastname,
            "Address":address
            }]
// Adding the new data to our object
myObject.push(newObject);
  
// Writing to our JSON file
var newData2 = JSON.stringify(myObject);
fs.writeFile(jsonName+'.json', newData2, (err) => {
  // Error checking
  if (err) throw err;
  console.log("New data added");
});


}




module.exports = { 
    read,
    write,
    append

};