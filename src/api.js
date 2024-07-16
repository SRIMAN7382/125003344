export const getclientcredentials = async () => {
    try {
      console.log('Starting registration request...');
      const response = await fetch('http://20.244.56.144/test/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "companyName": "goMart",
          "ownerName": "Rahul",
          "rollNo": "1",
          "ownerEmail": "rahul@abc.edu",
          "accessCode": "FKDLjg",
          "token_type":"Bearer"
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to register');
      }
  
      const data = await response.json();
      console.log('Registration successful:', data);
      return { clientID: data.clientID, clientSecret: data.clientSecret };
    } catch (error) {
      console.error('Error registering:', error);
      return null;
    }
  };
  
  export const getaccesstoken = async (clientID, clientSecret) => {
    try {
      console.log('Starting authentication request...');
      const response = await fetch('http://20.244.56.144/test/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          companyName: "goMart",
          clientID: clientID,
          clientSecret: clientSecret,
          ownerName: "Rahul",
          ownerEmail: "rahul@abc.edu",
          rollNo: "1"
        })
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch access token');
      }
  
      const data = await response.json();
      console.log('Authentication successful:', data);
      return data.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      return null;
    }
  };
  
  export const getproducts = async (company, category, top, minPrice, maxPrice, LGcHvG) => {
    try {
      console.log('Starting product fetch request...');
      const response = await fetch(`http://20.244.56.144/test/companies/${company}/categories/${category}/products?top=${top}&minPrice=${minPrice}&maxPrice=${maxPrice}`, {
        headers: {
          'Authorization': `Bearer ${LGcHvG}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Products fetched successfully:', data);
      return data;
    } catch (error) {
      console.error('Failed to fetch products:', error);
      return [];
    }
  };
  