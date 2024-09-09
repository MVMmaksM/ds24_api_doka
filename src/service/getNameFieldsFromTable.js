function getNameFieldsFromTable(document, nameId, indexTableFieldsFromHtml){
    let indexDescription, indexType; 

    const res = document.getElementsByClassName("dw-content")[0].childNodes;    
    const result = Array.from(res);    
    const indexElement = result.findIndex(el=> el.id===nameId);   
    const tableList = result[indexElement+2].getElementsByClassName("table-responsive");
    let table, nameFields = []; 
 
    table = tableList[indexTableFieldsFromHtml].getElementsByTagName("table");  

    for (i = 0; i < table[0].rows[0].cells.length; i++){
        //ищем индекс колонки описания
        if(table[0]?.rows[0]?.cells[i]?.textContent?.trim().toLowerCase() === "описание"){
            indexDescription = i;
            break;
        }
    }

    for (i = 0; i < table[0].rows[0].cells.length; i++){
        //ищем индекс колонки тип
        if(table[0]?.rows[0]?.cells[i]?.textContent?.trim().toLowerCase() === "тип"){
            indexType = i;
            break;
        }
    }

    for (let i = 1; i < table[0].rows.length; i++) {       
        nameFields.push(
            {
                fieldName: table[0]?.rows[i]?.cells[0]?.textContent?.trim(),
                type: table[0]?.rows[i]?.cells[indexType]?.textContent?.trim(),
                description: table[0]?.rows[i]?.cells[indexDescription]?.textContent?.trim()
            });        
    }

    return nameFields;
}

module.exports = getNameFieldsFromTable;