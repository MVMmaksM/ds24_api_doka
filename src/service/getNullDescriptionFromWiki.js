function getNullDescriptionFromWiki(fieldsFromWiki){
    let result = []
    for (field of fieldsFromWiki){        
        if(!field.description){
            result.push(field);            
        }
    }  

    return result;
}

module.exports = getNullDescriptionFromWiki;