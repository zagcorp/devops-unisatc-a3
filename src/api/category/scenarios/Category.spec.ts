import { expect, test } from "@playwright/test";

test("Criação de nova Categoria", async ({ page }) => {
    await page.goto("http://localhost:1337/admin");

    await page.fill('input[name="email"]', "admin@satc.edu.br");
    await page.fill('input[name="password"]', "welcomeToStrapi123");
    await page.click('button[type="submit"]');

    await page.waitForSelector('a[aria-label="Content Manager"]');

    await page.getByRole('link', { name: 'Content Manager' }).click();

    await page.waitForSelector('text=Categoria');
    await page.click('text=Categoria');

    await page.waitForSelector('text=Create new entry');
    await page.click('text=Create new entry');

    await page.getByLabel("Nome").fill("Playwroblas");
    await page.getByLabel("Descrição").fill("Descrição temporaria Playwright");
    await page.getByLabel("Slug").fill("categoria-teste-playwright");

    await page.click("text=Save");

});