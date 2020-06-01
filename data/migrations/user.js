exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("email").unique().notNullable().index();
      tbl.string("password").notNullable();
    })
    .createTable("levels", (tbl) => {
      tbl.increments();
      tbl.timestamp("passed_flash").defaultTo(null);
      tbl.timestamp("passed_practice").defaultTo(null);
      tbl.timestamp("passed_quiz").defaultTo(null);
    })
    .createTable("user-levels", (tbl) => {
      tbl.increments();
      tbl
        .integer("user_id")
        .references("id")
        .inTable("users")
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("level_id")
        .references("id")
        .inTable("levels")
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.timestamp("completed_on").defaultTo(null);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user-levels")
    .dropTableIfExists("levels")
    .dropTableIfExists("users");
};
