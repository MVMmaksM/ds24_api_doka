const show_results = ({fields, route, is_diff_type, is_null_type, is_null_description, 
    is_exist_responce_not_wiki, is_exist_wiki_not_responce, is_double_fields, is_method, message_compare_method}) => {

    if(fields && fields?.length != 0){
        let message = "\n--------------------------------------------------------";  

        message += `\n${route.section_id}`;

        message += `\nРоут: ${route.config.method + " " + route.path}`;        

        if(is_diff_type){
            message += `\nНе совпадает тип полей:`;           

            for(let field of fields){
                message += `\n${field.result_compare_type}`;
            }
        }
        
        if(is_null_type){
            message += `\nНе заполнен тип полей:`;         

            for(let field of fields){
                message += `\n${field.field_name}`;
            }
        }
        
        if(is_null_description){
            message += `\nНет описания полей в вики:`;            

            for(let field of fields){
                message += `\n${field.field_name}`;
            }
        }

        if(is_exist_responce_not_wiki){
            message += `\nЕсть поля в ответе, но нет в вики:`;

            for(let field of fields){
                message += `\n${field}`;
            }
        }

        if(is_exist_wiki_not_responce){
            message += `\nЕсть поля в вики, но нет в ответе:`;           

            for(let field of fields){
                message += `\n${field.field_name}`;
            }
        }

        if(is_double_fields){
            message += `\nЗадвоение полей:`;           
         
            for(let field of fields_double){
                message += `\n${field}`;
            }
        }
        
        message += "\n--------------------------------------------------------";
        console.log(message);
    }

    if(is_method && message_compare_method){
        let message = "\n--------------------------------------------------------";  

        message += `\n${route.section_id}`;

        message += `\nРоут: ${route.config.method + " " + route.path}`; 
        
        message += `\n${message_compare_method}`;
        
        message += "\n--------------------------------------------------------";
        console.log(message);
    }
}

const show_error_responce = ({route, data}) => {
    let message = "\n-------------------------ERROR---------------------------";

    message += `\n${route.section_id}`;
    message += `\nРоут: ${route.config.method + " " + route.path}`;
    message += `\n${JSON.stringify(data)}`;

    message += "\n-------------------------ERROR---------------------------";

    console.log(message);
}

export {   
    show_results,
    show_error_responce
}