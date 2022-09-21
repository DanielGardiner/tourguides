/*
  Warnings:

  - A unique constraint covering the columns `[weight,tourId]` on the table `Step` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Step_weight_tourId_key" ON "Step"("weight", "tourId");
