/*
  Warnings:

  - You are about to drop the column `test` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "description_short" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "test";
