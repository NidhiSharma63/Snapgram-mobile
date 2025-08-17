  const getStoragePathFromUrl = (url: string) => {
    // Example: https://.../o/images%2Fpost_1755411430098.jpg?alt=media&token=xxxx
    const decodedUrl = decodeURIComponent(url);
    const match = decodedUrl.match(/\/o\/(.*?)\?/);
    return match ? match[1] : null; // returns "images/post_1755411430098.jpg"
  };
  export default getStoragePathFromUrl;
