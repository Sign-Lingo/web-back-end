[![Maintainability](https://api.codeclimate.com/v1/badges/9b3d0af20438824ee812/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/signlingo-be/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/9b3d0af20438824ee812/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/signlingo-be/test_coverage)

# API Documentation

#### Backend deployed at [Heroku](https://signlingo-staging.herokuapp.com/) <br>

### Backend framework goes here

-    Express and Knex: These frameworks compliment each other well and make the management of the database schema simple.
-    jwt: While not the most secure method for handling identity, attempts to implement third party authentication have not been successful through out the development of the Backend. So for RC1 jwt is the only method for registering and authentication.


#### Organization Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| ---    | #Level 1--------------- | ---------      | -------------------------------------------- |
| GET    | `/api/level_1/info/:id` | all users      | Returns the information for a user. |
| GET    | `/api/asl/AtoE` | all users      | Returns the letters with ASL sign image for AtoE |
| PUT    | `/api/level_1/update/:id` | owners         | Modify an existing user.             |
| ---    | #Level 2--------------- | ---------      | -------------------------------------------- |
| GET    | `/api/level_2/info/:id` | all users      | Returns the information for a user. |
| GET    | `/api/asl/FtoJ` | all users      | Returns the letters with ASL sign image for FtoJ |
| PUT    | `/api/level_2/update/:id` | owners         | Modify an existing user.             |
| ---    | #Level 3--------------- | ---------      | -------------------------------------------- |
| GET    | `/api/level_3/info/:id` | all users      | Returns the information for a user. |
| GET    | `/api/asl/KtoO` | all users      | Returns the letters with ASL sign image for KtoO |
| PUT    | `/api/level_3/update/:id` | owners         | Modify an existing user.             |
| ---    | #Level 4--------------- | ---------      | -------------------------------------------- |
| GET    | `/api/level_4/info/:id` | all users      | Returns the information for a user. |
| GET    | `/api/aslPtoT` | all users      | Returns the letters with ASL sign image for PtoT |
| PUT    | `/api/level_4/update/:id` | owners         | Modify an existing user.             |
| ---    | #Level 5--------------- | ---------      | -------------------------------------------- |
| GET    | `/api/level_5/info/:id` | all users      | Returns the information for a user. |
| GET    | `/api/asl/UtoZ` | all users      | Returns the letters with ASL sign image for UtoZ |
| PUT    | `/api/level_5/update/:id` | owners         | Modify an existing user.             |

#### User Routes

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| POST    | `/api/auth/register`        | none | Creates a new user account using jwt                    |
| POST   | `/api/auth/login` | none                | Verifies user identity an logs user in. |
|                                                    |

# Data Model


#### 2️⃣ USER

---

```
{
  id: UUID
  email: STRING
  passowrd: STRING
}
```

#### 2️⃣ Users Levels

---

```
{
    "id": "integer",
    "User_ID": "integer foreign key in USER table",
    "Level": "integer,
    "Lesson": "boolean",
    "Practice": "boolean",
    "Quiz": "boolean",
    "Active": "boolean",
    "signs": "string"
}
```

## 2️⃣ Actions

Auth Models

`add(user)` -> Adds user to the users table

`findBy(filter)` -> Returns a user based on filter (email)

ASL Models

`getAtoE()` -> Returns the ASL images and letters for A to E

`getFtoJ()` -> Returns the ASL images and letters for F to J

`getKtoO()` -> Returns the ASL images and letters for K to O

`getPtoT()` -> Returns the ASL images and letters for P to T

`getUtoZ()` -> Returns the ASL images and letters for U to Z

Levels Models

`addUser(User_ID)` -> Adds user to all levels tables

`getUser(id)` -> Returns a single users information for specific levels

`update(changes, id)` -> Updates the users progress in the level modules

<br>
<br>
<br>

## Environment Variables

DB_ENV = development

JWT_SECRET

PORT = 3300 //Local port can be set to anything

SALT_ROUNDS

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

 - As of 5-26-2020 all code is up to date and working 100%.


### Feature Requests

 - Adding the ability to allow users to register/login via Google and Facebook.
 - Updating schema, I have provided a video and db design in the Signlingo channel.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/Lambda-School-Labs/signlingo-fe/blob/master/README.md) for details on the fronend of our project.
