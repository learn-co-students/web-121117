DB = { :conn => SQLite3::Database.new('./artists.db') }

class Artist

  attr_accessor :id, :name

  def initialize(id=nil, name)
    # Artist.new(1, "Beyonce")
    # Artist.new("Beyonce")
    @id = id
    @name = name
  end

  def save
    sql = <<-SQL
      INSERT INTO artists (name) VALUES (?);
    SQL

    DB[:conn].execute(sql, name)
  end

  # a = Artist.read(3)
  # a.update("NewName")
  def update(name)
    if artist_exists_in_sql
      sql = <<-SQL
        UPDATE artists SET name=? WHERE id=?;
      SQL

      DB[:conn].execute(sql, name, @id)
      Artist.read(@id)
    else
      # Do Nothing
      puts "Hey that artist doesn't exist in SQL"
      self
    end
  end

  def delete
    if artist_exists_in_sql
      sql = <<-SQL
        DELETE FROM artists WHERE id=?;
      SQL

      DB[:conn].execute(sql, id)
      true
    else
      false
    end
  end

  def artist_exists_in_sql
    @id && Artist.read(@id)
  end

  def self.all
    #@@all
    sql = <<-SQL
      SELECT * FROM artists
    SQL

    response = DB[:conn].execute(sql)
    format_sql_response(response)
  end

  def self.create(name)
    a = Artist.new(name)
    a.save

    a.id = last_artist_id
    a
  end

  def self.read(id)
    sql = <<-SQL
      SELECT * FROM artists WHERE id=? LIMIT 1
    SQL

    response = DB[:conn].execute(sql, id)[0]
    if response
      format_single_sql_response(response)
    else
      nil
    end
  end

  #def self.delete(id)

  #end

  def self.last_artist_id
    sql = <<-SQL
      SELECT id FROM artists ORDER BY id DESC LIMIT 1
    SQL
    # last_insert_rowid() but this is stupid

    DB[:conn].execute(sql)[0][0]
  end


  def self.format_sql_response(response)
    #[[1, "Beyonce"], [2, "Solange"]]
    response.map do |single|
      format_single_sql_response(single)
    end
  end

  def self.format_single_sql_response(response)
    #[1, "Beyonce"]
    Artist.new(response[0], response[1])
  end
end
