const get_double_fields = (fields) => {
    let double_fields = [];

    for (let i=0; i< fields.length; i++){
        for (let j=i+1; j<fields.length; j++){
            if(fields[i] === fields[j]){
                result.push(fields[i]);
            }
        }
    }

    return double_fields;
}

export default get_double_fields;