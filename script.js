
const button = document.getElementById("openBtn");

button.addEventListener("click", () => {

document.body.innerHTML = `

<div style="display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
height:100vh;
background:black;
color:white;
text-align:center;
padding:25px;">

<img src="hafsa.jpg"
style="
width:220px;
height:220px;
border-radius:50%;
border:6px solid hotpink;
box-shadow:0 0 35px hotpink;
object-fit:cover;
">

<h1 style="
margin-top:30px;
font-size:60px;
color:#ff4da6;
font-family:'Great Vibes',cursive;
">

Happy Birthday ❤️

</h1>

<h2>HAFSA (BICHCHU)</h2>

<p style="
margin-top:30px;
font-size:22px;
line-height:38px;
max-width:800px;
">

Wish you many many happy returns of the day Bichchu ❤️

<br><br>

Allah tumhe hamesha khush rakhe,
har dua qubool kare,
aur tumhari zindagi hamesha khushiyon se bhari rahe. 🤲

<br><br>

I miss you so so so much... 🥺

<br><br>

Take Care ❤️

</p>

</div>

`;

});
