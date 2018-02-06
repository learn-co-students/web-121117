# Dad Jokes App
So I hear you like to make Dad Jokes?

This project is broken down to a frontend and a backend. You'll learn more about this
later this week but for now recognize that at our top level we will have a folder
for our backend (and normally a folder for our front end too).

To make sure our frontend communicates to our backend, we will want to be sure to
have a terminal open and `cd dadjoke-api` so we can be in the folder and run
our Rails app (e.g. `rails s`). **BEFORE we can run**, we need to do a few things...

### Setup

1. `bundle install` - Have all the necessary gems installed
2. `rake db:create` - Create a database
3. `rake db:migrate` - Migrate our database
4. `rake db:seed` - Seed our database with information

After all of this, our app is ready for `rails s`.

When we want to do changes for the frontend, be sure to do it on our `dadjoke-frontend`

### Usage
Any time we make a request on our frontend we will do it onto our `BASE_URL`.
This will align to whatever the url we are going to. Since we run our app through
`http://localhost:3000`, this is where we would need to set as our base. However,
I make only requests to our `/jokes` endpoint so it is okay to run `http://localhost:3000/jokes`
for this example.

Here are some of the endpoints both with their request and response information:

#### Gets all jokes on our database
```
**GET** `http://localhost:3000/jokes`

// Example Response:
[
	{
		"id": 1,
		"joke": "What did one nut say as he chased another nut?  I'm a cashew!"
	},
	{
		"id": 2,
		"joke": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
	},
	{
		"id": 3,
		"joke": "A steak pun is a rare medium well done."
	},
  // ...
]
```


#### Add a joke onto the database
```
**POST** `http://localhost:3000/jokes`
Required Request Body
{
  "joke": "This is a hilarious joke"
}

Required Request Headers
{
  'Content-Type': 'application/json'
}

// Example Response
{
	"id": 31,
	"joke": "This is a hilarious joke"
}
```
