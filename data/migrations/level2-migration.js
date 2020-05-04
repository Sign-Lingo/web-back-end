exports.up = function(knex) {
    return knex.schema
        .createTable("Level_2", tbl => {
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
            tbl.integer("FtoJ_ID")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("FtoJ");
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Level_2")
};