#Caitlin Prentke's Front-End Coding Challenge

##To run locally:

- `cd nyt-coding-challenge`
- `npm install`
- `npm start`
- By default, the app will run on localhost:3000.

##Notes

- To start, I decided to use Facebook's boilerplate Create React App. I figured it was the easiest way to get the app up and running so I could focus on the challenge.
- I decided to use Bootstrap as their forms are styled very simply. At a quick glance, they look the most Times-like. I added some custom CSS to center the forms, but I kept the design as clean and simple as possible.
- Where there were duplicated components in the login and register forms, I refactored them into their own components to cut down on the amount of code. Duplication at this point was a strong suggestion that those components would be needed for more forms in the future.
- I used React Router to keep the code and user's experience as simple as possible.
- I tried to mimic the functionality of the login and register forms, hence the fakeFetch functions. I figured that the most basic API calls would take a url and an object as paramaters, so I mimicked that in the functions. I had it return the user object and print to the console, to demonstrate that an object would probably be returned.
