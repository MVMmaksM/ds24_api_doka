//есть в ответе, но нет в вики
const exist_responce_not_wiki = (responce, fields_wiki) =>{
    let result = [];
        
    if(Array.isArray(responce)){
        for (let field_responce in responce[0]){
            if (!fields_wiki.find(f => f.field_name === field_responce)){          
                    result.push(field_responce);            
            }
        }
    } else {
        for (let field_responce in responce){
            if (!fields_wiki.find(f => f.field_name === field_responce)){          
                    result.push(field_responce);            
            }
        } 
    }       
    
    return result;
}
    
// есть в вики, но нет в ответе
const exist_wiki_not_responce = (fields_wiki, responce) => {       
    let result = [];

    if(Array.isArray(responce)){
        for (let field_wiki of fields_wiki){
            if (!Object.keys(responce[0]).find(r => r === field_wiki.field_name)){                          
                result.push(field_wiki);            
            }
        }
    }else {
        for (let field_wiki of fields_wiki){
            if (!Object.keys(responce).find(r => r === field_wiki.field_name)){                          
                    result.push(field_wiki);            
            }
        }  
    }        
    
    return result;
}
    
const compare_type = (fields, responce) => {
    let resultCompare = [], type_field;    
       
    //если передан список
    if(Array.isArray(responce)){
        for(let field of fields){ 
            //берем тип поля
            type_field = responce[0][field?.field_name];
                
            //если поле null,то пропускаем итерацию
            if(type_field === null){
                continue;
            }
                
            if(is_diff_type(type_field, field)){
                resultCompare.push(field);
            }
        }
    }else{
        //значит передан объект
        for(let field of fields){ 
            //берем значение поля из объекта
            type_field = responce[field?.field_name];
                
            //если поле null,то пропускаем итерацию
            if(type_field === null){
                continue;
            }               
  
            if(is_diff_type(type_field, field)){
                resultCompare.push(field);
            }        
        }
    }

    return resultCompare;
}

const is_diff_type = (type_field, field) => {       
        
    //если поле - массив, а в вики тип поля не array, то возвращаем true       
    if(Array.isArray(type_field)){
        if(field.type !== "array"){
            field.result_compare_type = `${field?.field_name} в вики: ${field.type} в ответе: array`;
            return true;    
        }
            
        return false;
    }

    //если дошли сюда, то поле не array        
    if(typeof(type_field) !== field.type){
        field.result_compare_type = `${field?.field_name} в вики: ${field.type} в ответе: ${typeof(type_field)}`;
        return true;
    } 
        
    return false;
}


export {
    compare_type,
    exist_wiki_not_responce,
    exist_responce_not_wiki
}

