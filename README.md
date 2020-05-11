# Gainsight case study

##### Summary
1. Application Details
2. How to setup the application
3. Details of external libraries / plugin used
4. Completed Requirements
5. What can be done more

###### 1. Application Details 
This application will be useful for technicians to check Games Arena catelog.

###### 2. How to Setup the application in your local
- Clone the repo using ```git clone git@github.com:ajayg415/gainsight-system-test.git``` in your command prompt
- Go inside the folder ```cd gainsight-system-test```
- Install npm modules using ```npm install```
- if you want to chekc the test cases type ```npm start test```
- if you want to run the application type ```npm start```. Application will open in your default we browser

###### 3. Details of external libraries / plugin used
- I have used ```react-create-app``` bolier plate to generate the application.
- Used ```redux``` for data management.
- Used ```enzyme``` for test cases.
- Added ```https://materializecss.com/``` for styling.
 
###### 4. Completed Requirements
- Added responsive design 12 cards in desktop, 9 cards in tablet and 6 cards in mobile devices.
- Added Paginatior with all funcationalities, ```goToNextPage```, ```goToPrevPage``` and ```jumpToPage```.
- Implemented Sorting for ```Title```, ```Platform```, ```Score``` and ```genre```. You can click onm arrow next to the dropdown to change from ascending to decending and vice versa.
- Added Auto Complete filter, when you type automatically it willfilter the list with matching sentence.
- Added Test cases for all files.
- Created config file, you can change the filter dropdown values from config.
 
###### 5. What can be done more
- Missed adding Group By filter. 
- Could have add click logic to autocomplete list.
- Co-ordination is missing when we use diff type of filters. 
