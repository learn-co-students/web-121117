require 'rest-client'
require 'json'
require 'pry'

def get_books_from_api(genre)
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=subject:#{genre}&maxResults=40")
  books = JSON.parse(response)
  binding.pry
end
