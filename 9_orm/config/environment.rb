require 'bundler'
Bundler.require




DB = {
  conn: SQLite3::Database.new('db/listr.db'),
  name: 'Twitter'
}

ActiveRecord::Base.establish_connection(
  {
    adapter: 'sqlite3',
    database: 'db/listr.db'
  }
)



DB[:conn].execute("DROP TABLE IF EXISTS posts")
DB[:conn].execute("DROP TABLE IF EXISTS authors")


DB[:conn].results_as_hash = true




post_sql = <<-SQL
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY,
    content TEXT
  )

SQL
DB[:conn].execute(post_sql)


author_sql = <<-SQL
  CREATE TABLE IF NOT EXISTS authors (
    id INTEGER PRIMARY KEY,
    name TEXT
  )
SQL
DB[:conn].execute(author_sql)


comment_sql = <<-SQL
  CREATE TABLE IF NOT EXISTS comments(
    id INTEGER PRIMARY KEY,
    body TEXT
  )
SQL
DB[:conn].execute(comment_sql)

require_relative '../lib/dr/dynamic_record'
require_relative '../lib/comment'
require_relative '../lib/post'
require_relative '../lib/author'
