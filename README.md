# Counterspell
This is a browser-based word game that I made for the [Spring Lisp Game Jam 2024](https://itch.io/jam/spring-lisp-game-jam-2024). This was my very first ClojureScript project, so it would be a bad idea to read any of the code in this repo!

You can try the game [on my website](https://caseybrant.com/counterspell/#709).


## Building instructions
1. Install dependencies (`npm install`)
2. Run `npx shadow-cljs release app`
3. Take the files in `public/` and put them on a web server or open the `index.html` file locally.


## Credits
Game by Casey Brant.

Word list is from the `/usr/share/dict/words` file that comes on macOS. I think there are probably better lists, but that was the easiest one to grab for a game jam.

This game uses the [JSRand library](https://github.com/DomenicoDeFelice/jsrand) for seeded random number generation.
