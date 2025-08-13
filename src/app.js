import get_document from "./service/get_document.js";
import get_fields_table from"./service/get_fields_table.js";
import fetch_api from "./service/fetch_api.js";
import routes from "./wiki/routes.js";
import get_null_description from "./service/get_null_description.js";
import get_null_type from "./service/get_null_type.js";
import { compare_type, exist_wiki_not_responce, exist_responce_not_wiki, compare_method } from "./service/comparator.js";
import  { show_results, show_error_responce } from "./service/show_result.js";
import get_double_fields from "./service/get_double_fields.js";
import app_config from "../config/app.config.js";
import get_method from "./service/get_method.js";

async function getDiffWikiRoutes() {  
    //получаем window.document wiki       
    const document = await get_document(app_config.url_wiki);
   
    //проходимся по всем роутам из вики
    for(const route of routes){    
        //сравнение методов
        const method = get_method(document, route.section_id);        
        const result_compare_method = compare_method(method, route.config.method);     

        //получаем название полей таблицы ответа из вики
        const fields = get_fields_table(document, route.section_id, route.index_table_responce);
        //получаем список задвоенных полей
        const double_fields = get_double_fields(fields);        
        //получаем список полей, у которых не заполнено описание
        const null_description = get_null_description(fields);
        //получаем список полей, у которых не заполнен тип
        const null_type = get_null_type(fields);

        //делаем запрос к api и получаем ответ
        const responce = await fetch_api(app_config.base_url_api + route.path, route.config);
        //получаем данные из ответа 
        const data = await responce.json();

        if(responce.ok){
            //получаем различия в типах данных
            const diff_types = compare_type(fields, data);
            //сравниваем поля, есть в ответе, но нет в вики  
            const result_exist_responce_not_wiki = exist_responce_not_wiki(data, fields);
            //сравниваем поля, есть в вики, но нет в ответе  
            const result_exist_wiki_not_responce = exist_wiki_not_responce(fields, data);

            show_results({fields: diff_types, route: route, is_diff_type: 1});
            show_results({fields: null_type, route: route, is_null_type: 1});
            show_results({fields: double_fields, route: route, is_double_fields: 1});
            show_results({fields: null_description, route: route, is_null_description: 1});
            show_results({fields: result_exist_responce_not_wiki, route: route, is_exist_responce_not_wiki: 1});
            show_results({fields: result_exist_wiki_not_responce, route: route, is_exist_wiki_not_responce: 1});
        }
        else{            
            show_error_responce({route: route, data: data});
        } 
       
        show_results({route: route, is_method: 1, message_compare_method: result_compare_method});
    };
}

getDiffWikiRoutes();
