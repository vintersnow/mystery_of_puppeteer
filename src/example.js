import puppeteer from 'puppeteer';

(async () => {
  try {

    const browser = await puppeteer.launch({
      headless: true,
      // https://peter.sh/experiments/chromium-command-line-switches/
      args: [
        '--font-render-hinting=none',
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--single-process',
      ]
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
  } catch (e) {
    console.error(e);
    process.exitCode = 1;
  }
})();
