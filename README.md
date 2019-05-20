# Tic-Tac-Toe: A Single Page Application by Sasha Bausheva

A online version of the class tic-tac-toe game! Play against someone at the same terminal or play against yourself! Sign up and sign in are required to play; win detection and game statistics are provided for you.

## Visit the Website
You can access the application here: https://sashabausheva.github.io/tictactoe-client. Simply sign up and sign in with your credentials to play (I would recommend not using a password you frequently use!).

## Technologies Used
- Javascript
- jQuery
- HTML
- CSS
- SASS
- Bootstrap
- AJAX
- GitHub

This project was created to complete one of General Assembly's Software Engineering Immersive (formerly WDI - Web Development Immersive) course assignments. This is my very first project completed as part of the course; it was created during my 3rd week at GA out of 12.

## Development Process
1. Brainstorm the project design based on the project requirements.
2. Create a set of [user stories](public/docs/user_stories.md) from the player's perspective to better understand the necessary and desired functions of the application.
3. Sketch [project wireframes](public/images/wireframes) and adopt an initial UX design goal. The final interface ended up changing slightly after user testing and redesign.
4. Based on the wireframe designs, create an empty gameboard interface using HTML and CSS complete with the "Game Status" title, game status paragraph, and new game input button.
5. Add the page title, welcome paragraph draft, and authentication input forms and buttons.
6. Write curl scripts and, after ensuring their functionality, use them to implement the authentication functionlity for the Sign Up, Sign In, Change Password, and Sign Out forms and buttons using HTML, jQuery, and AJAX.
7. Once the authentication requirements were out of the way, use jQuery to allow users to insert 'x' in gameboard cells by clicking on them.
8. Write a function checking whether the necessary conditions for winning the game have been met.
9. Write a function to reset/create a new game.
10. Use API and AJAX to send GET requests to the server and store new game data for future use when the game is updated (when a player takes their turn by placing x in a cell).
11. Further work on the game logic and implement functions for checking whether the gameboard is full and the result of a game is a tie.
12. Implement the PATCH request to the server to allow users to update the game by placing 'x' in gameboard cells.
13. Add finishing touches to the game logic to allow users to reset their game, switch turns from 'x' to 'o', prevent users from placing 'x' or 'o' in non-empty cells, and prevent users from continuing an already finished game.
14. Add a feature allowing users to retrieve the number of games played by sending a GET request to the server.
15. Add a feature showing users the ID of the game they are currenlty playing and allowing them to retrieve the results of a  game by its ID via a GET request to the server.
16. Add feedback messages for each user action (within game and authentication-related).
17. Using Javascript and jQuery, hide and show parts of the website only at certain times, depending on the authentication status (e.g. the Sign In form and button is available only to non-signed in users, while the game interface is only available to authenticated users).
18. Add final touches

## Problem Solving Process
- After completing my initial draft of the game logic, I realized that the way I had structured my game logic didn't allow me to store and update the game data on the server using AJAX. In order to achieve the final functionality goal, I had to revise the game logic and reacreate certain functions from scratch, this time implementing GET and PATCH requests.
- While working on the game logic, I ran into difficulties involving asynchronous JavaScript callbacks. Given that this was my first time using this technique, I was defining a number of variables in my asynchronous callbacks while at the same time attempting to use these variables in the synchronous code. This resulted in these variables being undefined at that point in the synchronous code. In order to address this issue, I had to split the function into two separate functions. This allowed me to complete the asynchronous part of the code and defined the necessary variables in the first function, and then use these variables in the second function.

## Unsolved Problems
- The UX design is only partially mobile-friendly
- When multiple buttons are pressed quickly, the Javascript fadeIn/fadeOut feature creates an overlap, and the UX design becomes twitchy
- The SPA is yet to be tested in browsers other than Google Chrome

## Future Direction and Possible Features
- Multi-player mode
- User vs computer AI mode
- Expanded board dimensions, such as 4x4, 5x5, etc.

### Acknowledgments
Special thanks to Jennifer Meade, Eron Salling, Ben Jenkins, Jordan Allain, Chris Kennelly, Naida Rosenberger, GA SEI-02, GA WDI-30, and everyone at General Assembly Boston.
