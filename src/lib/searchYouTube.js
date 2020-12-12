



var searchYouTube = ({ key, query, max = 5 }, callback) => {

  console.log('The key is' + key);
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&maxResults=${max}&type=video&videoEmbeddable=true`, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(({items}) => callback(items))
    .catch(error => {
      console.log('Error: ', error);
    })
};


export default searchYouTube;


// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDfk_PPZ9NpiSGngGdwek0SM6XB8bjMAko&q=dogs&maxResults=5&type=video&videoEmbeddable=true


// var searchYouTube = ({ key, query, max = 5 }, callback) => {
//   $.get('https://www.googleapis.com/youtube/v3/search', {
//     part: 'snippet',
//     key: key,
//     q: query,
//     maxResults: max,
//     type: 'video',
//     videoEmbeddable: 'true'
//   })
//     .done(({ items }) => {
//       if (callback) {
//         callback(items);
//       }
//     })
//     .fail(({ responseJSON }) => {
//       responseJSON.error.errors.forEach((err) =>
//         console.error(err)
//       );
//     });
// };


// export default searchYouTube;

