# Monthly Expense Tracking Application

## Overview

This is an Expense Tracker Web Application that tracks your income and expenses on a monthly basis. The user can input their monthly income and then add expenses with date and description. The application then calculates and displays the remaining amount. The user also has the option to remove any added expense. 

All data is stored in the local storage of the browser, so it remains even after the page is refreshed or closed and reopened.

## Features 

### Add Monthly Income

To add income, you should enter the amount in the income input field and press the "Add" button. The amount will then be added to the income table and the remaining amount will be updated.

### Add Expenses

You can add an expense by filling in the "Expense Form" with the description of the expense, the date, and the amount. Then press the "Save" button. The expense will be added to the expense table and the remaining amount will be updated.

### Remove Expenses

To remove an expense, press the trash can icon next to the expense in the expense table. The expense will then be removed and the remaining amount will be updated.

### Clear All Data

To clear all data, press the "Clear Information" button. A confirmation dialog will appear. If confirmed, all income and expense data will be cleared.

## Technologies Used

- HTML
- CSS (Bootstrap 5.3.0)
- JavaScript

## Setup

To use this project, clone the repository and open the HTML file in your preferred browser.

## Project Structure

The project consists of a single HTML file which includes the application form and tables for displaying the income, expenses, and remaining amount. 

The CSS for styling is provided by Bootstrap, with the addition of some custom styles.

The main functionality of the application is contained within the script tags at the end of the HTML file. This script handles the form submissions, updating the income and expense tables, calculations of remaining income, and interactions with the local storage.

The Google Translate script is included to provide automatic translation of the website into the user's preferred language.

## Contact

For any questions or concerns, please reach out to [umity@uia.no](mailto:umity@uia.no).
