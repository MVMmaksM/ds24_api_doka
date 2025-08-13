import app_config from ".././../config/app.config.js";

const routes = 
[
    {
        section_id: "получение_списка_доступных_юридических_лиц",
        path: "/v2/ref/cnt_list",
        index_table_responce: 0,
        config: {
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_городов",
        path: "/v2/ref/city_list?cnt_id=12861",
        index_table_responce: 1,
        config: {
            method: "GET",
            headers: app_config.headers          
        }
    },  
    {
        section_id: "получение_списка_доступных_улиц_населенных_пунктов",
        path: "/v2/ref/street_list?cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_рсо",
        path: "/v2/ref/contractors_list?cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_шаблонов_уведомления_жителей_для_оповещений",
        path: "/v2/ref/oi_templates_list?cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_домов",
        path: "/v2/ref/address_list",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_групп_домов",
        path: "/v2/ref/group_obj_list?cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_подъездов_у_дома",
        path: "/v2/ref/entrance_list?house_id=40783",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_этажей_дома",
        path: "/v2/ref/floor_list?house_id=54916",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_квартир",
        path: "/v2/ref/flat_list?house_id=54916",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_типов_работ",
        path: "/v2/ref/type_list",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_причин_обращений",
        path: "/v2/ref/ess_list?type_ids=23",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_доступных_причин_обращений_для_указанного_дома",
        path: "/v2/ref/ess_list_search?house_id=38467&cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_исполнителей",
        path: "/v2/ref/emp_list?cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_ответственных",
        path: "/v2/ref/resp_list?cnt_id=12241",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_статусов",
        path: "/v2/ref/status_list",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_статусов_в_виде_дерева",
        path: "/v2/ref/status_tree_list",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_типов_заявок",
        path: "/v2/ref/req_type_list",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_причин_статусов",
        path: "/v2/ref/status_reason_list?status_id=25",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_причин_отказа_от_заявки",
        path: "/v2/ref/request_refuse_reason_list",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_стран_и_кодов_стран_публичный",
        path: "/v2/public/ref/countries_list",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "создание_оповещения",
        path: "/v2/oi",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                house_ids: "54976",
                type: "О",
                start_at: "22.01.2024 18:30",
                end_at: "22.01.2024 18:30",
                service_list: "Э:О",
                resp: "Н",
                reason: "А",
                what: "Н",
                note: "Test"
            })      
        }
    },
    {
        section_id: "изменение_оповещения_написание_комментария",
        path: "/v2/oi/140238",
        index_table_responce: 2,
        config:{
            method: "PUT",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                status : "А",
                comment: "Test"
            })      
        }
    },
    {
        section_id: "получение_списка_оповещений",
        path: "/v2/oi?start=1&count=200",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_детализации_оповещения",
        path: "/v2/oi/139924",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_домов_на_которые_распространяется_оповещение_в_виде_списка_состояний_по_каждому_дому",
        path: "/v2/oi/136129/house_state",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "изменение_в_списке_домов_на_которые_распространяется_оповещение_в_виде_списка_состояний_по_каждому_дому",
        path: "/v2/oi/143740/house_state/364072",
        index_table_responce: 1,
        config:{
            method: "PUT",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_домов_на_которые_распространяется_оповещение_в_виде_группировки_по_улицами",
        path: "/v2/oi/136129/houses",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_ленты_событий_оповещения",
        path: "/v2/oi/136129/feed?start=1&count=200",
        index_table_responce: 2,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_деталей_табов_для_оповещения",
        path: "/v2/oi/142625/all",
        index_table_responce: 2,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },   
    {
        section_id: "получение_списка_активных_показаний_по_счётчикам_для_текущего_пользователя",
        path: "/v2/meter/?start=1&cnt_id=12242&count=200",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_квартир_которые_связаны_с_активными_показаниями",
        path: "/v2/meter/flat_list?house_id=60075",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },    
    {
        section_id: "получение_списка_типов_счетчиков_для_дальнейшей_фильтрации",
        path: "/v2/meter/term_list",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "сохранение_показаний",
        path: "/v2/meter/3523772",
        index_table_responce: 2,
        config:{
            method: "PUT",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                value: "150",
                image_url : "https://ds24.ru/fs/static/2017/08/14/some_test.jpg",
                image_name : "image"
            })      
        }
    },   
    {
        section_id: "получение_списка_контактов",
        path: "/v2/contact?start=1&count=200",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    //РСО
    {   
        section_id: "обновление_заявки_рсо",
        path: "/v2/request_rso/78571",
        index_table_responce: 2,
        config:{
            method: "PUT",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                status_id : 1,               
                rso_comment: "123",
                ext_request_id: "123Ф",
                note: "123",
            })      
        }
    },
    {
        section_id: "получение_списка_заявок_рсо",
        path: "/v2/request_rso?start=1&count=200&date_start=2016-12-31T19:00:00.000Z&date_end=2025-07-31T19:00:00.000Z&owner_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_детализации_заявки_рсо",
        path: "/v2/request_rso/78571",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_деталей_табов_для_заявок_рсо",
        path: "/v2/request_rso/78571/all",
        index_table_responce: 2,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {   //роут на создание заявки, но в доке ответ из детализации
        //сверяем доку с детализацией
        section_id: "получение_детализации_по_заявке",
        path: "/v2/request",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                contphone:"",
                email:"",
                entr:"",
                ess:"Неисправность электроники СКУД",
                ess_id:3077,
                flat:"кв 1",
                house:"Верхняя Пышма г, Александра Козицына ул, дом 1",
                house_id:54916,
                note:"Прорвало трубу",
                type_id:4074
            })      
        }
    }, 
    {  
        section_id: "изменение_данных_в_заявке_добавление_комментария",
        path: "/v2/request/1305482",
        index_table_responce: 2,
        config:{
            method: "PUT",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                fio: "Testttttt"
            })      
        }
    },



    {
        section_id: "получение_списка_заявок",
        path: "/v2/request?start=1&count=1",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_доступных_тэгов",
        path: "/v2/request/tag_list",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_детализации_по_заявке",
        path: "/v2/request/1302812",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_деталей_табов_для_заявки",
        path: "/v2/request/1302289/all",
        index_table_responce: 2,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_контрольных_вопросов_для_заявки",
        path: "/v2/request/1300052/questions",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_подписчиков_заявки",
        path: "/v2/request/1300071/subscribers",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_sla_заявки",
        path: "/v2/request/1302289/sla",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {   
        section_id: "добавление_комментария_или_прикрепление_файла_в_ленту",
        path: "/v2/request/1302289/all/comment",
        index_table_responce: 3,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                note: "Test postman",
                flag_webhook: "Н"
            })      
        }
    },
    {   
        section_id: "изменение_объекта_в_ленте_табах_заявки",
        path: "/v2/request/1300052/all/call/85",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                mark_average: 3
            })      
        }
    },
    {   
        section_id: "получение_количества_не_принятых_в_работу_заявок",
        path: "/v2/request/custom/new",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers                  
        }
    },
    {   
        section_id: "принятие_в_работу_всех_непринятых_заявок",
        path: "/v2/request/custom/new/apply",
        index_table_responce: 0,
        config:{
            method: "POST",
            headers: app_config.headers                  
        }
    },
      {   
        section_id: "отказ_от_принятия_заявки_в_работу",
        path: "/v2/request/1302136/refuse",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                refuse_id: "2"
            })      
        }
    },
    {   
        section_id: "возврат_к_предшествующей_причине_обращения_гарантийной_заявки",
        path: "/v2/request/1302765/flashback",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers                 
        }
    },
    {   
        section_id: "перевод_аварийной_заявки_на_участок",
        path: "/v2/request/1110236/tocurrentrepair",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers                 
        }
    },
    {   
        section_id: "публикация_комментария_фотографии_для_жителя",
        path: "/v2/request/1302289/feed/37601",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers, 
            body: JSON.stringify(
                {
                    mtype: 0,
                    webhook_flag: "Д"
                })                 
        }
    },
    {
        section_id: "получение_ленты_по_заявке",
        path: "/v2/request/1304864/feed?start=1&count=500",
        index_table_responce: 2,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {   
        section_id: "добавление_фотографий_к_заявке",
        path: "/v2/request/1302765/add_images",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers, 
            body: JSON.stringify(
                {
                    images:
                    [
                        {
                            image_name: "996780_img.jpg",
                            image_url: "https://ds24.ru/fs/static/2021/11/25/996780_img.jpg"
                        }                        
                    ]                    
                })                 
        }
    },
    {
        section_id: "получение_списка_push-уведомлений_для_пользователя",
        path: "/v2/push?start=1&count=200",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_детализации_push-уведомления",
        path: "/v2/push/25578",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {   
        section_id: "пометить_прочитанными_все_push-уведомления_у_пользователя",
        path: "/v2/push/readall",
        index_table_responce: 0,
        config:{
            method: "POST",
            headers: app_config.headers                            
        }
    },
    {
        section_id: "получение_списка_звонков_от_клиентов",
        path: "/v2/calls_log/client?start=1&count=200&start_date=2011-06-19T10:38:17.461Z&end_date=2024-08-19T10:38:17.461Z&cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_звонков_от_исполнителей",
        path: "/v2/calls_log/exec?start=1&count=200&start_date=2010-07-02T10:38:17.461Z&end_date=2024-07-02T10:38:17.461Z&cnt_id=13521",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_звонков_для_рсо",
        path: "/v2/calls_log/rso?start=1&count=200&start_date=2010-07-02T10:38:17.461Z&end_date=2024-07-02T10:38:17.461Z&cnt_id=12861",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "детализация_звонка",
        path: "/v2/calls_log/5317185",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_исходящих_звонков",
        path: "/v2/calls_log/5315676/out?cnt_id=12242",
        index_table_responce: 2,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {   
        section_id: "добавление_или_изменение_оценки_к_звонку",
        path: "/v2/calls_log/5317185/mark",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
                {
                    mark_comment: "Test",
                    mark: 5
                })                                             
        }
    },
    {
        section_id: "получение_детализации_профиля",
        path: "/v2/profile/detail",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_включенных_push-уведомлений_для_профиля",
        path: "/v2/profile/settings_push",
        index_table_responce: 0,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {   
        section_id: "изменение_данных_в_профиле",
        path: "/v2/profile/update",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
                {
                    start_app : "im started11!!"
                })                                             
        }
    },
    {
        section_id: "получение_списка_чек-листов",
        path: "/v2/checklist?start=1&statuses=SUCCESS&count=200",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_детализации_чек-листа",
        path: "/v2/checklist/7265",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_домов_указанных_в_чек-листе",
        path: "/v2/checklist/7265/house",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_списка_работ_указанных_в_чек-листе",
        path: "/v2/checklist/7265/work",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_детализации_работы_из_чек-листа",
        path: "/v2/checklist/work/54452",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },
    {
        section_id: "получение_новостной_ленты_для_работы_из_чек-листа",
        path: "/v2/checklist/work/54452/feed",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    },  
    {   
        section_id: "начать_работу_с_чек-листом",
        path: "/v2/checklist/7265/start",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers                                                        
        }
    },
    {   
        section_id: "завершение_чек-листа",
        path: "/v2/checklist/7265/finish",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers                                                        
        }
    },
    {   
        section_id: "изменение_статуса_работы_указанной_в_чек-листе",
        path: "/v2/checklist/work/54452",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
                {
                    status: 3,
                    comment: "тест изменения статуса с комментарием"
                })                                                         
        }
    },
    {   
        section_id: "добавление_комментария_или_изображения_в_новостную_ленту_работы",
        path: "/v2/checklist/work/54452/feed",
        index_table_responce: 2,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
                {
                    image_name: "some_test.jpg",
                    image_url: "https://ds24.ru/fs/static/2017/08/14/some_test.jpg"
                })                                                         
        }
    },
    {   
        section_id: "создание_настроек_фильтров",
        path: "/v2/request_filter",
        index_table_responce: 1,
        config:{
            method: "POST",
            headers: app_config.headers,
            body: JSON.stringify(
                {
                    filter_data: "{\"period_exec\":-1,\"street\":\"Агатовая ул\",\"city\":\"all\",\"is_only_my\":0,\"period\":\"all\",\"custom_order\":\"create\",\"group_obj_id\":\"notSel\",\"resp_ids\":[],\"emp_ids\": [],\"rtype_ids\":[],\"status_ids\":[],\"type_ids\":[],\"ess_ids\":[],\"tag_ids\":[],\"house_ids\":[],\"flat_ids\":[],\"sort\":\"D\",\"search_phone\":\"\",\"keywords\":\"\",\"request_id\":\"\",\"add_type\":\"notSel\",\"add_less_than\":0,\"add_more_than\":0,\"add_more_less_select\":\"more\"}",
                    note: "Тестовый фильтр"
                })                                                         
        }
    },
    {  
        section_id: "обновление_настроек_фильтров",
        path: "/v2/request_filter/1901",
        index_table_responce: 1,
        config:{
            method: "PUT",
            headers: app_config.headers,
            body: JSON.stringify(
            {
                note: "Тестовый фильтр"
            })      
        }
    },    
    {
        section_id: "получение_настроек_фильтров",
        path: "/v2/request_filter",
        index_table_responce: 1,
        config:{
            method: "GET",
            headers: app_config.headers          
        }
    }
]

export default routes;