# Review Comments from Pius

Feel free to delete file as needed.  Comments below are from Pius as of 3/15/23 morning:

## Technical Goals

## Comments before Week 10 Presentations

### Technical Goals

1. Requirements:
    - Storing the Admin passwords directly in the db is unsafe.  Hash the password before seeding; store the plaintext password somewhere else.  Is that just for demo purposes?  Fortunately you do hash the passwords for new regular users, and you check the hashes, so that's good.
2. Testing:

3. Logic:
    - Seeding the database works well.


4. Style:
    - README could be more specific about the endpoint URLs, e.g. `/api/users/` as root URL for the users.
    - README: What body params are needed for the POST/PUT requests?  Any query params needed? for GET requests?
    - README: What's the workflow for using the API?  Should I register first? 
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