async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/3');
      if (!response.ok) {
        throw new Error(response.status);
      }
      const person = await response.json();
      console.log(person);    
    }
      catch (error) {
        console.log(error);
    }
  
  }
  
  getUser()