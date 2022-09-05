/*
  Warnings:

  - Made the column `description_short` on table `Tour` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tour" ALTER COLUMN "description_short" SET NOT NULL;
