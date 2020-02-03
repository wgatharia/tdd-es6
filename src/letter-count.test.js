//TDD:
//import fuction to test even when not defined.
import { getLetterCount } from './letter-count';
//import assertion expect from chai
import { expect } from 'chai';


//mocha keywords
//describe is used for grouping tests

describe('getLetterCount - basic functionality', () => {
    //what do we expect from the funtion
    it('returns an empty array when passed an empty string', () =>{
        //define expected and actual results
        const expected = {};

        const actual = getLetterCount('');

        expect(actual).to.deep.equal(expected); //deep needed since we have objects to compare
    });

    //write next
    it('should return the correct letter count for a word with one of each character', () =>{
        const expected = { c:1, a:1, t: 1};

        const actual = getLetterCount('cat');

        expect(actual).to.deep.equal(expected); 
    });

    //string with repeated characters

    it('should return the correct letter count for string with repeated characters', () =>{
        const expected = { m:1, i:4, s: 4, p:2};

        const actual = getLetterCount('mississippi');

        expect(actual).to.deep.equal(expected); 
    })
})