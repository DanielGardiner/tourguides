/*
  Warnings:

  - The primary key for the `Tour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tour` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Tour_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "weight" SERIAL NOT NULL,
    "href" TEXT,
    "description" TEXT,
    "image" TEXT,
    "isFree" BOOLEAN NOT NULL DEFAULT false,
    "tourId" INTEGER NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
