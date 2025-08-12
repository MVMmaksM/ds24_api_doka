const get_fields_table =(document, section_id, index_table_responce) =>{ 

    const elements = document.getElementsByClassName("dw-content")[0].childNodes;    
    const array_elements = Array.from(elements);

    //находим индекс секции
    const index_section = array_elements.findIndex(el=> el.id === section_id);   
    //получаем таблицу ответа из секции 
    const table = array_elements[index_section+2].getElementsByTagName("table")[index_table_responce];
    
    //получаем индекс колонки "описание"
    const index_description = get_index_description(table);
    //получаем индекс колонки "тип"
    const index_type = get_index_type(table);  

    let fields = []; 

    for (let i = 1; i < table.rows.length; i++) {       
        fields.push(
            {
                field_name: table?.rows[i]?.cells[0]?.textContent?.trim(),
                type: table?.rows[i]?.cells[index_type]?.textContent?.trim(),
                description: table?.rows[i]?.cells[index_description]?.textContent?.trim()
            });        
    }

    return fields;
}

const get_index_description = (table)=>{
    for (let i = 0; i < table.rows[0].cells.length; i++){
        //ищем индекс колонки описания
        if(table?.rows[0]?.cells[i]?.textContent?.trim().toLowerCase() === "описание"){
            return i;            
        }
    }
}

const get_index_type = (table)=>{
    for (let i = 0; i < table.rows[0].cells.length; i++){
        //ищем индекс колонки тип
        if(table?.rows[0]?.cells[i]?.textContent?.trim().toLowerCase() === "тип"){
            return i;            
        }
    }
} 

export default get_fields_table;