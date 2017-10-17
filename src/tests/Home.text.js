import nightmare from 'nightmare'

const visit = path => {
  return nightmare().goto('http://localhost:3000/' + path)
}

describe('Home Page', () => {
  it('containes "RCenter"', async () => {
    const page = visit('/')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContaine('RCenter')
  })

  it('shows 6 cards', async () => {
    const page = visit('/')
    const selector = '.container .col.s12.m4'
    const cardCount = await page
      .wait(selector)
      .evaluate(sel => document.querySelector(sel).length, selector)
      .end()

    expect(cardCount).toEqual(6)
  })
})
