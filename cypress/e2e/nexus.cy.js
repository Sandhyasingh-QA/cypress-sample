
function generateRandomGoodHumanFirstName() {
  const firstNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William', 'Sophia', 'James', 'Isabella', 'Benjamin'];

  const randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
  const randomFirstName = firstNames[randomFirstNameIndex];

  return randomFirstName;
}
function generateRandomGoodHumanLastName() {
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas'];

  const randomLastNameIndex = Math.floor(Math.random() * lastNames.length);
  const randomLastName = lastNames[randomLastNameIndex];

  return randomLastName;
}
function generateRandomOrganizationName() {

  const organizationNames = [];
  const adjectives = ['Wisconsin', 'Chicago', 'FloraBlu', 'Lanier', 'Davis'];
  const nouns = ['Company', 'Corporation', 'Enterprise', 'Organization', 'Inc'];

  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const randomNounIndex = Math.floor(Math.random() * nouns.length);

  const randomAdjective = adjectives[randomAdjectiveIndex];
  const randomNoun = nouns[randomNounIndex];

  let organizationName = `${randomAdjective} ${randomNoun}`;

  while (organizationNames.includes(organizationName)) {
    organizationName = getRandomName();
  }
  organizationNames.push(organizationName);

  return organizationName;
}
function generateRandomAddress() {
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
function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(2, 8); 
  const domain = 'example.com'; 

  return `${randomString}@${domain}`;
}

function checkOrganizationName( orgName){
  if(orgName == ''){
      return false;
  }
      return true;
}

function generateRandomPhoneNumber() {
  const areaCode = Math.floor(Math.random() * 900) + 100; 
  const exchangeCode = Math.floor(Math.random() * 900) + 100; 
  const lineNumber = Math.floor(Math.random() * 9000) + 1000; 
  return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
}


describe('template spec', () => {
    it('passes', () => {
      cy.viewport(1200,800)
      cy.visit('https://nexus-dev-admin.exitest.com/login')

      cy.get('input[name="email"]').type('arana@ex2india.com')
      cy.get('input[name="password"]').type('coolAdmin05@')
      cy.get('button[type="submit"]').click()

      cy.wait(5000) 


     //Hierarchy levels
      cy.contains('Dashboard').click()
      cy.wait(2000)


      //Create Owner
      //.//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]
      cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(0).click()
      cy.wait(6000) 
      cy.contains('button', 'Add Owner').click()
      cy.get('input[name="orgName"]').type(generateRandomOrganizationName(10))
      cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
      cy.get('input[name="orgAddress"]').type(generateRandomAddress())
      //cy.get('input[name="orgIndustry"]').click()

      cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()  //click on industry (doubt)
      cy.xpath('//*[@id="menu-orgIndustry"]/div[3]/ul/li[1]').click()
     // cy.contains('button','Marketing Company').click()
      cy.contains('button', 'Next').click()

      cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
      cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
      cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
      cy.get('input[name ="email"]').type(generateRandomEmail())
      cy.contains('button', 'Add New').click()
    
      cy.wait(7000) 
      //cy.get('.MuiDialogContentText-root > .MuiButtonBase-root').click()  //okay
      cy.contains('button','Okay').click()
      
      cy.wait(8000) 
    
  

      //Create Group Manager
      cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(1).click()
      cy.wait(4000) 
      cy.contains('button', 'Add Group Manager').click()
      cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click() //doubt 
      cy.contains('Apple').click()
      cy.get('input[name="orgName"]').type(generateRandomOrganizationName(10))
      cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
      cy.get('input[name="orgAddress"]').type(generateRandomAddress())
      //cy.get('input[name="orgIndustry"]').click()

      cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()  //doubt
      cy.xpath('//*[@id="menu-orgIndustry"]/div[3]/ul/li[1]').click()  //
      //cy.contains('button', 'Real Estate Organizations').click()
      cy.contains('button', 'Next').click()

        cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
        cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
        cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
        cy.get('input[name ="email"]').type(generateRandomEmail())
        cy.contains('button', 'Add New').click()
      
      cy.contains('button','Okay').click()
     // cy.get('.text-right > .MuiButton-contained').click()
      
      
      cy.wait(8000)

    // Create CM
       cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(2).click()
       cy.wait(4000) 
       cy.contains('button', 'Add Campaign Manager').click()
       cy.contains('button', 'Next').click()

      if
        (cy.get(' .Mui-error').contains('Please select a group manager'))

      {
        cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click()
        cy.contains('Nexus').click()
        cy.contains('button', 'Next').click()
      }
      if(cy.get('.Mui-error').contains('Please enter the organization name'))
      {
        cy.get('input[name="orgName"]').type(generateRandomOrganizationName(10))
      }
       if(cy.get('.Mui-error').contains('Please enter the phone number'))
       {
        cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber())
       }
       
       if(cy.get('.Mui-error').contains('Please enter the address'))
       {
        cy.get('input[name="orgAddress"]').type(generateRandomAddress())
       }
       cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
       cy.xpath('//*[@id="menu-orgIndustry"]/div[3]/ul/li[1]').click()

       cy.contains('button', 'Next').click()

       cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
       cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
       cy.get('input[name ="phone"]').type(generateRandomPhoneNumber())
       cy.get('input[name ="email"]').type(generateRandomEmail(10))
       cy.contains('button', 'Add New').click()
       cy.wait(3000)

       cy.contains('button','Okay').click()
       cy.wait(5000)
    //Create Campaign
      cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(3).click()
      cy.wait(3000)
      cy.contains('button', 'Add Campaign').click()
      cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click()
      cy.contains('Zillow Homes').click()
      
      cy.get('input[name="orgName"]').type(generateRandomOrganizationName(10))
      cy.get('input[name="orgPhoneNumber"]').type(generateRandomPhoneNumber(10))
      cy.get('input[name="orgAddress"]').type(generateRandomAddress())
      cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
      cy.xpath('//*[@id="menu-orgIndustry"]/div[3]/ul/li[1]').click()
      cy.contains('button', 'Next').click()

      cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
      cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
      cy.get('input[name ="phone"]').type(generateRandomPhoneNumber(10))
      cy.get('input[name ="email"]').type(generateRandomEmail())
      cy.contains('button', 'Add New').click()

      cy.contains('button','Okay').click()
      cy.wait(3000)
  
//       //Create Agent

      cy.xpath(".//div[contains(@class,'MuiCollapse-entered')]//span[contains(@class,'MuiListItemText-primary')]").eq(4).click()
      cy.wait(3000)
      cy.contains('button', 'Add Agent').click()
      cy.xpath('//*[@id="mui-component-select-associatedCampaign"]').click()
      cy.contains('Meeveo Group').click()
      cy.get('input[name ="firstName"]').type(generateRandomGoodHumanFirstName(10))
      cy.get('input[name ="lastName"]').type(generateRandomGoodHumanLastName(10))
      cy.get('input[name ="phone"]').type(generateRandomPhoneNumber())
      cy.get('input[name ="email"]').type(generateRandomEmail(10))
      cy.contains('button', 'Add New').click()

      cy.contains('button','Okay').click()

    })
    
  })
