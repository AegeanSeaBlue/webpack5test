const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:8085/report/r_ada15-aqc2et0f-gm4o2b/21ade2dc91272a9477e1033a5dec2e8b');
  setTimeout(() => {
    page.screenshot({
      path: './share' + Date.now() + '.png',
      fullPage: true
    }).then((res) => {
      console.log(res.length / 1024);
    });
  }, 1500);
})();