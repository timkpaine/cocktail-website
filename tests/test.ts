import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Barrel Aged');
});

test('homepage retains its Tailwind styling', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('navigation')).toHaveCSS('background-color', 'rgb(0, 0, 0)');
	await expect(page.getByRole('heading', { level: 1 })).toHaveCSS('font-weight', '700');
	await expect(page.locator('body')).toHaveCSS('font-family', /Montserrat/);
});

test('cocktail button loads the prerendered cocktail page', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Other cocktails', exact: true }).click();
	await expect(page).toHaveURL('/cocktails');
	await expect(page.getByRole('heading', { name: "Homer's Old Fashioned" })).toBeVisible();
	await page.reload();
	await expect(page.getByRole('heading', { name: "Homer's Old Fashioned" })).toBeVisible();
});
