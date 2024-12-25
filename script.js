function volume_sphere() {
    //Write your code here
	let rad = document.getElementById('radius').value;
	let vol = (4/3) * (Math.PI) * (Math.pow(rad,3));
	document.getElementById('volume').value = vol;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
