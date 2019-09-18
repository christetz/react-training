describe('End to End - Demo App', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:1234');
  });

  it('Page1 should be titled "Demo App"', async () => {
    await expect(page.title()).resolves.toContain('Demo App');
  });
});
