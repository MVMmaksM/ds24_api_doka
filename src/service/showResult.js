class ShowResult {
    
    static showResultGetDiff(diffTypes, map){
        if(diffTypes?.length != 0){
            console.log("--------------------------------------------------------");
            console.log(map.nameId);
            console.log(`Роут: ${map.config.method + " " + map.route}\nНе совпадает тип полей:`);

            for(let res of diffTypes){
                console.log(res.resultCompareTypes);
            }
            console.log("--------------------------------------------------------");
        }
    }

    static showResultNullType(nullType, map){
        if(nullType.length != 0){
            console.log("--------------------------------------------------------");
            console.log(map.nameId);
            console.log(`Роут: ${map.config.method + " " + map.route}\nНе заполнен тип полей:`);

            for(let res of nullType){
                console.log(res.fieldName);
            }
            console.log("--------------------------------------------------------");
        }
    }

    static showNullDescriptions(nullDescriptions, map){
        if(nullDescriptions.length != 0){
            console.log("--------------------------------------------------------");
            console.log(map.nameId);
            console.log(`Роут: ${map.config.method + " " + map.route}\nНет описания полей в вики:`);

            for(let res of nullDescriptions){
                console.log(res.fieldName);
            }
            console.log("--------------------------------------------------------");
        }
    }

    static showExistResponceNotWiki(existResponceNotWiki, map){
        if(existResponceNotWiki.length != 0){
            console.log("--------------------------------------------------------");
            console.log(map.nameId);
            console.log(`Роут: ${map.config.method + " " + map.route}\nЕсть поля в ответе, но нет в вики:`);

            for(let res of existResponceNotWiki){
                console.log(res);
            }
            console.log("--------------------------------------------------------");
        }
    }

    static showExistWikiNotResponce(existWikiNotResponce, map){
        if(existWikiNotResponce.length != 0){
            console.log("--------------------------------------------------------");
            console.log(map.nameId);
            console.log(`Роут: ${map.config.method + " " + map.route}\nЕсть поля в вики, но нет в ответе:`);

            for(let res of existWikiNotResponce){
                console.log(res.fieldName);
            }
            console.log("--------------------------------------------------------");
        }
    }

    static showDoubleField(doubleFields, map){
        if(doubleFields.length != 0){
            console.log("--------------------------------------------------------");
            console.log(map.nameId);
            console.log(`Роут: ${map.config.method + " " + map.route}\nЗадвоение полей:`);

            for(let field of doubleFields){
                console.log(field);
            }
            console.log("--------------------------------------------------------");
        }
    }
}

module.exports = ShowResult;