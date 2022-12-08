
# TTT Assignment

Deployed Link: https://ttt-chart-assignment.netlify.app/

Libraries used:

    1. "react": "^18.2.0",
    2. "react-dom": "^18.2.0",
    3. "react-scripts": "5.0.1",
    4. "recharts": "^2.1.16"

# Components of the code

This app includes two components namely a submit button and a chart. Initially, when the page loads only 'submit' button is visible. When the user clicks on it 'fetchData' function is triggered, this function first fetches raw data from the provided link using the fetch API this data is then converted to a string and is then put into 'wordFreqCalculator' function as arguments, this function returns an array of objects of words along with their corresponding frequencies. This returned array of objects is then sorted in descending order according to the frequency of occurence of the words. First 20 valid objects are then extracted from this sorted array of objects using the 'slice' method. This data is then assigned to 'data' using 'setData' function and 'useState' hook, and is then sent to the chart component via props. Then the chart is displayed by setting value of 'display' to true using 'setDisplay' function and 'useState' hook.

# Installation
    1. Install the dependencies: npm install
    2. Start the application: npm start



