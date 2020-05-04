exports.up = function(knex) {
    return knex.schema
        .createTable("Level_4", tbl => {
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
            tbl.integer("PtoT_ID")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("PtoT");
  })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Level_4")
};