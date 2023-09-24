//// Falsey Value 
//// fase, 0, -0 BigInt 0n, "" , null, undefined, NaN  //// Metion these are falsey value other all are truthy value
//// Truthy Value 
//// Mention some truthy value : "0", "false", " ", [], {}, function(){},
//// function(){} : Empty function

const userArr = []
if (userArr.length === 0){
    console.log("Array is empty")
}

const userObj = {}
if (Object.keys(userObj).length === 0){
    console.log("Object is empty")
}

//// Nullish coalescing Operater (??) : null undefined
