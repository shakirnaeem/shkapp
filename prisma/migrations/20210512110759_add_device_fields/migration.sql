/*
  Warnings:

  - Added the required column `brandUniqueId` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brandName` to the `Device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeleted` to the `Device` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Device" (
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
    "brandUniqueId" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL,
    "brandId" INTEGER NOT NULL,
    FOREIGN KEY ("brandId") REFERENCES "Brand" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Device" ("id", "name", "uniqueId", "image", "description", "position", "price", "RAM", "network", "externalModel1", "externalModel2", "isLatest", "brandId") SELECT "id", "name", "uniqueId", "image", "description", "position", "price", "RAM", "network", "externalModel1", "externalModel2", "isLatest", "brandId" FROM "Device";
DROP TABLE "Device";
ALTER TABLE "new_Device" RENAME TO "Device";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
