exports.up = function(knex) {
    return knex.schema
        .createTable("Level_3", tbl => {
            tbl.increments();
            tbl.integer('User_ID')
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("users");
            tbl.boolean("Lesson")
                .notNullable();
            tbl.boolean("Practice")
                .notNullable();
            tbl.boolean("Quiz")
                .notNullable();
            tbl.boolean("Active")
                .notNullable();
            tbl.integer("KtoO_ID")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("KtoO");
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Level_3")
};