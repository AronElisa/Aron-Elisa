//Cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("img")
var asteptari = document.getElementById("educatie")
var an= document.getElementById("anNastere")

const d = new Date()
var year = d.getFullYear()

// Add eventListener to button
button.addEventListener("click",InViitor)
an.addEventListener("mouseover", displayAge)

function displayAge()
{
	an.innerHTML = year - an.innerHTML
}

function InViitor()
{
	nume.innerHTML="Functie:Programator"
	prenume.innerHTML="Loc de munca: Londra"
	asteptari.innerHTML="Experiente: <ol><li>intership</li><li>licenta</li><ol>"
	
	img.src= "Elisa.jpg"
	body.style.backgroundColor="orange"
	body.style.color="yellow"
	
	img.style.opacity = "70%"
	img.style.borderWidth = "25px"
	img.style.width = "300px"
	img.style.height = "200px"
}


	