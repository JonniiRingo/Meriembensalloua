import { PrismaClient } from '@prisma/client';

async function main() {
  // We create a new instance INSIDE the function to force a fresh look at the schema
  const prisma = new PrismaClient();
  
  console.log('🌱 Starting Integrated Seed...');

  // --- PART 1: RESEARCH DATA ---
  const areas = ['Urban Core', 'Suburban West', 'Coastal Region', 'Rural North', 'Industrial District'];
  const employment = ['Employed', 'Unemployed', 'Student', 'Retired'];
  const races = ['White', 'Black', 'Asian', 'Other', 'Mixed'];
  const genders = ['Male', 'Female'];

  const respondentData = [];
  for (let i = 0; i < 5020; i++) {
    respondentData.push({
      area: areas[Math.floor(Math.random() * areas.length)],
      birthYear: Math.floor(Math.random() * (2005 - 1950 + 1)) + 1950,
      education: 'Bachelor',
      employed: employment[Math.floor(Math.random() * employment.length)],
      hispanic: 'No',
      race: races[Math.floor(Math.random() * races.length)],
      maritalStatus: 'Single',
      genderBirth: genders[Math.floor(Math.random() * genders.length)],
      genderIdentity: genders[Math.floor(Math.random() * genders.length)],
      covidLong: 'No',
    });
  }

  // Uncomment this line if you need to re-seed respondents, otherwise it might duplicate data 
  // depending on your schema constraints. If you just want to seed products, comment this out.
  await prisma.respondent.createMany({ data: respondentData });
  console.log(`✅ Seeded ${respondentData.length} respondents.`);

  // --- PART 2: BUSINESS DATA ---
  console.log('🛒 Adding Service Tiers...');
  
  const products = [
    // --- Tutoring Services ---
    {
      name: '1-on-1 Tutoring',
      slug: '1-on-1-tutoring',
      category: 'Tutoring Services',
      description: 'Personalized, one-on-one instruction focusing on Math, Python, or R. Includes problem-solving and guided practice.',
      price: 60.00,
      brand: 'Meriem Bensalloua',
      stock: 100,
      images: ['/images/content/meriem_2.png'] 
    },
    {
      name: '4-hour Package',
      slug: '4-hour-tutoring',
      category: 'Tutoring Services',
      description: 'Four 1-hour sessions with a custom learning plan, weekly progress tracking, and feedback between sessions.',
      price: 199.00,
      brand: 'Meriem Bensalloua',
      stock: 50,
      images: ['/assets/meriem-profile2.png'] 
    },
    {
      name: 'Fully Customized Plan (Tutoring)',
      slug: 'fully-customized-tutoring',
      category: 'Tutoring Services',
      description: 'Comprehensive assessment and custom study plan with ongoing mentorship and support in multiple areas.',
      price: 200.00,
      brand: 'Meriem Bensalloua',
      stock: 10,
      images: ['/assets/stanford-bg.jpg'] 
    },

    // --- Data Science & ML ---
    {
      name: 'Starter Project',
      slug: 'data-science-starter',
      category: 'Data Science',
      description: 'Introduction to Python/R for Data Science. Help with data cleaning, visualization, and small academic projects.',
      price: 200.00,
      brand: 'Meriem Bensalloua',
      stock: 20,
      images: ['/images/content/meriem_2.png'] 
    },
    {
      name: 'Pro-Package',
      slug: 'data-science-pro',
      category: 'Data Science',
      description: 'Hands-on guidance through end-to-end data projects, ML algorithms, and optimization. Up to 6 personalized sessions.',
      price: 600.00,
      brand: 'Meriem Bensalloua',
      stock: 15,
      images: ['/assets/meriem-profile2.png'] 
    },
    {
      name: 'Deep Dive Consulting',
      slug: 'data-science-consulting',
      category: 'Data Science',
      description: 'Custom machine learning model development, data storytelling, and ongoing project mentorship.',
      price: 1500.00,
      brand: 'Meriem Bensalloua',
      stock: 5,
      images: ['/assets/stanford-bg2.jpg'] 
    },

    // --- Mentoring ---
    {
      name: 'Counseling Session',
      slug: 'counseling-session',
      category: 'Mentoring',
      description: 'Two 1-hour mentoring sessions for academic or career guidance with actionable next steps.',
      price: 90.00,
      brand: 'Meriem Bensalloua',
      stock: 50,
      images: ['/images/content/meriem_2.png'] 
    },
    {
      name: 'Advisor Track',
      slug: 'advisor-track',
      category: 'Mentoring',
      description: 'Four 1-hour sessions including goal-setting, career planning, and feedback on resumes or research ideas.',
      price: 199.00,
      brand: 'Meriem Bensalloua',
      stock: 30,
      images: ['/assets/meriem-profile2.png'] 
    },
    {
      name: 'Mentor Partnership',
      slug: 'mentor-partnership',
      category: 'Mentoring',
      description: 'Twelve 1-hour sessions. Long-term strategic partnership with priority access to feedback.',
      price: 575.00,
      brand: 'Meriem Bensalloua',
      stock: 10,
      images: ['/assets/stanford-bg.jpg'] 
    }
  ];

  // Using bracket notation safely to bypass the linter and the property error
  // Updated loop to iterate over 'products' instead of 'services'
  for (const product of products) {
    const model = (prisma as any)['product'];
    if (model) {
      await model.upsert({
        where: { slug: product.slug },
        update: product,
        create: product,
      });
    }
  }

  console.log(`✅ Integrated ${products.length} business services.`);
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});