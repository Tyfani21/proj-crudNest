/*
  Warnings:

  - You are about to drop the `Movies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Movies";

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "length" TIMESTAMP(3) NOT NULL,
    "storyline" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
