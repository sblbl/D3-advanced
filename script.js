const svgEl = document.getElementById('chart')
const width = svgEl.getAttribute('width')
const height = svgEl.getAttribute('height')
const padding = 32
const svg = d3.select('#chart')
let pointsColor1 = '#87CEFA' // the colour of one of the Countries
let pointsColor2 = '#90EE90' // the colour of one of the Countries
let textColor = '#194d30'

// in dataset.js you see that the data is in comma separated values format. 
// this is a way to decode it by also expliciting the types, so that the d3 dataset is correctly made
const data = d3.csvParse(dataset, d => {
	return {
		date : new Date(+d.year, +d.month-1, +d.day),
		cases : +d.cases, // + indicates a number (by default all vals are strings)
		deaths : +d.deaths,
		country : d.country,
		pop2019 : +d.pop2019,
		continent : d.continent,
		cum14 : +d.cum14daysCasesPer100000
	}
})

// sorting the dataset by date
data.sort((a, b) => d3.ascending(a.date, b.date))