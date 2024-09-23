async function getGithubUser() {
    try {    
      const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
      if (!response.ok) {
        throw new Error(response.status);  
      }
    } catch (error) {
      console.log('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }
  getGithubUser();