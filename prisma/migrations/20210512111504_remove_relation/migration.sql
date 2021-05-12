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
    "RAM" TEXT,
    "network" TEXT,
    "externalModel1" TEXT,
    "externalModel2" TEXT,
    "isLatest" BOOLEAN NOT NULL,
    "brandUniqueId" TEXT,
    "brandName" TEXT,
    "isDeleted" BOOLEAN NOT NULL,
    "brandId" INTEGER NOT NULL
);
INSERT INTO "new_Device" ("id", "name", "uniqueId", "image", "description", "position", "price", "RAM", "network", "externalModel1", "externalModel2", "isLatest", "brandUniqueId", "brandName", "isDeleted", "brandId") SELECT "id", "name", "uniqueId", "image", "description", "position", "price", "RAM", "network", "externalModel1", "externalModel2", "isLatest", "brandUniqueId", "brandName", "isDeleted", "brandId" FROM "Device";
DROP TABLE "Device";
ALTER TABLE "new_Device" RENAME TO "Device";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
