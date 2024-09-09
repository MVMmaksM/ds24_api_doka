class Compare{
    static existResponceNotWiki(responce, fieldsFromWiki){
        let resultCompare = [];
        
        if(Array.isArray(responce)){
            for (field in responce[0]){
                if (!fieldsFromWiki.find(f => f.fieldName === field)){          
                    resultCompare.push(field);            
                }
            }
        } else {
            for (field in responce){
                if (!fieldsFromWiki.find(f => f.fieldName === field)){          
                    resultCompare.push(field);            
                }
            } 
        }       
    
        return resultCompare;
    }
    
    static existWikiNotResponce(fieldsFromWiki, responce){       
        let resultCompare = [];

        if(Array.isArray(responce)){
            for (field of fieldsFromWiki){
                if (!Object.keys(responce[0]).find(r => r === field.fieldName)){                          
                    resultCompare.push(field);            
                }
            }
        }else {
            for (field of fieldsFromWiki){
                if (!Object.keys(responce).find(r => r === field.fieldName)){                          
                    resultCompare.push(field);            
                }
            }  
        }        
    
        return resultCompare;
    }
    
    static getDiffTypes(fieldsFromWiki, responce){
        let resultCompare = [], valueField;    
       
        //если передан список
        if(Array.isArray(responce)){
            for(let fieldWiki of fieldsFromWiki){ 
                //берем значение поля из списка
                valueField = responce[0][fieldWiki?.fieldName];
                
                //если поле null,то пропускаем итерацию
                if(valueField === null){
                    continue;
                }
                
                if(this.isDiffType(valueField, fieldWiki)){
                    resultCompare.push(fieldWiki);
                }
            }
        }else{
            //значит передан объект
            for(let fieldWiki of fieldsFromWiki){ 
                //берем значение поля из объекта
                valueField = responce[fieldWiki?.fieldName];
                
                //если поле null,то пропускаем итерацию
                if(valueField === null){
                    continue;
                }               
  
                if(this.isDiffType(valueField, fieldWiki)){
                    resultCompare.push(fieldWiki);
                }        
            }
        }

        return resultCompare;
    }

    static isDiffType(valueField, fieldWiki){       
        
        //если поле - массив, а в вики тип поля не array, то возвращаем true       
        if(Array.isArray(valueField)){
            if(fieldWiki.type !== "array"){
                fieldWiki.resultCompareTypes = `${fieldWiki?.fieldName} в вики: ${fieldWiki.type} в ответе: array`;
                return true;    
            }
            
            return false;
        }

        //если дошли сюда, то поле не array        
        if(typeof(valueField) !== fieldWiki.type){
            fieldWiki.resultCompareTypes = `${fieldWiki?.fieldName} в вики: ${fieldWiki.type} в ответе: ${typeof(valueField)}`;
            return true;
        } 
        
        return false;
    }
}

module.exports = Compare;

