# backtracking
### Project for algorithm analysis and comparison between brute-force and backtracking strategies in Javascript

CLI program that calculates the probability of not passing if you have one card when taking more in blackjack.

```

.\blackjack.js [-help] [-intense [FIRST_CARD]] [-nopick [NUMBER OF DRAWS]] [FIRST_CARD] [NUMBER OF DRAWS]

Calculates the probability of not passing if you have one card when taking more in blackjack.
				
Options:
				
-help           Prints information about the command.
-intense        Generates the probability of not passing from 1 to 8 cards more taken.
-nopick         The command ignores [FIRST_CARD] argument and calculates the probability
		without taking any card. It works with -intense option.
									
```

#### Javascript
It is necessary to use [Node.js 10.13.0](https://nodejs.org/en/) to run the script. Use the command: `./blackjack.js`at the directory of the script.
