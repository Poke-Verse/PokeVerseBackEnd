# Review Comments from Pius

Feel free to delete file as needed.  Comments below are from Pius as of 3/15/23 morning:

## Technical Goals

## Comments before Week 10 Presentations

### Technical Goals

1. Requirements:
    - Storing the Admin passwords directly in the db is unsafe (as you noted in the code check-in in Week 9).  Hash the password before seeding; store the plaintext password somewhere else.  Is that just for demo purposes?  Fortunately you do hash the passwords for new regular users, and you check the hashes, so that's good.
    - Where are you with deployment?
2. Testing:
    - Sample tests would be helpful so there's a record of testing, since you don't use Jest or the Supertest library.  Could list sample Postman requests in the Readme, share Postman collection, etc.  
    - Tests generally seem to work across endpoints after logging in to admin, or logging into non-admin created accounts with JWT bearer tokens (when testing randomly).
3. Logic:
    - Had to redefine the references to the sequelize library in the `user` and `pokemon` models to get server working on my machine.
    - Seeding the database works well.
    - Agreed w/ Week 9 check-in that code organization is good, separate folders for db, models, routes.
    - Your admin endpoints include sensitive data in the URL (name, email), which isn't standard practice, since that's more easily abused.  This might be a case where you woul use a POST/PUT request so it has to be part of the body request outside the URL.
    - Several `null` properties output in form the pokemon output, including `regionalPokeDexId` and `pokedexEntry` even though in theory you have it in the seed data.  Looks like a slight naming mismatch in models/routes.
4. Style:
    - Good route names following RESTful conventions; consistent and standard SQL model names.
    - README has good intro of basic setup, including installation, .env file, etc.
    - README could be more specific about the endpoint URLs, e.g. `/api/users/` as root URL for the users.
    - README: What body params are needed for the POST/PUT requests?  Any query params needed? for GET requests?
    - README: What's the workflow for using the API?  Should I register first? 
    - Filtering Pokemon by "name" may be better as query params, since there are so many names, and to let users search for parts of names. Otherwise good use of regular URL params.

### Collaboration Goals

1. Commit history shows descriptive messages.
2. Looks like majority of code addition or troubleshooting came from `Nando81k` and `NoelCov`.  What does the team think of contributions from `botirmasharipov`, `horbachoff`, and `Emil-Deleon-Clover`?  In the Week 9 check-ins, the team said people did a good job working in parallel, so how does get reflected in the code? How could this be improved or clarified if you were to do this over?

### General Questions/Comments

1. Any thoughts on areas improvement needed in the way you're working together, in the middle of this project?

---

## Comments before Week 7 Review

Feel free to delete file as needed.  Comments below are from Pius as of 3/15/23 morning:

### Technical Goals

1. Requirements:
    - MVP Endpoints not yet working for me without some modification; see comments in `app.js`
    - Good definition of a separate model for users who may be admins.  At the same time, what is the `admin.js` route for?  Not that it's a bad thing -- I just don't know how it's different from the `users` route.
    - Is your intention to sign and verify your own JWTs for authorization/authentication?  I see starting code for this, but not sure if it's being used yet.
2. Testing:
    - This probably is the part with my biggest questions, or what I'd ask you about most right now.  
    - What's your process for TDD, or testing before merging a feature? Postman tests are fine, and are those shared among all of you?  I don't see jest tests or use of the `supertest` library.
    - There are routes up that *almost* seem to work, but debugging is needed.  Encourage you to make sure branches pass small tests first during pull requests, so you can make small and frequent merges.
    - What data are you putting in the database at first to test out endpoints?
3. Logic:
    - In your routes, I see you still have to import the models.  Based on what's commented out at the top, make sure you reference the correct files.  Consider making an `index.js` file in your `models` to integrate all your models and assocations.
4. Style:
    - eventually would like Readme/docs to describe setup/depoyment/use of app, not needed now
    - Good separation of concerns! File structure uses routes well, organized folders.  Keep that up.

### Collaboration Goals

1. Commit history is regular, with descriptive commit messages.
2. Would like to get Emil caught up to make commits -- what will be Emil's focus in Week 7+?

### General Questions/Comments

1. Any thoughts on areas improvement needed in the way you're working together, in the middle of this project?