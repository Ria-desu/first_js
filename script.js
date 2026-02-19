// const myPara = document.getElementById("ex1");
// myPara.innerHTML = "This is First JS Tab";

// const myPara2 = document.getElementById("ex2");
// myPara2.innerHTML = "This is Second JS Tab";

// const myPara3 = document.getElementById("ex3");
// myPara3.innerHTML = "This is Third JS Tab";

// const myPara4 = document.getElementById("ex4");
// myPara4.innerHTML = "This is Fourth JS Tab";


const tabs = document.querySelectorAll(".collapse .nav-link");
const contents = document.querySelectorAll(".paragraph");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // Hapus active dari semua tab
    tabs.forEach(t => t.classList.remove("active"));

    // Hapus active dari semua konten
    contents.forEach(c => c.classList.remove("active"));

    // Tambahkan active ke tab yang diklik
    tab.classList.add("active");

    // Ambil data-tab
    const tabNumber = tab.getAttribute("data-tab");

    // Tampilkan konten yang sesuai
    document
      .getElementById("tab-" + tabNumber)
      .classList.add("active");
  });
});
