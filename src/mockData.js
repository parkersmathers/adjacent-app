import faker from 'faker'

export function getData() {
  function createData(n) {
    let data = []
    for (let i = 0; i < n; i++) {
      data.push({
        companyName: faker.company.companyName(),
        companyLocation: faker.address.city(),
        companyWebsite: faker.internet.url(),
        contactName: faker.name.findName(),
        contactJobTitle: faker.name.jobTitle(),
        contactPhone: faker.phone.phoneNumberFormat(),
        contactEmail: faker.internet.email(),
        companySize: faker.random.arrayElement(['1-10', '11-50', '51-250', '251-1000', '1001-5000', '5000+']),
        companyMarket: faker.random.arrayElement(['IoT', 'Agriculture', 'Pet Supplies', 'Automotive', 'Fashion', 'Manufacturing', 'B2B', 'Financial Services', 'Aviation', 'Space Tourism', 'Education', 'GreenT', 'Landscape Design', 'Architecture']),
        companyFunding: faker.random.arrayElement(['100,000', '600,000', '5,500,000', '87,000,000', '3,000,000,003']),
        companyTrackingStatus: faker.random.arrayElement(['researching', 'pending approval', 'approved', 'declined']),
        companyId: faker.random.uuid()
      })
    }
    return data
  }
  return createData(1)
}