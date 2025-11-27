-- CreateTable
CREATE TABLE "Step" (
    "id" SERIAL NOT NULL,
    "services_done" BOOLEAN NOT NULL DEFAULT false,
    "schedule_done" BOOLEAN NOT NULL DEFAULT false,
    "barbers_done" BOOLEAN NOT NULL DEFAULT false,
    "finished" BOOLEAN NOT NULL DEFAULT false,
    "barbershopId" INTEGER NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;
