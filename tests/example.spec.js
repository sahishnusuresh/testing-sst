// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('alltests',()=>{
  test('checking guide',async({page})=>{
    await page.goto('https://sst.dev/guide.html')
    // const locator=await page.evaluate(()=>{
    //   return Array.from(document.links).filter(item=>item.href="/guide.html")
    // })
    // const guide1=page.locator('a')
    // const guide2=guide1.filter(item=>item.hasText=='/guide.html')
    await page.click('text=Guide')
    const locator=page.getByPlaceholder('Search SST')
    await locator.fill('examples')
    })
})