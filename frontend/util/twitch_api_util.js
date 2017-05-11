export const getTrendingClips = () => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/clips/top',
    data: { limit: 50,
            trending: true,
            language: en
          }
  })
};

export const getGameClips = (game) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/clips/top',
    data: { limit: 50,
            trending: true,
            game: game,
            language: en
          }
  })
}

export const getChannelClips = (channel) => {
  return $.ajax({
    method:"GET",
    url:'https://api.twitch.tv/kraken/clips/top',
    data: { limit: 50,
            trending: true,
            channel: channel,
            language: en
          }
  })
}
