# Description

The React Currency Converter is a web application built using Vite, Typescript, and SCSS. It allows users to convert between different currencies using up-to-date exchange rates. The application is unit tested using Vitest and the React Testing Library to ensure its reliability.

## Getting Started

Run the following commands: 

   npm install
   npm run dev

## Running tests

Run the following commands

No coverage: npm run test
With coverage: npm run test:coverage


## Notes for Consideration

Dropdown Search Filtering: The current implementation of dropdown search filtering is functional but can be further improved. If I had more time away from work commitments, I would consider using a library like React-select for a better experience or I would manually integrate the search input and dropdown as one searchable component. I wanted to get a solution over to you and I didn't have a great deal of time. 

Flag Images:  I ran into the late realisation that I was unable to include images inside a select option. I hope you can see that the currencyConverter.util.ts file demonstrates the ability to store corresponding flag codes in the options array objects. With further refactoring of the dropdown component, this feature can be implemented.

I wanted to show a focus on good coding practices: The project focuses on clean and readable code, making good use of TypeScript. It has a maintainable project layout/separation of concerns, and uses SCSS variables for styling consistency.