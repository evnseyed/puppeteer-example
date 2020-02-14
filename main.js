const puppeteer = require('puppeteer');

async function main()
{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://translate.google.com/?hl=ru#view=home&op=translate&sl=en&tl=ru&text=Hello%20world`);
    const tranlateTag   = await page.$('.tlid-translation > span');
    const translateText = await (await tranlateTag.getProperty('textContent')).jsonValue();
    console.log(translateText);
}

main();