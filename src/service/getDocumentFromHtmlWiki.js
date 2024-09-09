const jsdom = require("jsdom");
const { JSDOM } = jsdom;

async function getDocumentFromHtmlWiki (url) {
    const page = await fetch(url);
    const html = await page.text();
    const dom = new JSDOM(html);
    return dom.window.document   
}

module.exports = getDocumentFromHtmlWiki;