import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});

test('clicking a link', async ({ page }) => {
    await page.goto('https://example.com');
    await page.click('text=More information...');
    expect(page.url()).toContain('iana.org');
});