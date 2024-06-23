const puppeteer = require('puppeteer')

describe('Smoke Test', () => {
	it('Should load website', async function () {
		let browser = await puppeteer.launch({ headless: true })
		let page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.goto('https://practicesoftwaretesting.com/#/auth/login')
		await page.waitForSelector(`#email`)
		await browser.close()
	})
})
