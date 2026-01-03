import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  await prisma.respondent.deleteMany();

  const areas = ['Urban Core', 'Suburban West', 'Coastal Region', 'Rural North', 'Industrial District'];
  const employment = ['Employed', 'Unemployed', 'Student', 'Retired'];
  const races = ['White', 'Black', 'Asian', 'Other', 'Mixed'];
  const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed'];
  const genders = ['Male', 'Female'];
  const hispanicOptions = ['Yes', 'No'];
  const covidOptions = ['Yes', 'No']; // Added for analysis

  const data = [];

  for (let i = 0; i < 5020; i++) {
    data.push({
      area: areas[Math.floor(Math.random() * areas.length)],
      birthYear: Math.floor(Math.random() * (2005 - 1950 + 1)) + 1950,
      education: 'Bachelor',
      employed: employment[Math.floor(Math.random() * employment.length)],
      hispanic: hispanicOptions[Math.floor(Math.random() * hispanicOptions.length)],
      race: races[Math.floor(Math.random() * races.length)],
      maritalStatus: maritalStatuses[Math.floor(Math.random() * maritalStatuses.length)],
      genderBirth: genders[Math.floor(Math.random() * genders.length)],
      
      // ✅ ADDED FOR DASHBOARD ANALYSIS
      genderIdentity: genders[Math.floor(Math.random() * genders.length)],
      covidLong: covidOptions[Math.floor(Math.random() * covidOptions.length)],
    });
  }

  await prisma.respondent.createMany({ data });
  console.log(`✅ Seeded ${data.length} respondents.`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });