const puppeteer = require('puppeteer')

describe('End to End Test', () => {
	let browser, page

	before(async function () {
		browser = await puppeteer.launch({ headless: true })
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
	})

	after(async function () {
		await browser.close()
	})

	it('Should able to Login Successfully', async function () {
		await page.goto('https://practicesoftwaretesting.com/#/auth/login')
		await page.waitForSelector(`#email`)
		await page.waitForSelector(`#password`)
		await page.type(`#email`, `admin@practicesoftwaretesting.com`)
		await page.type(`#password`, `welcome01`)
		await page.click(`input[value='Login']`)
	})
})
