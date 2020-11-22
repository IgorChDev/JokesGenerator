//Generate random Numbers
const randomNumGenerator = (num) => {
    return Math.floor(Math.random() * num);
}
// Generating random jokes
const randomJokesGenerater = (sillyJokes) => {
    return sillyJokes[randomNumGenerator(sillyJokes.length)];
}

// create array of jokes
const sillyJokes = [
        'Where does the General keep his armies? In his sleevies.', 'How does a squid go into battle? Well-armed.', 'What\'s the best thing about Switzerland? I don\'t know, but their flag is a huge plus.', 'Where do you find a cow with no legs? Right where you left it.', 'Why aren\'t koalas actual bears? They don\'t meet the koalafications.', 'A bear walks into a restaurant. He tells his waiter, "I want a grilled …. cheese." The waiter says, What\'s with the pause?" "Whaddya mean?" the bear replies. I\'m a bear!', 'What\'s E.T. short for? Because he\'s only got little legs.', 'What do you call a Frenchman wearing sandals? Phillipe Phillope.', 'Never criticize someone until you have walked a mile in their shoes. That way, when you criticize them, you\'ll be a mile away, and you\'ll have their shoes.', 'What\'s the difference between a hippo and a zippo? One is really heavy, and the other is a little lighter.', 'What did the mayonnaise say when the refrigerator door was opened? Close the door, I\'m dressing.'
    ];

//Entering it to the console
console.log(`Your joke is: ${randomJokesGenerater(sillyJokes)}`);


