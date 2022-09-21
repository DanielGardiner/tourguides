/*
  Warnings:

  - You are about to drop the column `href` on the `Step` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Step` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Step" DROP COLUMN "href",
DROP COLUMN "image",
ADD COLUMN     "audioLink" TEXT,
ADD COLUMN     "imageLink" TEXT;
