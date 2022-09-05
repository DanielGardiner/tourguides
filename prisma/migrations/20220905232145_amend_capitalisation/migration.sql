/*
  Warnings:

  - You are about to drop the column `description_short` on the `Tour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tour" DROP COLUMN "description_short",
ADD COLUMN     "descriptionShort" TEXT;
