
exports.up = function(knex) {
    return knex.schema
        .createTable("Level_1", tbl => {
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
            tbl.integer("AtoE_ID")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("AtoE");
      })
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
        .createTable("Level_5", tbl => {
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
            tbl.integer("UtoZ_ID")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("UtoZ");
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("Level_5")
        .dropTableIfExists("Level_4")
        .dropTableIfExists("Level_3")
        .dropTableIfExists("Level_2")
        .dropTableIfExists("Level_1")
};
