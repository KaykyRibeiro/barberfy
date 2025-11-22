-- CreateEnum
CREATE TYPE "StatusAssinatura" AS ENUM ('TRIAL', 'ATIVO', 'SUSPENSO', 'CANCELADO');

-- CreateTable
CREATE TABLE "barbershop" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "logo" VARCHAR(255),
    "address" VARCHAR(200) NOT NULL,
    "instagram" VARCHAR(100),
    "facebook" VARCHAR(100),
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "barbershop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barber" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,
    "password" TEXT NOT NULL,
    "profile" VARCHAR(255),
    "barbershopId" INTEGER NOT NULL,

    CONSTRAINT "barber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(60) NOT NULL,
    "phone" VARCHAR(15) NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL,
    "description" VARCHAR(255),
    "photo" VARCHAR(255),
    "barbershopId" INTEGER NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduling" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "time" TIME(0) NOT NULL,
    "duaration" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "barberId" INTEGER NOT NULL,
    "barbershopId" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "scheduling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scheduling_service" (
    "id" SERIAL NOT NULL,
    "schedulingId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL,

    CONSTRAINT "scheduling_service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "working_hours" (
    "id" SERIAL NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "openTime" TIME(0) NOT NULL,
    "closeTime" TIME(0) NOT NULL,
    "startLunch" TIME(0),
    "endLunch" TIME(0),
    "barbershopId" INTEGER NOT NULL,
    "lunch" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "working_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "closed_day" (
    "id" SERIAL NOT NULL,
    "date" DATE NOT NULL,
    "reason" VARCHAR(255),
    "barbershopId" INTEGER NOT NULL,

    CONSTRAINT "closed_day_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "push_token" (
    "id" SERIAL NOT NULL,
    "userType" VARCHAR(20) NOT NULL,
    "barberId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "barbershopId" INTEGER NOT NULL,
    "token" VARCHAR(255) NOT NULL,

    CONSTRAINT "push_token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barbershop_settings" (
    "id" SERIAL NOT NULL,
    "autoConfirm" BOOLEAN NOT NULL DEFAULT false,
    "reminderTime" INTEGER NOT NULL DEFAULT 60,
    "notifyClient" BOOLEAN NOT NULL DEFAULT true,
    "notifyBarber" BOOLEAN NOT NULL DEFAULT true,
    "barbershopId" INTEGER NOT NULL,

    CONSTRAINT "barbershop_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Signature" (
    "id" SERIAL NOT NULL,
    "barbershopId" INTEGER NOT NULL,
    "data_inicio_trial" TIMESTAMP(3) NOT NULL,
    "data_fim_trial" TIMESTAMP(3) NOT NULL,
    "status" "StatusAssinatura" NOT NULL DEFAULT 'TRIAL',

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "assinaturaId" INTEGER NOT NULL,
    "valor" DECIMAL(10,2) NOT NULL,
    "data_transacao" TIMESTAMP(3) NOT NULL,
    "status_transacao" TEXT NOT NULL,
    "gateway_ref_id" TEXT NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "barbershop_email_key" ON "barbershop"("email");

-- CreateIndex
CREATE UNIQUE INDEX "barber_phone_key" ON "barber"("phone");

-- AddForeignKey
ALTER TABLE "barber" ADD CONSTRAINT "barber_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling" ADD CONSTRAINT "scheduling_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling_service" ADD CONSTRAINT "scheduling_service_schedulingId_fkey" FOREIGN KEY ("schedulingId") REFERENCES "scheduling"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scheduling_service" ADD CONSTRAINT "scheduling_service_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "working_hours" ADD CONSTRAINT "working_hours_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "closed_day" ADD CONSTRAINT "closed_day_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "push_token" ADD CONSTRAINT "push_token_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES "barber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "push_token" ADD CONSTRAINT "push_token_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "push_token" ADD CONSTRAINT "push_token_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barbershop_settings" ADD CONSTRAINT "barbershop_settings_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signature" ADD CONSTRAINT "Signature_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "barbershop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_assinaturaId_fkey" FOREIGN KEY ("assinaturaId") REFERENCES "Signature"("id") ON DELETE CASCADE ON UPDATE CASCADE;
