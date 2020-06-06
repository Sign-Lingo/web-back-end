exports.seed = function (knex) {
  return knex("users").then(function () {
    return knex("users").insert([
      {
        id: 1,
        email: "test",
        password: "testpassword",
        // okta_uid: "okta", // to be added later
      },
    ]);
  });
};
