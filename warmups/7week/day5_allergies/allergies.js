const allergies = {

    scorecard: {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats"
    },

    getKeys: function() {
        
        // Remember that objects are not stored in any particular order
        // So you will need to somehow order the keys of the scorecard - in reverse
        // Object.keys ??
        const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
        // console.log(allergyKeys);
        return allergyKeys;

    },

    // 2. Create a function that will compare our score to the list of scores
    // You'll need to loop through the keys of the object (you already got the keys in the above function)
    getList: function(score) {
        
        const allergyKeys = this.getKeys();
        // console.log(allergyKeys);

        // store keys
        let allergies = [];

        // Loop through the allergyKeys array to compare our input score to the scores of the scorecard
        for (let i = 0; i < allergyKeys.length; i++) {

            const key = allergyKeys[ i ];
            // console.log(key);

            console.log('--------------------');
            console.log(`allergy key: `, key);

            // Compare our score to each of the numbers in the array
            if (score >= key) {
                console.log('score of: ', score);
                console.log('is >= ', key);
                allergies.push(this.scorecard[key]);
                console.log(allergies);
                // subtract the current key from the score
                score -= key;
            } // if score >= key
        } // for
        return allergies;

    },

    // 3. Create a function to output the list of allergies
    output: function(score) {

        const allergies = this.getList(score);

        if (allergies.length === 0) {
            console.log('No allergies!!');
        } else {
            console.log(`Allergies: ${allergies.join(', ')}`);
        }

    }

}

// console.log(allergies.getList(34));
allergies.output(34);