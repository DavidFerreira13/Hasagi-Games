# Hasagi Games

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## The Idea

I thought about what kind of website i wanted to build. It had to have persistence in any logical way, and use React.
So, the main idea was create a website that hosts games and every game gives a certain amount of 'Rank Points' (RP) in order for the user to evolve along a certain amount of ranks. The way to achieve this would be to have the user register to the website through a Sign In with email confirmation and connect that user to the RP Sistem.
The more games a user Plays, the more points he wins.

## Ranking System

The ranking system works by rank division, and the best way to 'Rank up' is to not be tied to a single game (daily, since it resets every 24h after the first game was played).
Game 1: Rank Points multiplier => 1.0x
Game 2: Rank Points multiplier => 1.01x
Game 3: Rank Points multiplier => 1.02x
...

The way to change ranks is to cross the limit established of points to reach each rank.
Example:
  Rank: Bronze 93/100 RP
  User wins 7 RP
  Rank: Bronze 100/100 RP
  User wins 1 RP
  Rank: Silver 1/1000 RP
