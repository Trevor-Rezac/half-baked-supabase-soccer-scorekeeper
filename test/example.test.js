// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('renderGame(game) should take in a game object and return DOM elements containing names and scores', (expect) => {
    //Arrange
    const game = {
        name1: 'john',
        name2: 'doe',
        score1: 0,
        score2: 0
    };
    // Set up your arguments and expectations
    const expected = '<div class="game"><div class="team"><p class="name">john</p><p class="score">0</p></div><div class="team"><p class="name">doe</p><p class="score">0</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderTeam(name, score) should take in a name and a score and return DOM elements containing the name and score', (expect) => {
    //Arrange
    
    let name = 'Trevor';
    let score = 10;
    // Set up your arguments and expectations
    const expected = '<div class="team"><p class="name">Trevor</p><p class="score">10</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam(name, score);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});