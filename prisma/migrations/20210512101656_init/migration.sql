-- CreateTable
CREATE TABLE "Brand" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "uniqueId" TEXT,
    "uniqueId2" TEXT,
    "position" INTEGER NOT NULL,
    "isPopular" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Device" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "uniqueId" TEXT,
    "image" TEXT,
    "description" TEXT,
    "position" INTEGER NOT NULL,
    "price" DECIMAL NOT NULL,
    "RAM" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "externalModel1" TEXT NOT NULL,
    "externalModel2" TEXT NOT NULL,
    "isLatest" BOOLEAN NOT NULL,
    "brandId" INTEGER NOT NULL,
    FOREIGN KEY ("brandId") REFERENCES "Brand" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
