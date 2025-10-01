import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...')

  const barbershop = await prisma.barbershop.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      name: 'Barbearia Teste',
      email: 'barbearia@teste.com',
      phone: '(11) 99999-9999',
      logo: '',
      address: 'Rua dos Bobos, 123',
      instagram: '',
      facebook: '',
      password: '123456',
    },
  })

  console.log(`✅ Barbearia criada: ${barbershop.name}`)
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
