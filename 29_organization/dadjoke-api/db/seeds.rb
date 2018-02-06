# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jokes = ["What did one nut say as he chased another nut?  I\'m a cashew!",
"I knew I shouldn\'t steal a mixer from work, but it was a whisk I was willing to take.",
"A steak pun is a rare medium well done.",
"Why did the tomato blush? Because it saw the salad dressing.",
"Did you hear the joke about the wandering nun? She was a roman catholic.",
"I\'ll tell you what often gets over looked... garden fences.",
"Why do birds fly south for the winter? Because it\'s too far to walk.",
"What is a centipedes\'s favorite Beatle song?  I want to hold your hand, hand, hand, hand...",
"My first time using an elevator was an uplifting experience. The second time let me down.",
"To be Frank, I\'d have to change my name.",
"Slept like a log last night … woke up in the fireplace.",
"Did you hear about the blind circumciser... he got the sack.",
"Why does a Moon-rock taste better than an Earth-rock? Because it\'s a little meteor.",
"I thought my wife was joking when she said she\'d leave me if I didn\'t stop signing \"I\'m A Believer\"... Then I saw her face.",
"What do you call two barracuda fish?  A Pairacuda!",
"Why is Peter Pan always flying? Because he Neverlands.",
"What do you do on a remote island? Try and find the TV island it belongs to.",
"Did you know that protons have mass? I didn\'t even know they were catholic.",
"Dad I’m hungry’ … ‘Hi hungry I’m dad",
"I was fired from the keyboard factory yesterday.  I wasn\'t putting in enough shifts."]

jokes.each do |joke|
  Joke.create(joke: joke)
end
