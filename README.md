# Employee Tracker

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credit](#credit)
* [Test](#test)

## Description 
This CLI node.js application was built with a MySQL database to store employee information. You can view all departments, roles, and employees in the database. Departments, roles, and employees can be added to the database through the command line when the application is initiated. Also, employee data can be updated as well through the command line. 

## Installation 
1. Clone the <a href="https://github.com/angeeg/employee-tracker.git">github repo</a> onto your machine in the directory you want to save it in. 
2. Open the repo in your code editor. 
3. Open the terminal in your code editor and run 'npm i' then run 'npm start' to invoke the application.
## Usage 
Once you run 'npm start' in the command line, you will be prompted to select if you would like to view certain data tables or update a table. 

[Walk-through video 1.](https://drive.google.com/file/d/1I_iOVVTTbeFslTD5a0pehVUlBOlPNg6N/view)


### Technologies Used:
* Node.js 
* Javascript
* Inquirer
* MySQL2


## Credit
This project was created by <a href="https://github.com/angeeg">angeeg</a>.
## Test 
1. Run 'npm i jest' in the terminal to make sure the npm jest package is installed. 
2. In the 'package-json' under the "Scripts" section replace ' "test": "echo \"Error: no test specified\" && exit 1" ' with ' "test": "jest" '.
3. You must then create a folder in the root directory titled `__tests__` and create a files within that folder where you will input functionality you wish to test. 
4. To run a test, in the command line type 'npm test' and the jest package will run a test on the code in that folder. 

## Questions
If you have any questions please contact <a href="https://github.com/angeeg">angeeg</a>.
