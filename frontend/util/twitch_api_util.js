export const getTrendingClips = () => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/clips/top',
    headers: {
      'Client-ID': 'n39nvsdj2kfqihsrucbbaayrqtayjy',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { limit: 50,
            trending: true,
            language: 'en'
          }
  })
};

export const getGameClips = (game) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/clips/top',
    headers: {
      'Client-ID': 'n39nvsdj2kfqihsrucbbaayrqtayjy',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { limit: 50,
            trending: true,
            game: game,
            language: 'en'
          }
  })
}

export const queryGame = (search) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/search/games',
    headers: {
      'Client-ID': 'n39nvsdj2kfqihsrucbbaayrqtayjy',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { query: search,
            limit: 50
          }
  })
}

export const queryChannel = (search) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/search/channels',
    headers: {
      'Client-ID': 'n39nvsdj2kfqihsrucbbaayrqtayjy',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { query: search,
            limit: 50
          }
  })
}

export const topGames = () => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/games/top',
    headers: {
      'Client-ID': 'n39nvsdj2kfqihsrucbbaayrqtayjy',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: {
            limit: 25
          }
  })
}

export const getChannelClips = (channel) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/clips/top',
    headers: {
      'Client-ID': 'n39nvsdj2kfqihsrucbbaayrqtayjy',
      'Accept': 'application/vnd.twitchtv.v5+json'
    },
    data: { limit: 50,
            trending: true,
            channel: channel,
            language: 'en'
          }
  })
}
