class DynamicRecord






  def self.set_attributes
    self.column_names.each do |col|
      attr_accessor(col.to_sym)
      # attr_accessor :content
    end
  end



  def self.table_name
    "#{self.to_s.downcase}s"
  end

  def self.column_names
    result = DB[:conn].execute("PRAGMA table_info (#{self.table_name})")
    result.map do |col_info|
      col_info['name']
    end
  end


  def self.all
    # LOOKING AT THE DB  AND CREATING NEW INSTANCES AND RETURNING AN ARRAY OF INSTANCES
    sql = <<-SQL
      SELECT * FROM #{table_name}
    SQL

    results = DB[:conn].execute(sql)
    results.map do |row|
      props = row.reject do |k, v|
        k.is_a?(Fixnum)
      end
      self.new(props)
    end
  end

  def initialize(props={})

    # MASS ASSIGNMENT
    # ASSIGN ? MASS

    props.each do |attribute, value|
      self.send("#{attribute}=", value)
    end

  end


  def save
    if persisted?
      update
    else
      insert
    end
    self
  end

  def persisted?
    !!self.id
  end

  def values_for_insert

    attributes = self.class.column_names.reject { |col| col == 'id' }
    attributes.map do |attribute|
      "'#{self.send(attribute)}'"
    end.join(', ')
  end

  private

  def self.col_names_for_insert
    column_names.reject { |col| col == 'id' }.join(', ')
  end


  def insert
    sql = <<-SQL
    INSERT INTO #{self.class.table_name} (#{self.class.col_names_for_insert})
    VALUES (#{self.values_for_insert})
    SQL

    DB[:conn].execute(sql)

    last_row_sql = <<-SQL
    SELECT id FROM #{self.class.table_name}
    ORDER BY id DESC
    LIMIT 1
    SQL

    @id = DB[:conn].execute(last_row_sql).first['id']
  end

  def update
    sql = <<-SQL
    UPDATE tweets
    SET message = ?, username = ?
    WHERE id = #{self.id}
    SQL

    DB[:conn].execute(sql, self.message, self.username)
  end
end
