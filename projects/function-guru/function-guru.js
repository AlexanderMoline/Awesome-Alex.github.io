//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var toArray = [];
    for (var key in object) {
        toArray.push(object[key]);
    }

    return toArray;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = [];
    for (var key in object) {
        arr.push(key);
    }
    arr = arr.join(" ");
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var arr = [];
    for (var key in object) {
        if (typeof object[key] === "string") {
            arr.push(object[key]);
        }
    }
    arr = arr.join(" ");
    return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    }
    if (typeof collection === 'object' || Array.isArray(collection) || collection instanceof Date || colection === null) {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {

    // great start!
    let arr = string.split(" ");

    // now iterate over arr.length, not string - this should make it all pass
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); // perfect!
    }

    arr = arr.join(" "); // perfect!
    return arr; // perfect!
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

    return "Welcome " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if (object && object.noises) {
        if (Array.isArray(object.noises)) {
            if (object.noises.length > 0) {
                return object.noises.join(" ");
            }
        }

    }

    return "there are no noises";
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    let arr = string.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === word) {
            return true;
        }
    }

    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {

    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

    if (object.friends) {
        for (let i = 0; i < object.friends.length; i++) {
            if (name === object.friends[i]) {
                return true;
            }
        }
    }

    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*function nonFriends(name, array) {

    let nonFriend = [];
    let isFriend = [];
    /*
    1) locate <name> "Sara" in <array> and save in memory her friends list
    
    2) compare each name in <array> to Sara's friend list and add the names
    not found in the list to the final array
    */

    /*for (let i = 0; i < array.length; i++) {
        if (name !== array[i].friends) {
            nonFriend.push(array[i].friends);
        }
    }
    return nonFriend;
} 
    for (var i = 0; i < array.length; i++) {
        if (name === array[i].name) {
            isFriend = array[i].friends;
        }}
        for (var i = 0; i < array.length; i++) {
            if(array[i].name !== name){
            for (var k = 0; k < isFriend.length; k++) {
                if (isFriend[k] !== array[i].name) {
                    nonFriend.push(array[i].name);
console.log(nonFriend);
                }
}
            }
        }
        return nonFriend;
    }*/
    //////////////////////////////////////////////////////////////////////
    // Function 14 - Update Object ///////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    function updateObject(object, key, value) {

object[key] = value;
return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// iterate through array, and if there is a key in object that is equal to i, remove the key.

for (var i = 0; i < array.length; i++) {
    for (var key in object) {
        if (array[i] === key) {
            delete object[key];
        }
    }
}


}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
// iterate through array and if i is the same as the i in front of it, delete the i.

var arr = [];


for (var i = 0; i < array.length; i++) {
    if (arr.indexOf(array[i]) === -1) {
        arr.push(array[i]);
        
    }

    
    
}
return arr;


}

    //////////////////////////////////////////////////////////////////////
    // DON'T REMOVE THIS CODE ////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////

    if ((typeof process !== 'undefined') &&
        (typeof process.versions.node !== 'undefined')) {
        // here, export any references you need for tests //
        module.exports.objectValues = objectValues;
        module.exports.keysToString = keysToString;
        module.exports.valuesToString = valuesToString;
        module.exports.arrayOrObject = arrayOrObject;
        module.exports.capitalizeWord = capitalizeWord;
        module.exports.capitalizeAllWords = capitalizeAllWords;
        module.exports.welcomeMessage = welcomeMessage;
        module.exports.profileInfo = profileInfo;
        module.exports.maybeNoises = maybeNoises;
        module.exports.hasWord = hasWord;
        module.exports.addFriend = addFriend;
        module.exports.isFriend = isFriend;
        module.exports.nonFriends = nonFriends;
        module.exports.updateObject = updateObject;
        module.exports.removeProperties = removeProperties;
        module.exports.dedup = dedup;
    }
