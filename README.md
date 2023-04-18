# Hostfully-QA-Assessment


Automated Tests for Computer Database
This repository contains automated tests for the Computer Database demo application.

## Installation
To install the necessary dependencies, run the following command:


```npm install```

## Running the Tests
To run the tests, run the following command:

```npm run test```

This will open the Cypress Test Runner, where you can select the tests you want to run.

Alternatively, you can run the tests in headless mode using the following command:


```npm run test:headless```

This will run all the tests in the command line interface without opening the Test Runner.

## Configuring the Application URL
By default, the tests are configured to run against the demo application at https://computerdatabase.gatling.io/computers. If you need to test against a different URL, you can set the BASE_URL environment variable before running the tests:


```npm run test```

## Dependencies 

This project uses the following dependencies:

Cypress (for running the tests)


# Summary

During testing it was noticed that data wasnt properly saved: new computers were not added to the system, edited computer records stayed the same even though on both ocations i got a success message


# Approach 

in order to create the test scenarios i had to first do an exploratory test manually to understand the application, and came up with several scenarios to automate of which i shortlisted 3 they are;

### Scenario 1: Adding a new computer

Given the user is on the homepage
When the user clicks on the "Add a new computer" button
Then the user should be redirected to the add computer page
When the user enters a computer name, introduced date, discontinued date and company name
And clicks on the "Create this computer" button
Then the user should be redirected to the homepage
And the computer name should be displayed in a confirmation alert

### Scenario 2: 'Adding a new computer without computer name'

Given the user is on the homepage
When the user clicks on the "Add a new computer" button
Then the user should be redirected to the add computer page
When the user enters introduced date, discontinued date and company name
And clicks on the "Create this computer" button
Then the user should remain in the add computer page
And the user should see an error indicating that the computer name is required


### Scenario 3: Editing an existing computer

Given the user is on the homepage
When the user clicks on the an existing computer name on the list
Then the user should be redirected to the computer details page to edit the computer record
When the user updates the computer name, introduced date, discontinued date and company name
And clicks on the "Save this computer" button
Then the user should be redirected to the homepage
And the new computer name and details should be displayed in a confirmation alert


Because no data change or creation was actually saved on the system, i could not make assertions based on the existence of data in the list, instead they were made based on the confirmation alerts displayed.

