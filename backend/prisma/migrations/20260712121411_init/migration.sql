-- DropIndex
DROP INDEX "click_analytics_clickedAt_idx";

-- DropIndex
DROP INDEX "click_analytics_shortUrlId_idx";

-- CreateIndex
CREATE INDEX "click_analytics_shortUrlId_clickedAt_idx" ON "click_analytics"("shortUrlId", "clickedAt");
