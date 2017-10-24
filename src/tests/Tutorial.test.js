import { visit } from './Utils.test'

describe('Tutorial page', () => {
  it('loads in /tutorial', async () => {
    const page = visit('/tutorial')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).not.toContain('Page not found')
  })

  it('has a video', async () => {
    const page = visit('/tutorial')
    const videoSelector = 'iframe'
    const hasVideo = await page.exists(videoSelector).end()

    expect(hasVideo).toEqual(true)
  })

  it('mentions contacting JW', async () => {
    const page = visit('/tutorial')
    const text = await page.evaluate(() => document.body.textContent).end()

    expect(text).toContain('please contact JW')
  })
})
