-- DropIndex
DROP INDEX "click_analytics_shortUrlId_clickedAt_idx";

-- CreateIndex
CREATE INDEX "click_analytics_shortUrlId_clickedAt_id_idx" ON "click_analytics"("shortUrlId", "clickedAt" DESC, "id" DESC);
