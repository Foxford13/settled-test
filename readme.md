# Test


### Installation
1. Use either yarn or npm
2. run 'yarn install'
3. then run 'yarn start'

### Tech
Node.js
Express 
Yarn 
jest
For db I simply used node.js filesystem



### How to use
The server runs on localhost:3000 and accepts a post to 'http://localhost:3000/send-email'


### Testing
Simply run 'yarn test'

It tests only one method due to limtied amount of logic in this app.

### my approach?
If I was to design the application and the microservice, I would have probably triggered a request pre/post save of the document 'ListingViews' when it reaches 'number_of_views' 1000. 

In this particular case, I decided to make a mock database as it would show a bit more of the way I think, and also, I liked the idea of microservice being absolutely independent.
However, in real scenario most likely I would just post all needed data from the app to avoid unnecessary DB queries, as most likely it would be in the app memory anyway.

