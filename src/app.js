const getDocumentFromHtmlWiki = require("./service/getDocumentFromHtmlWiki");
const getNameFields = require("./service/getNameFieldsFromTable");
const fetchApi = require("./service/fetchApi");
const routes = require("./wiki/routes");
const getNullDescriptionFromWiki = require("./service/getNullDescriptionFromWiki");
const getNullTypeFromWiki = require("./service/getNullTypeFromWiki");
const Compare = require("./service/compareField");
const ShowResult = require("./service/showResult");
const getDoubleField = require("./service/doubleField");
const config = require("../config/app.config");

async function getDiffWikiRoutes() {  
    //получаем window.document wiki       
    const document = await getDocumentFromHtmlWiki(config.urlDoka);

    //проходимся по всем роутам из вики
    for(map of routes){
        //получаем название полей из вики
        const fieldsFromWiki = getNameFields(document, map.nameId, map.indexTableFieldsFromHtml);
        //получаем список задвоенных полей
        const doubleFields = getDoubleField(fieldsFromWiki);        
        //получаем список полей, у которых не заполнено описание
        const nullDescriptions = getNullDescriptionFromWiki(fieldsFromWiki);
        //получаем список полей, у которых не заполнен тип
        const nullType = getNullTypeFromWiki(fieldsFromWiki);
        //делаем запрос к api и получаем ответ в виде json
        const responce = await fetchApi.request(config.baseUrlApi + map.route, map.config); 
        //получаем различия в типах данных
        const diffTypes = Compare.getDiffTypes(fieldsFromWiki, responce);
        //сравниваем поля, есть в ответе, но нет в вики  
        const existResponceNotWiki = Compare.existResponceNotWiki(responce, fieldsFromWiki);
        //сравниваем поля, есть в вики, но нет в ответе  
        const existWikiNotResponce = Compare.existWikiNotResponce(fieldsFromWiki, responce);

        //выводим результат сравнения типов
        ShowResult.showResultGetDiff(diffTypes, map);   
        //выводим результат поиска незаполненных типов
        ShowResult.showResultNullType(nullType, map);
        //выводим результат поиска незаполненных описаний
        ShowResult.showNullDescriptions(nullDescriptions, map);
        //выводим резальтат сранения есть в ответе нет в вики
        ShowResult.showExistResponceNotWiki(existResponceNotWiki, map);
        //выводим результат есть в вики нет в ответе
        ShowResult.showExistWikiNotResponce(existWikiNotResponce, map);
        //выводим результат задвоения полей
        ShowResult.showDoubleField(doubleFields, map);
    }
}

getDiffWikiRoutes();
