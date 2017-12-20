require 'sqlite3'
require 'pry'
require_relative 'artist'
#OBJECT RELATIONAL MAPPING

DB = { :conn => SQLite3::Database.new('./artists.db') }

def create_artist(name)
  sql = <<-SQL
    INSERT INTO artists (name) VALUES (?);
  SQL

  DB[:conn].execute(sql, name)
end

def read_artist(id)
  sql = <<-SQL
    SELECT * FROM artists WHERE id=?
  SQL

  DB[:conn].execute(sql, id)
end

def update_artist(id, name)
  sql = <<-SQL
    UPDATE artists SET name=? WHERE id=?;
  SQL

  DB[:conn].execute(sql, name, id)
end

def delete_artist(id)
  sql = <<-SQL
    DELETE FROM artists WHERE id=?;
  SQL

  DB[:conn].execute(sql, id)
end

binding.pry
puts "Hello"
