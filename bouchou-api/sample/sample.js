const puppeteer = require('puppeteer');
let page;

async function getBrowserPage() {
    // Launch headless Chrome. Turn off sandbox so Chrome can run under root.
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    return browser.newPage();
}

exports.getTrends = async (req, res) => {

    if (!page) {
        page = await getBrowserPage();
    }

    await page.goto('https://qiita.com');

    const result = await page.evaluate(getTrendsJson);

    res.set('Content-Type', 'application/json');
    res.send(result);
};

function getTrendsJson() {
    return [...document.querySelectorAll('.tr-Item_body')].map(article => {
        const a = article.querySelector('a');
    const href = a.href;
    const title = a.textContent;

    const author = article.querySelector('.tr-Item_author').textContent;
    const time = article.querySelector('time').textContent;
    const like = article.querySelector('.tr-Item_likeCount').textContent;
    console.log(href, title, author, time, like);

    return {href, title, author, time, like};
});
}

// https://qiita.com/howdy39/items/2f355fea8340a35aa5da