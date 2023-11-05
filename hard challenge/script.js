//defined "createPII" function
//takes two parameters: "name" and "ssn"
function createPII(name, ssn) {
    //created object called "PII" with two properties: name and ssn
    const PII = {
      name: name,
      ssn: ssn,
    };
  
    //return object with two methods: "getName" and "getSSN"
    return {
    //method that retrieves value of "name" property
      getName: function() {
        //returns value of "name" property
        return PII.name;
      },
    //method that retrieves value of "ssn" property
      getSSN: function() {
        //returns "undefined" meaning the method doesn't access the "ssn" property to retrieve its value
        //makes the "ssn" proprty private
        return undefined;
      },
    };
  }
  
  //calling the "createPII" function and giving values to the parameters 
  const patient2 = createPII('John', '123-45-6789');
  
  //output is undefined because you can't access name property directly
  console.log(patient2.name);   
  //output is undefined because you can't access ssn property directly
  console.log(patient2.ssn);
  //output is "John"
  console.log(patient2.getName());
  //output is undefined because the property was made private
  console.log(patient2.getSSN());
