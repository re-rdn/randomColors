let colorHEX = null
let colorShadow = null
let generationColorInterval = null

window.addEventListener('load', () => {
	intervalWrapper()

	document.querySelector('.color-wrapper__color').addEventListener('mouseover', () => {
		clearInterval(generationColorInterval)
		document.querySelector('.color-wrapper__color').classList.add('vibrate-2')
	})
	document.querySelector('.color-wrapper__color').addEventListener('mouseout', () => {
		intervalWrapper()
		document.querySelector('.color-wrapper__color').classList.remove('vibrate-2')
	})
})

const generationColor = (symbolHEX = `0123456789abcdef`, HEXlength = 6) => {
	let color = ''
	for (var i = 0; i < HEXlength; i++) {
		color += symbolHEX.charAt(Math.floor(Math.random() * symbolHEX.length))
	}
	colorHEX = '#' + color
}

const hex2rgb = colorHEX => {
	var bigint = parseInt(colorHEX.split('#')[1], 16)
	var r = (bigint >> 16) & 255
	var g = (bigint >> 8) & 255
	var b = bigint & 255

	colorShadow = 'rgba(' + r + ',' + g + ',' + b + ',0.2)'
}

const intervalWrapper = () => {
	generationColorInterval = setInterval(() => {
		generationColor()

		document.querySelector('.color-wrapper__color').style.backgroundColor = colorHEX
		document.querySelector('.color-wrapper__color-val').innerHTML = colorHEX
		document.querySelector('.color-wrapper__color-val').style.color = colorHEX
		hex2rgb(colorHEX)

		document.querySelector('.color-wrapper__color').style.boxShadow = `0px 0px 28px 29px ${colorShadow}`
	}, 1300)
}
