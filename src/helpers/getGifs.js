
export const getGifs = async (categories) => {

    const apiKey = "epzrRJlwA8F4cbYs50uAQj8OR5oK295x"

    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&&q=${encodeURI(categories)}&&limit=10`)

    const { data } = await respuesta.json()

    const gifs = data.map(gif => {
        return {
            url: gif.images?.downsized_medium.url,
            id: gif.id,
            title: gif.title
        }
    })
    return gifs
}
