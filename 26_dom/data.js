const GifApi = (function() {
  let gifs = [
    {
      title: "When you swore you read that code in the readings",
      url: "https://media.giphy.com/media/H4zeDO4ocDYqY/giphy.gif"
    },
    {
      title: "Stacking Bitcoin Gains",
      url: "https://media.giphy.com/media/3oEdvbpl0X32bXD2Vi/giphy.gif"
    },
    {
      title: "PHP Developer",
      url: "https://media.giphy.com/media/zOvBKUUEERdNm/giphy.gif"
    },
    {
      title: "Waiting for Learn test to pass",
      url: "https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif"
    },
    {
      title: "When you find you're not using Sinatra ever again",
      url: "https://media.giphy.com/media/ySpxjJmsq9gsw/giphy.gif"
    },
    {
      title: "After you deliver a bomb blog",
      url: "https://media.giphy.com/media/wGlm5NGNBcyI0/giphy.gif"
    }
  ];
  return {
    fetchGifs() {
      return gifs;
    }
  };
})();
