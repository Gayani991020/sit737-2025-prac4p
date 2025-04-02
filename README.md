Step 1: Set Up the Development Environment  

Before coding, ensure you have the necessary tools installed:  
Install Node.js: [Download here](https://nodejs.org/en/download/)  
Install Git: [Download here](https://git-scm.com/downloads)  
Install VS Code: [Download here](https://code.visualstudio.com/)  



Step 2: Create a New Node.js Project  

1. Create a new folder for the project  

   mkdir sit737-2025-prac4p
   cd sit737-2025-prac4p

   
2. Initialize a Node.js project  

   npm init -y

   This creates a `package.json` file, which manages dependencies.



Step 3: Install Required Dependencies  

1. Install Express.js (for handling API requests):  

   npm install express

2. Install Winston (for logging requests and errors):  

   npm install winston




Step 4: Write the Microservice Code  

1. Create a new file named `server.js` in the project folder.  
2. Copy and paste the following code into `server.js`:  
   
   - This code defines the calculator operations, sets up API endpoints, and implements logging with Winston.

   *(Refer to the `server.js` code in the previous response.)*



Step 5: Run the Microservice Locally  

1. Start the microservice:  

   node server.js

2. The server should now be running:  

   Calculator microservice running on port 3040

3. Test it in a browser or using Postman by visiting:  

   http://localhost:3040/add?n1=10&n2=5
   http://localhost:3040/subtract?n1=10&n2=5
   http://localhost:3040/multiply?n1=10&n2=5
   http://localhost:3040/divide?n1=10&n2=5




Step 6: Check the Logs  

- View logs in real-time:  

  tail -f logs/combined.log

- If an error occurs, check `logs/error.log`.



Step 7: Push the Project to GitHub  


