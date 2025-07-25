const config = require(".././../config/app.config");

module.exports= 
[
    {
        nameId: "получение_списка_доступных_юридических_лиц",
        route: "/v2/ref/cnt_list",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_городов",
        route: "/v2/ref/city_list?cnt_id=12861",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },  
    {
        nameId: "получение_списка_доступных_улиц_населенных_пунктов",
        route: "/v2/ref/street_list?cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_рсо",
        route: "/v2/ref/contractors_list?cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_шаблонов_уведомления_жителей_для_оповещений",
        route: "/v2/ref/oi_templates_list?cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_домов",
        route: "/v2/ref/address_list",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_групп_домов",
        route: "/v2/ref/group_obj_list?cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_подъездов_у_дома",
        route: "/v2/ref/entrance_list?house_id=40783",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_этажей_дома",
        route: "/v2/ref/floor_list?house_id=54916",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_квартир",
        route: "/v2/ref/flat_list?house_id=54916",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_типов_работ",
        route: "/v2/ref/type_list",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_причин_обращений",
        route: "/v2/ref/ess_list?type_ids=23",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_доступных_причин_обращений_для_указанного_дома",
        route: "/v2/ref/ess_list_search?house_id=38467&cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_исполнителей",
        route: "/v2/ref/emp_list?cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_ответственных",
        route: "/v2/ref/resp_list?cnt_id=12241",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_статусов",
        route: "/v2/ref/status_list",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_статусов_в_виде_дерева",
        route: "/v2/ref/status_tree_list",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_типов_заявок",
        route: "/v2/ref/req_type_list",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_причин_статусов",
        route: "/v2/ref/status_reason_list?status_id=25",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_причин_отказа_от_заявки",
        route: "/v2/ref/request_refuse_reason_list",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_стран_и_кодов_стран_публичный",
        route: "/v2/public/ref/countries_list",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "создание_оповещения",
        route: "/v2/oi",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
            {
                house_ids: "54976",
                type: "О",
                start_at: "22.01.2024 18:30",
                end_at: "22.01.2024 18:30",
                service_list: "Э:О",
                esp: "Н",
                reason: "А",
                what: "Н",
                note: "Test"
            })      
        }
    },
    {
        nameId: "изменение_оповещения_написание_комментария",
        route: "/v2/oi/140238",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "PUT",
            headers: config.headers,
            body: JSON.stringify(
            {
                status : "А",
                comment: "Test"
            })      
        }
    },
    {
        nameId: "получение_списка_оповещений",
        route: "/v2/oi?start=1&count=200",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_детализации_оповещения",
        route: "/v2/oi/139924",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_домов_на_которые_распространяется_оповещение_в_виде_списка_состояний_по_каждому_дому",
        route: "/v2/oi/136129/house_state",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "изменение_в_списке_домов_на_которые_распространяется_оповещение_в_виде_списка_состояний_по_каждому_дому",
        route: "/v2/oi/143740/house_state/364072",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "PUT",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_домов_на_которые_распространяется_оповещение_в_виде_группировки_по_улицами",
        route: "/v2/oi/136129/houses",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_ленты_событий_оповещения",
        route: "/v2/oi/136129/feed?start=1&count=200",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_деталей_табов_для_оповещения",
        route: "/v2/oi/142625/all",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },   
    {
        nameId: "получение_списка_активных_показаний_по_счётчикам_для_текущего_пользователя",
        route: "/v2/meter/?start=1&cnt_id=12242&count=200",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_квартир_которые_связаны_с_активными_показаниями",
        route: "/v2/meter/flat_list?house_id=60075",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },    
    {
        nameId: "получение_списка_типов_счетчиков_для_дальнейшей_фильтрации",
        route: "/v2/meter/term_list",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "сохранение_показаний",
        route: "/v2/meter/3523772",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "PUT",
            headers: config.headers,
            body: JSON.stringify(
            {
                value: "150",
                image_url : "https://ds24.ru/fs/static/2017/08/14/some_test.jpg",
                image_name : "image"
            })      
        }
    },   
    {
        nameId: "получение_списка_контактов",
        route: "/v2/contact?start=1&count=200",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },      
    {   //роту на создание заявки, но в доке ответ из детализации
        //сверяем доку с детализацией
        nameId: "получение_детализации_по_заявке",
        route: "/v2/request",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers,
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
        nameId: "изменение_данных_в_заявке_добавление_комментария",
        route: "/v2/request/1305482",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "PUT",
            headers: config.headers,
            body: JSON.stringify(
            {
                fio: "Testttttt"
            })      
        }
    },



    {
        nameId: "получение_списка_заявок",
        route: "/v2/request?start=1&count=1",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_доступных_тэгов",
        route: "/v2/request/tag_list",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_детализации_по_заявке",
        route: "/v2/request/1302812",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_деталей_табов_для_заявки",
        route: "/v2/request/1302289/all",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_контрольных_вопросов_для_заявки",
        route: "/v2/request/1300052/questions",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_подписчиков_заявки",
        route: "/v2/request/1300071/subscribers",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_sla_заявки",
        route: "/v2/request/1302289/sla",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {   
        nameId: "добавление_комментария_или_прикрепление_файла_в_ленту",
        route: "/v2/request/1302289/all/comment",
        indexTableFieldsFromHtml: 3,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
            {
                note: "Test postman",
                flag_webhook: "Н"
            })      
        }
    },
    {   
        nameId: "изменение_объекта_в_ленте_табах_заявки",
        route: "/v2/request/1300052/all/call/85",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
            {
                mark_average: 3
            })      
        }
    },
    {   
        nameId: "получение_количества_не_принятых_в_работу_заявок",
        route: "/v2/request/custom/new",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers                  
        }
    },
    {   
        nameId: "принятие_в_работу_всех_непринятых_заявок",
        route: "/v2/request/custom/new/apply",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "POST",
            headers: config.headers                  
        }
    },
      {   
        nameId: "отказ_от_принятия_заявки_в_работу",
        route: "/v2/request/1302136/refuse",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
            {
                refuse_id: "2"
            })      
        }
    },
    {   
        nameId: "возврат_к_предшествующей_причине_обращения_гарантийной_заявки",
        route: "/v2/request/1302765/flashback",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers                 
        }
    },
    {   
        nameId: "перевод_аварийной_заявки_на_участок",
        route: "/v2/request/1110236/tocurrentrepair",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers                 
        }
    },
    {   
        nameId: "публикация_комментария_фотографии_для_жителя",
        route: "/v2/request/1302289/feed/37601",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers, 
            body: JSON.stringify(
                {
                    mtype: 0,
                    webhook_flag: "Д"
                })                 
        }
    },
    {
        nameId: "получение_ленты_по_заявке",
        route: "/v2/request/1304864/feed?start=1&count=500",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {   
        nameId: "добавление_фотографий_к_заявке",
        route: "/v2/request/1302765/add_images",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers, 
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
        nameId: "получение_списка_push-уведомлений_для_пользователя",
        route: "/v2/push?start=1&count=200",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_детализации_push-уведомления",
        route: "/v2/push/25578",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {   
        nameId: "пометить_прочитанными_все_push-уведомления_у_пользователя",
        route: "/v2/push/readall",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "POST",
            headers: config.headers                            
        }
    },
    {
        nameId: "получение_списка_звонков_от_клиентов",
        route: "/v2/calls_log/client?start=1&count=200&start_date=2011-06-19T10:38:17.461Z&end_date=2024-08-19T10:38:17.461Z&cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_звонков_от_исполнителей",
        route: "/v2/calls_log/exec?start=1&count=200&start_date=2010-07-02T10:38:17.461Z&end_date=2024-07-02T10:38:17.461Z&cnt_id=13521",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_звонков_для_рсо",
        route: "/v2/calls_log/rso?start=1&count=200&start_date=2010-07-02T10:38:17.461Z&end_date=2024-07-02T10:38:17.461Z&cnt_id=12861",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "детализация_звонка",
        route: "/v2/calls_log/5317185",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_исходящих_звонков",
        route: "/v2/calls_log/5315676/out?cnt_id=12242",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {   
        nameId: "добавление_или_изменение_оценки_к_звонку",
        route: "/v2/calls_log/5317185/mark",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
                {
                    mark_comment: "Test",
                    mark: 5
                })                                             
        }
    },
    {
        nameId: "получение_детализации_профиля",
        route: "/v2/profile/detail",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_включенных_push-уведомлений_для_профиля",
        route: "/v2/profile/settings_push",
        indexTableFieldsFromHtml: 0,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {   
        nameId: "изменение_данных_в_профиле",
        route: "/v2/profile/update",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
                {
                    start_app : "im started11!!"
                })                                             
        }
    },
    {
        nameId: "получение_списка_чек-листов",
        route: "/v2/checklist?start=1&statuses=SUCCESS&count=200",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_детализации_чек-листа",
        route: "/v2/checklist/7265",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_домов_указанных_в_чек-листе",
        route: "/v2/checklist/7265/house",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_списка_работ_указанных_в_чек-листе",
        route: "/v2/checklist/7265/work",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_детализации_работы_из_чек-листа",
        route: "/v2/checklist/work/54452",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },
    {
        nameId: "получение_новостной_ленты_для_работы_из_чек-листа",
        route: "/v2/checklist/work/54452/feed",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    },  
    {   
        nameId: "начать_работу_с_чек-листом",
        route: "/v2/checklist/7265/start",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers                                                        
        }
    },
    {   
        nameId: "завершение_чек-листа",
        route: "/v2/checklist/7265/finish",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers                                                        
        }
    },
    {   
        nameId: "изменение_статуса_работы_указанной_в_чек-листе",
        route: "/v2/checklist/work/54452",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
                {
                    status: 3,
                    comment: "тест изменения статуса с комментарием"
                })                                                         
        }
    },
    {   
        nameId: "добавление_комментария_или_изображения_в_новостную_ленту_работы",
        route: "/v2/checklist/work/54452/feed",
        indexTableFieldsFromHtml: 2,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
                {
                    image_name: "some_test.jpg",
                    image_url: "https://ds24.ru/fs/static/2017/08/14/some_test.jpg"
                })                                                         
        }
    },
    {   
        nameId: "создание_настроек_фильтров",
        route: "/v2/request_filter",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "POST",
            headers: config.headers,
            body: JSON.stringify(
                {
                    filter_data: "{\"period_exec\":-1,\"street\":\"Агатовая ул\",\"city\":\"all\",\"is_only_my\":0,\"period\":\"all\",\"custom_order\":\"create\",\"group_obj_id\":\"notSel\",\"resp_ids\":[],\"emp_ids\": [],\"rtype_ids\":[],\"status_ids\":[],\"type_ids\":[],\"ess_ids\":[],\"tag_ids\":[],\"house_ids\":[],\"flat_ids\":[],\"sort\":\"D\",\"search_phone\":\"\",\"keywords\":\"\",\"request_id\":\"\",\"add_type\":\"notSel\",\"add_less_than\":0,\"add_more_than\":0,\"add_more_less_select\":\"more\"}",
                    note: "Тестовый фильтр"
                })                                                         
        }
    },
    {  
        nameId: "обновление_настроек_фильтров",
        route: "/v2/request_filter/1901",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "PUT",
            headers: config.headers,
            body: JSON.stringify(
            {
                note: "Тестовый фильтр"
            })      
        }
    },    
    {
        nameId: "получение_настроек_фильтров",
        route: "/v2/request_filter",
        indexTableFieldsFromHtml: 1,
        config: {
            method: "GET",
            headers: config.headers          
        }
    }  
]