class FetchApi{
    static async request(url, config) {       
        const data = await fetch(url, config);    
        return await data.json();
    }
}

module.exports = FetchApi;