require_relative "../config/environment"



class BankAccount

  @@all = []


  attr_accessor :balance, :customer
  attr_reader :number

  def initialize(number, balance, customer)
    @number = number
    @balance = balance
    @customer = customer
    @@all << self
  end

  def deposit(val)
    # binding.pry
    puts "Depositing to your account"
    puts "Before Balance #{balance}"
    self.balance = self.balance + val
    self.balance

  end


  def withdraw
    self.balance = self.balance - val
    self.balance
  end



  def self.all
    @@all
  end


  # I want to know the customers who have more than 10000


  def self.premium_members
      self.all.select do |member|
        member.balance > 10000
      end
  end

end

Pry.start
