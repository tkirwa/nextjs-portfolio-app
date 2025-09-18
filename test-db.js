// test-db.js
// const { PrismaClient } = require('@prisma/client');
import { prisma } from "@/lib/prisma";


async function testConnection() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🔄 Attempting to connect to database...');
    await prisma.$connect();
    console.log('✅ Successfully connected to database!');
    
    // Test a simple query
    console.log('🔄 Testing database query...');
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Database query successful:', result);
    
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    if (error.code === 'P1001') {
      console.log('🔍 This indicates the database server is unreachable');
    } else if (error.code === 'P1017') {
      console.log('🔍 This indicates authentication failed');
    }
    
  } finally {
    await prisma.$disconnect();
    console.log('🔌 Database connection closed');
  }
}

testConnection();