import { visit } from './Utils.test'

describe('Letterhead page', () => {
  it('loads in /letterhead', async () => {
    const page = visit('/letterhead')
    await page.end()
  })

  it('has 4 cards', async () => {
    const page = visit('/letterhead')
    const letterheadCardCount = await page
      .evaluate(() => document, querySelectorAll('.letterhead-card').length)
      .end()
    expect(letterheadCardCount).toEqual(4)
  })

  it('has 4 images', async () => {
    const page = visit('/letterhead')
    const selector = '.letterhead-card img'
    const letterheadCardCount = await page
      .evaluate(sel => document, querySelectorAll(sel).length)
      .end()
    expect(letterheadCardCount).toEqual(4)
  })

  it('has 1 button', async () => {
    const page = visit('/letterhead')
    const buttonVis = await page.visible('.letterhead-card button').end()
    expect(buttonVis).toEqual(true)
  })
})
