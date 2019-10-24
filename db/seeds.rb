folder_list = [
    [ "Music", "A place for all my links about artists, songs, guitar tabs, etc." ],
    [ "Games", "Links to articles about board games, video games, Magic: The Gathering, Eternal, and others." ],
    [ "Programming Resources", "For articles and documentation about Ruby, Rails, JavaScript, React, whatever." ]
]

folder_list.each do |name, description|
    Folder.create( name: name, description: description )
end

bookmark_list = [
    [ 1, "Spotify", "https://www.spotify.com/", "I like this so much better than Google Play Music.  Need to buy a premium sub..." ],
    [ 2, "Channel Fireball", "https://www.channelfireball.com/", "Good for current Magic: The Gathering info about cards, formats, and the like." ],
    [ 2, "Nintendo", "https://www.nintendo.com/", "I love Mario so much." ],
    [ 3, "Learn", "https://www.learn.co/", "Wow, what a cool site to learn about coding." ]
]

bookmark_list.each do |folder_id, name, url, notes|
    Bookmark.create( folder_id: folder_id, name: name, url: url, notes: notes )
end