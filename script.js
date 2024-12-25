

function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let rad = document.getElementById('radius').value;

	if(isNaN(rad) || rad<0){
		document.getElementById('volume').value = 'NaN';
		return;
	}
	let vol = (4/3) * (Math.PI) * (Math.pow(rad,3));
	vol = vol.toFixed(4);
	document.getElementById('volume').value = vol;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
