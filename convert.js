// require modules necesary

const fs = require('fs')
const path = require('path')
const csv=require('csvtojson')

// call to file to convert

const csvFilePath= 'customer-data.csv'

// using Module cstjson
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    // Convert data into a JSON string representation and save in a const.
    const customers= JSON.stringify(jsonObj,null,1);

    // create a new file .json
    
    fs.writeFileSync(path.join(__dirname,'customers.json'),customers);
    
})
