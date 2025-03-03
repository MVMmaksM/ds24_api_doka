function getNameFieldsFromTable(document, nameId, indexTableFieldsFromHtml){   
    let indexDescription, indexType; 

    const res = document.getElementsByClassName("dw-content")[0].childNodes;    
    const result = Array.from(res);    
    const indexElement = result.findIndex(el=> el.id===nameId);   
    let table, nameFields = []; 
    table = result[indexElement+2].getElementsByTagName("table")[indexTableFieldsFromHtml];
    
    for (i = 0; i < table.rows[0].cells.length; i++){
        //ищем индекс колонки описания
        if(table?.rows[0]?.cells[i]?.textContent?.trim().toLowerCase() === "описание"){
            indexDescription = i;
            break;
        }
    }

    for (i = 0; i < table.rows[0].cells.length; i++){
        //ищем индекс колонки тип
        if(table?.rows[0]?.cells[i]?.textContent?.trim().toLowerCase() === "тип"){
            indexType = i;
            break;
        }
    }

    for (let i = 1; i < table.rows.length; i++) {       
        nameFields.push(
            {
                fieldName: table?.rows[i]?.cells[0]?.textContent?.trim(),
                type: table?.rows[i]?.cells[indexType]?.textContent?.trim(),
                description: table?.rows[i]?.cells[indexDescription]?.textContent?.trim()
            });        
    }

    return nameFields;
}

module.exports = getNameFieldsFromTable;