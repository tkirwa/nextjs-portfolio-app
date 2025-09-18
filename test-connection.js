// test-connection.js
import { prisma } from "@/lib/prisma";


async function testConnection() {
  try {
    await prisma.$connect();
    console.log('✅ Successfully connected to MySQL database');
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log('✅ Database query successful');
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();