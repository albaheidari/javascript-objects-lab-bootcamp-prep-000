var recipes =  {};

function updateObjectWithKeyAndValue(obj,key,value){
  
 return Object.assign( {},obj,{[key]: value});
  
  
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  
  return Object.assign(obj, {[key]: value });
}
function deleteFromObjectByKey(object, key){
  
  delete key.object;
  return key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}
