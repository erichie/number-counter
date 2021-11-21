-- CreateTable
CREATE TABLE "Number" (
    "number" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Number_number_key" ON "Number"("number");
