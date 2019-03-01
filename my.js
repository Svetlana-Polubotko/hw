document.addEventListener('DOMContentLoaded', function(){ 
	let red = document.getElementById('red');
	let blue = document.getElementById('blue');
	let green = document.getElementById('green');
	let show = document.getElementById('show');
	let squares = document.getElementsByClassName('square');

	show.addEventListener('click', function() {
		let color = document.getElementById('color').value;

		for (var i = 0; i < squares.length; i++) {
		   squares[i].classList.remove('active');
		}
		
		if (color == "красный") {
			
			red.classList.add('active');
		}
		else if (color == "зеленый") {
			
			green.classList.add('active');
		}
		else if (color == "синий") {
			
			blue.classList.add('active');
		}
		else {
			
			alert('такого цветного блока нет');
		}
	});

	    
});