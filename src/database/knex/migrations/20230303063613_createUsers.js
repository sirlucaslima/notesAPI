exports.up = knex => knex.schema.createTable("users", table => {
  table.increments("id")
  table.string("name").notNullable()
  table.string("email").notNullable()
  table.string("password").notNullable()
  table.string("avatar")
  table.string("bio").defaultTo("I am a new user")
  table.timestamp("created_at").default(knex.fn.now())
  table.timestamp("updated_at").default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable("users")