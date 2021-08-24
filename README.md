# node-provably-fair-shuffle

## Getting Started 
node-provably-fair-shuffle is a node project that demonstrates generating provably fair and predetermined deck shuffles using a server and client seed, as well as a shuffle nonce. This has uses in online casinos where users can verify that their decks were generated and shuffled fairly.

As a demonstration, we will use the following seed pair when verifying the shuffle.

> Client: able able able able able able able able able able able able 

> Server: abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon

Along with these seeds, each shuffle has a `nonce`. This nonce is a number that is used to determine how many times the deck has been shuffled, and changing the nonce will result in a unique shuffled deck. For this demonstration, we will be using `nonce 0`, meaning this is the first shuffle that has been preformed using this seed pair.

## Practical Uses & Demonstration
This project has practical uses within the online gaming and gambling field where websites can allow users to verify that the games they played using these shuffled decks were generated fairly and without alteration by the server.

When a user plays a game, the server would generate a unique `serverSeed` which would be kept a secret from the client, until they request it. The first time the deck is shuffled, `nonce` will be set to `0`. Clients will always be able to see their client seed, and can also change it as they wish. Changing the client seed should automatically set `nonce` to `0`, because it will reshuffle the deck using the new seedpair.

If the server or client wish to reshuffle the deck, the `nonce` should be increased by `1`, which will generate a new seed for the deck and reshuffle it, while still keeping the `clientSeed` and `serverSeed` the same.

##### Example:
In order to follow along the uses of this project, please navigate to the [demo page](https://jbecker.dev/demos/node-provably-fair-shuffle/), where you can both view the code behind the shuffle function, as well as preform test deck verifications.

```
var clientSeed = "able able able able able able able able able able able able";
var serverSeed = "abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon";
var nonce = 0;
```

After inputting the required seeds & nonce, all that's left to do is see the resulting shuffled deck. You can do this by clicking the run button. After a moment, the result will appear in the console tab on the right. Users may use this data to verify that your games were played correctly and legitimately, without alteration.

Going back to our example, you can see that with the given `clientSeed`, `serverSeed`, and `nonce`, we are given the shuffled deck below.

```
[
  '2 of Diamonds',    '10 of Clubs',       'Queen of Clubs',
  '10 of Hearts',     'King of Diamonds',  '6 of Diamonds',
  'Ace of Spades',    '8 of Hearts',       '2 of Diamonds',
  '2 of Diamonds',    'King of Hearts',    '4 of Hearts',
  '5 of Spades',      '5 of Clubs',        'Queen of Clubs',
  '3 of Spades',      '8 of Diamonds',     'King of Spades',
  '10 of Diamonds',   '10 of Spades',      '10 of Spades',
  'Ace of Diamonds',  '2 of Spades',       '8 of Diamonds',
  'King of Clubs',    'Ace of Hearts',     'Ace of Clubs',
  '5 of Clubs',       '7 of Diamonds',     '3 of Spades',
  '9 of Clubs',       '6 of Spades',       '3 of Diamonds',
  '2 of Diamonds',    '9 of Diamonds',     '4 of Diamonds',
  '7 of Hearts',      'King of Diamonds',  '6 of Clubs',
  '2 of Clubs',       'King of Hearts',    '8 of Spades',
  '10 of Clubs',      '10 of Diamonds',    '9 of Diamonds',
  'Jack of Hearts',   '2 of Spades',       '3 of Spades',
  '2 of Hearts',      '9 of Hearts',       '4 of Spades',
  '8 of Hearts',      'King of Hearts',    '4 of Diamonds',
  '5 of Clubs',       '7 of Spades',       '5 of Spades',
  '5 of Spades',      'Queen of Diamonds', '8 of Hearts',
  '10 of Hearts',     '3 of Clubs',        'King of Spades',
  'King of Diamonds', 'Jack of Hearts',    '8 of Spades',
  '4 of Diamonds',    '6 of Diamonds',     '6 of Clubs',
  '9 of Clubs',       '9 of Diamonds',     'Ace of Spades',
  'Ace of Clubs',     'King of Spades',    'Ace of Hearts',
  '10 of Clubs',      '8 of Diamonds',     '5 of Clubs',
  '2 of Spades',      '2 of Hearts',       'Jack of Spades',
  '10 of Spades',     'Ace of Clubs',      '10 of Hearts',
  '9 of Spades',      '9 of Clubs',        '9 of Spades',
  '3 of Diamonds',    '8 of Clubs',        '8 of Spades',
  '6 of Spades',      '5 of Hearts',       'Jack of Clubs',
  '5 of Clubs',       'King of Hearts',    'Jack of Clubs',
  '4 of Hearts',      '3 of Hearts',       '5 of Diamonds',
  '4 of Spades',
  ... 212 more items
]
```

## Credits
All credits go to [Jonathan Becker](https://jbecker.dev), who developed this provably fair shuffler in its entirety with the use of [NPM module shuffle-seed by webcaetano](https://www.npmjs.com/package/shuffle-seed).
