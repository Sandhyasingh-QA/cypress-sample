export function generateRandomPhoneNumber() {
    const areaCode = Math.floor(Math.random() * 900) + 100; 
    const exchangeCode = Math.floor(Math.random() * 900) + 100; 
    const lineNumber = Math.floor(Math.random() * 9000) + 1000; 
    return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
  }

export function generateRandomGoodHumanFirstName() {
  const firstNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'James', 'Isabella', 'Benjamin'];

  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
  const randomFirstName = firstNames[randomFirstNameIndex];

  return randomFirstName;
}

export function generateRandomGoodHumanLastName() {
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas'];

  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
  const randomLastName = lastNames[randomLastNameIndex];

  return randomLastName;
}

export function generateOrganizationName() {
  const adjectives = ["Green", "Evergreen", "Emerald", "Verdant", "Sylvan", "Vibrant", "Lush", "Leafy"];
  const nouns = ["Innovations", "Solutions", "Enterprises", "Technologies", "Industries", "Ventures", "Group", "Corp"];

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  const organizationName = adjective + " " + noun;
  return organizationName;
}

export function inputRandomOrganizationName() {
  const organizationName = generateRandomString(10); // Generate a random string of length 10

  cy.get('#organization-name-input') // Assuming the input field has the ID 'organization-name-input'
    .type(organizationName) // Type the random organization name into the input field
    .blur(); // Trigger a blur event to indicate that the input has been completed
}

// function generateRandomString(length) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let randomString = '';

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     randomString += characters.charAt(randomIndex);
//   }

//   return randomString;
// }


export function generateRandomAddress() {
  const houseNumbers = ['123', '456', '789', '10', '21'];
  const streetNames = ['Main Street', 'First Avenue', 'Oak Road', 'Maple Lane', 'Cedar Avenue'];
  const cities = ['New York', 'Los Angeles', 'London', 'Paris', 'Sydney'];

  const randomHouseNumberIndex = Math.floor(Math.random() * houseNumbers.length);
  const randomStreetNameIndex = Math.floor(Math.random() * streetNames.length);
  const randomCityIndex = Math.floor(Math.random() * cities.length);

  const randomHouseNumber = houseNumbers[randomHouseNumberIndex];
  const randomStreetName = streetNames[randomStreetNameIndex];
  const randomCity = cities[randomCityIndex];

  return `${randomHouseNumber} ${randomStreetName}, ${randomCity}`;
}
export function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 8); 
  const domain = 'example.com'; 

  return `${randomString}@${domain}`;
}

