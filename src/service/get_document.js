import jsdom from "jsdom";
const { JSDOM } = jsdom;

const get_document = async(url) =>{
    const page = await fetch(url);
    const html = await page.text();
    const dom = new JSDOM(html);
    return dom.window.document   
}

export default get_document;