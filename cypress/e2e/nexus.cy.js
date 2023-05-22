
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
  const adjectives = ['Awesome', 'Fantastic', 'Incredible', 'Amazing', 'Superb'];
  const nouns = ['Company', 'Corporation', 'Enterprise', 'Organization', 'Inc'];

  const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
  const randomNounIndex = Math.floor(Math.random() * nouns.length);

  const randomAdjective = adjectives[randomAdjectiveIndex];
  const randomNoun = nouns[randomNounIndex];

  return `${randomAdjective} ${randomNoun}`;
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
      cy.xpath('//*[@id="__next"]/main/section/div/form/div[1]/div/div/input').type('arana@ex2india.com')
      cy.xpath('//*[@id="__next"]/main/section/div/form/div[2]/div/div/input').type('coolAdmin05@')
      cy.xpath('//*[@id="__next"]/main/section/div/form/button').click()
      cy.wait(5000) 
      cy.xpath('//*[@id="__next"]/main/div/div/nav/div[1]/div[2]/span').click()
        

      //Create Owner
      cy.xpath('//*[@id="__next"]/main/div/div/nav/div[2]/div/div/div/div[1]/div/span').click()
      cy.wait(5000) 
      cy.xpath('//*[@id="__next"]/main/main/section/div[1]/div[2]/button').click() // add owner
      cy.xpath('//*[@id="panel1a-content"]/div/div/div[1]/div/input').type(generateRandomOrganizationName(10))
      cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div/input').type(generateRandomPhoneNumber(10))
      cy.xpath('//*[@id="panel1a-content"]/div/div/div[3]/div/input').type(generateRandomAddress())
      cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
      cy.get('#menu-orgIndustry > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/p/form/div[3]/button').click()
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[1]/div/input').type(generateRandomGoodHumanFirstName(10))
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[2]/div/input').type(generateRandomGoodHumanLastName(10))
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[3]/div/input').type(generateRandomPhoneNumber(10))
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[5]/div/input').type(generateRandomEmail())
      cy.get('.text-right > .MuiButton-contained').click()
    
      cy.wait(7000) 
      cy.get('.MuiDialogContentText-root > .MuiButtonBase-root').click()  //okay
       
      cy.wait(8000) 
    
  

      //Create Group Manager
      cy.xpath('//*[@id="__next"]/main/div/div/nav/div[2]/div/div/div/div[2]').click()
      cy.wait(4000) 
      cy.xpath('//*[@id="__next"]/main/main/section/div[1]/div[2]/button').click()
      cy.xpath('//*[@id="mui-component-select-parentOrgId"]').click()
      cy.contains('Apple').click()
      cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[1]/div/input').type(generateRandomOrganizationName(10))
      cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[2]/div/input').type(generateRandomPhoneNumber())
      cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[3]/div/input').type(generateRandomAddress())
      cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
      cy.get('#menu-orgIndustry > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/p/form/div[3]/button').click()
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[1]/div/input').type(generateRandomGoodHumanFirstName(10))
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[2]/div/input').type(generateRandomGoodHumanLastName(10))
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[3]/div/input').type(generateRandomPhoneNumber())
      cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[5]/div/input').type(generateRandomEmail(10))
      cy.get('.text-right > .MuiButton-contained').click()
      cy.get('.MuiDialogContentText-root > .MuiButtonBase-root').click()
      
      cy.wait(8000)

 //Create CM

      cy.xpath('/html/body/div/main/div/div/nav/div[2]/div/div/div/div[3]/div/span').click()
      cy.wait(4000)
      cy.xpath('//*[@id="__next"]/main/main/section/div[1]/div[2]/button').click()
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/p/form/div[3]/button').click()
      if
        (cy.get(' .Mui-error').contains('Please select a group manager'))

      {
        cy.xpath('/html/body/div[2]/div[3]/div/div[2]/p/form/div[1]/div[2]/div/div/div/div/div/div[1]/div/div/div').click()
        cy.contains('Nexus').click()
        cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/p/form/div[3]/button').click()
      }
      if(cy.get('.Mui-error').contains('Please enter the organization name'))
      {
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[1]/div/input').type(generateRandomOrganizationName(10))
      }
       if(cy.get('.Mui-error').contains('Please enter the phone number'))
       {
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[2]/div/input').type(generateRandomPhoneNumber())
       }
       
       if(cy.get('.Mui-error').contains('Please enter the address'))
       {
        cy.xpath('//*[@id="panel1a-content"]/div/div/div[2]/div[3]/div/input').type(generateRandomAddress())
       }
       cy.xpath('//*[@id="mui-component-select-orgIndustry"]').click()
       cy.xpath('//*[@id="menu-orgIndustry"]/div[3]/ul/li[1]').click()

       cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/p/form/div[3]/button').click()

       cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[1]/div/input').type(generateRandomGoodHumanFirstName(10))
       cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[2]/div/input').type(generateRandomGoodHumanLastName(10))
       cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[3]/div/input').type(generateRandomPhoneNumber())
       cy.xpath('//*[@id="panel1a-content"]/div/form/div/div[5]/div/input').type(generateRandomEmail(10))
       cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/p/form/div[3]/button[2]').click()
       cy.wait(3000)
       //cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div/div/button').cick()
       //cy.wait(7000)



      //Create Agent

      cy.xpath('//*[@id="__next"]/main/div/div/nav/div[2]/div/div/div/div[5]/div/span').click()
      cy.xpath('//*[@id="__next"]/main/main/div[1]/button').click()
      cy.xpath('//*[@id="mui-component-select-associatedCampaign"]').click()
      cy.contains('Meeveo Group').click()
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/div/div[1]/div[2]/div[1]/div/input').type(generateRandomGoodHumanFirstName(10))
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/div/div[1]/div[2]/div[2]/div/input').type(generateRandomGoodHumanLastName(10))
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/div/div[1]/div[2]/div[3]/div/input').type(generateRandomPhoneNumber())
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/div/div[1]/div[2]/div[5]/div/input').type(generateRandomEmail(10))
      cy.xpath('//*[@id="root"]/div[2]/div[3]/div/div[2]/div/div[2]/button').click()


    })
    
  })
