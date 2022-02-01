export  const getGifs = async (category) => {
   
    const apiKey = 'ed0ijcD8Xv8TKiiVrWxtciJB6Kb1spem'
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category) }&limit=10&api_key=${apiKey}`;
    const response = await fetch(url);
    const { data } = await response.json();

    const getImg = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return getImg;
  };