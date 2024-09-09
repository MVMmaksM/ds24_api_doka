function getDoubleField(wikiFields){
    let result = [];

    for (let i=0; i< wikiFields.length; i++){
        for (let j=i+1; j<wikiFields.length; j++){
            if(wikiFields[i] === wikiFields[j]){
                result.push(wikiFields[i]);
            }
        }
    }

    return result;
}

module.exports = getDoubleField;