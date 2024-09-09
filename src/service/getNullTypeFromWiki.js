function getNullTypeFromWiki(fieldsFromWiki){
    let result = []
    for (field of fieldsFromWiki){        
        if(!field.type){
            result.push(field);            
        }
    }  

    return result;
}

module.exports = getNullTypeFromWiki;