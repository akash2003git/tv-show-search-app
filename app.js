const inputForm = document.querySelector("form");
const searchQuery = document.querySelector("#searchBar");
const outputBox = document.querySelector(".wrapper");

inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  outputBox.innerHTML = "";
  const searchTerm = searchQuery.value;
  const res = await getTvShow(searchTerm);
  makeImages(res.data);
  searchQuery.value = "";
});

const getTvShow = async (searchTerm) => {
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  return res;
};

const makeImages = (data) => {
  for (let item of data) {
    if (item.show.image) {
      const img = document.createElement("img");
      img.src = item.show.image.medium;
      outputBox.append(img);
    }
  }
};
