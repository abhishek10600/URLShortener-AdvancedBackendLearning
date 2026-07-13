-- CreateIndex
CREATE INDEX "short_urls_userId_createdAt_id_idx" ON "short_urls"("userId", "createdAt" DESC, "id" DESC);
