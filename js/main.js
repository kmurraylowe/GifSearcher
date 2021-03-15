// let findGif = document.querySelector(".gifSearch").value

document.getElementById("mainBtn").addEventListener("click", gifSearch)
document.querySelector('.gifSearch').addEventListener('keyup', function(event){
	if(event.keyCode === 13) {
		gifSearch()
	}
})

let giphyParams = 
{
giphyApiKey :  "rGxMUnsp1uSqanIY4SSaMg1iGjD17o5o",
giphySearchUrl : "https://api.giphy.com/v1/gifs/search",
// offset: Math.floor(Math.random()*1000),
}


async function gifSearch(){
	let offset = Math.floor(Math.random()*100)
	let findGif = document.querySelector(".gifSearch").value
	if(findGif === ""){
		alert("Please enter a search... Please")
	}
	// fetch our data
	const url = `${giphyParams.giphySearchUrl}?api_key=${giphyParams.giphyApiKey}&q=${findGif}&limit=1&offset=${offset}`
	const response = await fetch (url)
	const gifData = await response.json()
	const gifUrl = gifData.data[0].url

	console.log(findGif)
	document.querySelector('.mainDisplay').src = gifData.data[0].embed_url
	document.querySelector('.urlLink').setAttribute('href', gifUrl)
	document.querySelector('.urlDisplay').innerText = gifUrl
	

} 














