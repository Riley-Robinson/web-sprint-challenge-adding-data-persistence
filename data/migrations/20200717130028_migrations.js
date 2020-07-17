
exports.up = function (knex) {
        return knex.schema
        .createTable("project", (table) => {
                table.increments();
                table.string("name", 100).notNullable();
                table.string("description", 500);
                table.boolean("completed").defaultTo(false);
          })
    
          .createTable("tasks", (table) => {
                table.increments();
                table.string("name", 100).notNullable();
                table.string("description", 500).notNullable();
                table.string("notes", 500);
                table.boolean("completed");
                   
                    table
                            .integer("project_id")
                            .unsigned()
                            .notNullable()
                            .references("id")
                            .inTable("project")
                            .onDelete("CASCADE")
                            .onUpdate("CASCADE");
            })
    
                    .createTable("resources", (table) => {
                            table.increments();
                            table.string("name", 100).notNullable().unique();
                            table.string("description", 500);
                  })
                            .createTable("project_resources", (table) => {
                                    table.increments();
    
            //Foreign key for pj id
            table
                    .integer("project_id")
                    .unsigned()
                    .references("id")
                    .inTable("project")
                    .onDelete("CASCADE")
                    .onUpdate("CASCADE");
    
            //foreign key for res table
    
            table
                    .integer("resource_id")
                    .unsigned()
                    .references("id")
                    .inTable("resources")
                    .onDelete("CASCADE")
                    .onUpdate("CASCADE");
        });
    };
    
    
    exports.down = function (knex) {
        
        return knex.schema
                .dropTableIfExists("project_resources")
                .dropTableIfExists("resources")
                .dropTableIfExists("tasks")
                .dropTableIfExists("project");
      };