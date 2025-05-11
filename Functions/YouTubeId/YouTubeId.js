const YOUTUBEUD = (url, callback) => {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);

  if (match && match[1]) {
    callback(match[1]);
  } else {
    callback(null); // Invalid or no ID found
  }
};

export { YOUTUBEUD };
