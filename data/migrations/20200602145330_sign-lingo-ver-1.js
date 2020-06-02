exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username").unique().notNullable().index();
      tbl.string("okta_uid").unique().notNullable();
    })
    .createTable("levels", (tbl) => {
      tbl.increments();
      tbl.string("name");
    })
    .createTable("user_levels", (tbl) => {
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
      tbl.timestamp("completed_flashcards").defaultTo(null);
      tbl.timestamp("completed_exercises").defaultTo(null);
      tbl.timestamp("completed_quiz").defaultTo(null);
    })
    .createTable("flashcards", (tbl) => {
      tbl.increments();
      tbl.string("sign").unique();
      tbl.string("visual").unique();
      tbl.integer("level_id").references("id").inTable("levels").notNullable();
    })
    .createTable("exercises", (tbl) => {
      tbl.increments();
      tbl
        .integer("flashcard_id")
        .references("id")
        .inTable("flashcards")
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("prompt");
      tbl.string("visual");
      tbl.string("option1");
      tbl.string("option2");
      tbl.string("option3");
      tbl.string("option4");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user-levels")
    .dropTableIfExists("exercises")
    .dropTableIfExists("flashcards")
    .dropTableIfExists("levels")
    .dropTableIfExists("users");
};
