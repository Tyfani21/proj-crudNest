-- CreateTable
CREATE TABLE "User" (
    "usarname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("usarname")
);
