-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "uniqueId" TEXT,
    "uniqueId2" TEXT,
    "position" INTEGER NOT NULL,
    "isPopular" BOOLEAN NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "uniqueId" TEXT,
    "image" TEXT,
    "description" TEXT,
    "position" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "RAM" TEXT,
    "network" TEXT,
    "externalModel1" TEXT,
    "externalModel2" TEXT,
    "isLatest" BOOLEAN NOT NULL,
    "brandUniqueId" TEXT,
    "brandName" TEXT,
    "isDeleted" BOOLEAN NOT NULL,
    "brandId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
