// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderGame } from '../render-utils';

const test = QUnit.test;

test('renderGame(game) should take in a game object and return DOM elements containing names and scores', (expect) => {
    //Arrange
    const game = {
    
    };
    // Set up your arguments and expectations
    const expected = '<div class="game"><div class="team"><p class="name"></p><p class="score">0</p></div><div class="team"><p class="name"></p><p class="score">0</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
