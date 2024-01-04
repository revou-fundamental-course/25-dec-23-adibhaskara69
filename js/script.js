// segitiga
var buttonLuasSegitiga = document.getElementById('button-luas-segitiga');
var contentLuasSegitiga = document.getElementById('content-luas-segitiga');
var buttonKelilingSegitiga = document.getElementById('button-keliling-segitiga');
var contenKelilingSegitiga = document.getElementById('content-keliling-segitiga');

//button luas segitiga ketika di klik
buttonLuasSegitiga.addEventListener("click", function() {
    //memanggil fungsi showContent untuk menampilkan content luas segitiga
    showContent(contentLuasSegitiga);
    //memanggil fungsi showContent untuk menyembunyikan content keliling segitiga
    hideContent(contenKelilingSegitiga);
    //pada button luas segitiga ditambahkan class active untuk merubah warna
    buttonLuasSegitiga.classList.add("active");
    ///pada button keliling segitiga dihilangkan class active untuk merubah tanpa warna
    buttonKelilingSegitiga.classList.remove("active");
});

//button keliling segitiga ketika di klik
buttonKelilingSegitiga.addEventListener("click", function() {
    showContent(contenKelilingSegitiga);
    hideContent(contentLuasSegitiga);
    buttonKelilingSegitiga.classList.add("active");
    buttonLuasSegitiga.classList.remove("active");
});

var hitungLuasButton = document.getElementById('hitung-luas-segitiga');
var alasInput = document.getElementById('alas-segitiga');
var tinggiInput = document.getElementById('tinggi-segitiga');
var hasilLuas = document.getElementById('hasil-luas');

hitungLuasButton.addEventListener("click", function() {
    // Reset the result
    hasilLuas.textContent = "0";

    // Validate the form inputs
    if (alasInput.checkValidity() && tinggiInput.checkValidity()) {
        // If valid, calculate the area
        var alas = parseFloat(alasInput.value);
        var tinggi = parseFloat(tinggiInput.value);
        var luas = 0.5 * alas * tinggi;

        // Display the result
        hasilLuas.textContent = luas.toFixed(2);
    } else {
        // If not valid, show an error or take appropriate action
        alert("Masukan nilai berupa angka untuk Alas dan Tinggi Segitiga");
    }
});

var hitungKelilingButton = document.getElementById('hitung-kll-segitiga');
var sisi1Input = document.getElementById('sisi-segitiga-1');
var sisi2Input = document.getElementById('sisi-segitiga-2');
var sisi3Input = document.getElementById('sisi-segitiga-3');
var hasilKll = document.getElementById('hasil-kll');

hitungKelilingButton.addEventListener("click", function() {
    // Reset the result
    hasilKll.textContent = "0";

    // Validate the form inputs
    if (sisi1Input.checkValidity() && sisi2Input.checkValidity() && sisi3Input.checkValidity()) {
        // If valid, calculate the perimeter
        var sisi1 = parseFloat(sisi1Input.value);
        var sisi2 = parseFloat(sisi2Input.value);
        var sisi3 = parseFloat(sisi3Input.value);
        var keliling = sisi1 + sisi2 + sisi3;

        // Display the result
        hasilKll.textContent = keliling.toFixed(2);
    } else {
        // If not valid, show an error or take appropriate action
        alert("Masukan nilai berupa angka untuk masing-masing sisi segitiga");
    }
});


function showContent(element) {
    element.style.display = "block";
}

function hideContent(element) {
    element.style.display = "none";
}
