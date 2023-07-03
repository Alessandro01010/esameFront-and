const imageIds = ["13914", "51719", "78503", "12345", "16858"];

imageIds.forEach((imgId) => {
  fetch(`https://api.artic.edu/api/v1/artworks/${imgId}`)
    .then((response) => response.json())
    .then((data) => {
      const artwork = data.data;

      const img = document.getElementById(imgId);

      const imageUrl = artwork.image_id
        ? `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,1000/0/default.jpg`
        : "";

      img.src = imageUrl;

      const title = document.createElement("h2");
      title.textContent = artwork.title;

      const author = document.createElement("p");
      author.textContent = `by ${artwork.artist_title}`;

      img.insertAdjacentElement("afterend", title);
      title.insertAdjacentElement("afterend", author);
    })
    .catch((error) => console.log(error));
});
