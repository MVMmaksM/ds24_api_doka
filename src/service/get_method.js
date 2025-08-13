const get_method = (document, section_id) => {    
    const elements = document.getElementsByClassName("dw-content")[0].childNodes;    
    const array_elements = Array.from(elements);

    //находим индекс секции
    const index_section = array_elements.findIndex(el=> el.id === section_id); 
    //получаем содержимое тегов <p>
    const elements_p = array_elements[index_section+2].getElementsByTagName("p");
    const methods = ["GET", "POST", "PUT", "DELETE"];

    for(let element_p of elements_p){
        const find_method = methods.find(method => element_p.textContent.toUpperCase().includes(method));

        if(find_method)
            return find_method;
    }
    
    //если сюда пришли, значит ничего не найдено
    return undefined;
}

export default get_method;