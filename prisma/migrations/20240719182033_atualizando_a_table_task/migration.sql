/*
  Warnings:

  - You are about to alter the column `description` on the `Tasks` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - Made the column `title` on table `Tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `done` on table `Tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Tasks` MODIFY `title` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `done` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `updatedAt` DATETIME(3) NOT NULL;
