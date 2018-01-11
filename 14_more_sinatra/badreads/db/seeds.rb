require "rest-client"
require "json"


genres = ["horror", "fiction", "fantasy", "romance", "nonfiction", "biography"]

genres.each do |g|
  genre = Genre.create(name: g)

  url = "https://www.googleapis.com/books/v1/volumes?q=subject:#{genre.name}&maxResults=40"

  response = RestClient.get(url)

  body = JSON.parse(response.body)

  body["items"].each do |item|
    title = item["volumeInfo"]["title"]
    authors = item["volumeInfo"]["authors"] || [""]
    a = Author.find_or_create_by(name: authors[0])

    b = Book.find_or_create_by(title: title, author_id: a.id)
    genre.books << b
  end
end
