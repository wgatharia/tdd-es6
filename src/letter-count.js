//We will be creating a function that returns a count of letters in a string as an array
// 'cat' => { c:1, a:1, t:1 }
// 'better' => { b:1, e:2, t:2, r:1}


export const getLetterCount = string => {
    const letters = string.split('');

    let letterCount = {};

    letters.forEach(element => {
        if(!letterCount[element])
        {
            letterCount[element] = 1
        }
        else
        {
            letterCount[element] +=1
        }
    });

    return letterCount;
};