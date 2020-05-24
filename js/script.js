let loadFrontpage = () => {
	const wrapper = document.getElementById("apod");
	let heading = document.getElementById("title");
	let exp = document.getElementById("exp");
	fetch(
		"https://api.nasa.gov/planetary/apod?api_key=7vMdUGzLm3nvOf4g7Twax52H7oskBtJPOqyZxD4T"
	)
		.then((response) => response.json())
		.then((data) => {
			if (data.url) {
				let image = document.createElement("img");

				image.src = data.url;
				image.alt = data.title;

				wrapper.appendChild(image);
			}

			heading.innerHTML = data.title;
			exp.innerHTML = data.explanation;

			setTimeout(function () {
				document.querySelectorAll("#apod img")[0].style.opacity = 1;
			}, 500);
		});
};

function loadGallery() {
	let query = document.getElementById("searchbar").value;
	const productContainer = document.querySelector(".middle-column");
	const wrapper = document.getElementById("search-img");
	let newHTML = "";

	console.log("Searchstring: " + query);

	fetch("https://images-api.nasa.gov/search?q=" + query)
		.then((response) => response.json())
		.then((data) => {
			let media = data.collection.items;
			let counter = 20;
			let resultCollection = "";

			for (let i = 0; i < counter; i++) {
				if (media[i].data[0].media_type == "image") {
					var result = document.createElement("IMG");
					result.setAttribute("src", media[i].links[0].href);
					resultCollection += result.outerHTML;
				} else {
					counter = counter + 1;
				}
			}
			wrapper.innerHTML = resultCollection;
		});
}
