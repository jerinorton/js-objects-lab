
console.log('app is working')


// defining a object literal
// key value Pairs <- want in your language

// keys, name, color, isReal, etc
// values, "Big Foot", 'Brown', true, etc
const bigFoot = {
    name: 'Big Foot',
    color: 'Brown',
    isReal: true,
    height: 7, //feet
    diet: 'vegeterian',
    woodlandFriends: [{name: 'bunny', age: 4},{name: 'squirrel, age: 5'}],
    eat(plant){ //new syntax on writing methods in objects
        console.log(`Lets eat ${plant}`)
    },
    hide(woods){
        console.log(`Lets hide in ${woods}`)
    },
    run(){

    },

    // run: function(){
    
//}

}


//add arguemnt to the hide fuction called location
// when you call it should say
// Lets hide in "location"

bigFoot.eat('tree')
bigFoot.eat('lettuce')
bigFoot.eat('kale')
// log the age of bunny,
console.log(bigFoot)
console.log(bigFoot.woodlandFriends[0].age)
// log out the squirrel,
console.log(bigFoot.woodlandFriends[1].name)


delete bigFoot.isReal // deletes the isReal property

bigFoot.hide('bushes')
bigFoot.hide('tree')
bigFoot.hide('cave')
// to access values
bigFoot.name // 'Big Foot
// or the bracket
bigFoot['name'] // 'Big Foot'


let key = 'name'

bigFoot[key]

bigFoot['woodlandFriends'][0] /// 'bunny'




function sayHello(name){
    return `Hello, ${name}`
}

// for each woodlandFriend use the sayHello function
bigFoot.woodlandFriends.forEach((friend) =>{
    console.log(sayHello(friend))
})


//above and below do the same thing
sayHello(bigFoot.woodlandFriends[0])
sayHello(bigFoot.woodlandFriends[1])
sayHello(bigFoot.woodlandFriends[2])
// you should see three logs
// Hello, bunny,
// Hello, squirrel,
// Hello, deer


// To print out deer from the woodland friends
console.log(bigFoot.woodlandFriends[2])



// I want to see if bigFoot is real
// retrieve the value of the isReal key (property) in bigFoot
console.log(bigFoot.isReal)

// Getting a property (Value)

//See what diet bigFoot has
console.log(bigFoot.diet)

//SET KEY VALUE PAIRS

// Change the color of bigFoot
bigFoot.color = 'strawberry blonde';

// change the diet of bigFoot
bigFoot.diet = 'vegan';

