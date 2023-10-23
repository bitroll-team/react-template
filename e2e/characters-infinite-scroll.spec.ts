import { expect, test } from "@playwright/test";

test("infinite scroll", async ({ page }) => {
  await page.goto("/");

  const CARDS_SELECTOR = "li.character-card";
  const SKELETONS_SELECTOR = "div.character-card-skeleton";
  const CARDS_PER_PAGE = 20;
  const SKELETONS_PER_LOAD = 12;

  // Should show 20 skeleton cards before loading
  await page.waitForSelector(SKELETONS_SELECTOR);
  const skeletonCards = await page.$$(SKELETONS_SELECTOR);
  expect(skeletonCards.length).toBe(SKELETONS_PER_LOAD);

  // Should have 20 characters at the beginning after loading
  await page.waitForSelector(CARDS_SELECTOR);
  const initialCharacters = await page.$$(CARDS_SELECTOR);
  expect(initialCharacters.length).toBe(CARDS_PER_PAGE);

  // Scroll to bottom
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Should show the same amount of skeleton cards after scrolling
  await page.waitForSelector(SKELETONS_SELECTOR);
  const skeletonCardsAfterScroll = await page.$$(SKELETONS_SELECTOR);
  expect(skeletonCardsAfterScroll.length).toBe(SKELETONS_PER_LOAD);

  // Wait until the skeletons disappear
  await expect(page.locator(SKELETONS_SELECTOR)).toHaveCount(0);

  // Should have 40 characters after loading
  await page.waitForSelector(CARDS_SELECTOR);
  const charactersAfterScroll = await page.$$(CARDS_SELECTOR);
  expect(charactersAfterScroll.length).toBe(CARDS_PER_PAGE * 2);
});
