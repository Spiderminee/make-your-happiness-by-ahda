const awal = document.querySelector(".awal");
const pelit = document.querySelector(".pelit");
const makasih = document.querySelector(".give-name");
const senyum2 = document.querySelector(".senyum2");
const perkenalan = document.querySelector(".perkenalan-awal");
const kanjut = document.querySelector(".lanjut-kenalan");
const btnKanjut = document.querySelector(".btn-kanjut");
const stopi = document.querySelector(".cerita-topi");
const btnTopi = document.querySelector(".btn-topi");
const tunggu = document.querySelector(".tungguya");
const pTopi = document.querySelector(".pake-topi");
const salamA = document.querySelector(".salam-a");
const btnTanjut = document.querySelector(".btn-tanjut");
const lanjutTunggu = document.querySelector(".lanjut-tunggu");
const stopi2 = document.querySelector(".cerita-topi2");
const sedih3 = document.querySelector(".sedih3");
const btnTopiA = document.querySelector(".topi-a");
const btnTopi4A = document.querySelector(".topi4-a");
const stopi3 = document.querySelector(".cerita-topi3");
const bahagia = document.querySelector(".bahagia");
const btnBahagaia = document.querySelector(".btn-bahagia-selanjutnya");
const sedih2 = document.querySelector(".sedih2");
const nanyaA = document.querySelector(".nanya-a");
const sedih4 = document.querySelector(".sedih4");
const stageAwal = document.querySelector(".stageawal-card");
const stageA = document.querySelector(".stage-a");
const sadS = document.querySelector(".cerita-sedih");
const sCatDead = document.querySelector(".cerita-cat-mati");
const catA = document.querySelector(".cat-a");
const sedih = document.querySelector(".sedih");
const sCatDead2 = document.querySelector(".cerita-cat-mati2");
const sedih5 = document.querySelector(".sedih5");
const cat2A = document.querySelector(".cat2-a");
const sCatDead3 = document.querySelector(".cerita-cat-mati3");
const btnCat3A = document.querySelector(".btn-cat3-a");
const sedih6 = document.querySelector(".sedih6");
const merem = document.querySelector(".tutup-mata");
const nCatA3 = document.querySelector(".next-cat3-a");
const pemberian = document.querySelector(".pemberian");
const ngintip = document.querySelector(".ngintip");
const kucing = document.querySelector(".kucing");
const beriKucing = document.querySelector(".beri-cat");
const ngintipL = document.querySelector(".ngintip-kiri");
const kucingR = document.querySelector(".kucing-kanan");
const nextCat = document.querySelector(".next-cat");
const btnNCat = document.querySelector(".btn-next-cat");
const love = document.querySelector(".love");
const goodEnding = document.querySelector(".good-ending");
const btnGEnding = document.querySelector(".btn-g-ending");
const tamat = document.querySelector(".tamat");
const kalah = document.querySelector(".kalah");

// btn kalah
const salamB = document.querySelector(".salam-b");
const salamC = document.querySelector(".salam-c");
const topiC = document.querySelector(".topi-c");
const nanyaC = document.querySelector(".nanya-c");
const stageB = document.querySelector(".stage-b");
const stageC = document.querySelector(".stage-c");
const catB = document.querySelector(".cat-b");
const catC = document.querySelector(".cat-c");
const cat2B = document.querySelector(".cat2-b");
const cat2C = document.querySelector(".cat2-c");
const beriTai = document.querySelector(".beri-tai");
const beriDog = document.querySelector(".beri-dog");

// Pembukaan
(function () {
  const awal = document.querySelector(".awal");
  const pelit = document.querySelector(".pelit");
  const makasih = document.querySelector(".give-name");
  const kanjut = document.querySelector(".lanjut-kenalan");
  let nanya = confirm("Hai! Selamat datang. Sebelum itu boleh kenalan dulu ga? :D");
  if (nanya === true) {
    let name = prompt("Ketikkan namamu disini");
    alert("Hai " + name + ", nama yang indah yaaa hehe...");
    // berikan rasa terimakasih
    makasih.classList.toggle("d-none");
    awal.classList.toggle("d-none");
    kanjut.classList.toggle("d-none");
  } else {
    // tampilkan kemarahan
    pelit.classList.toggle("d-none");
    awal.classList.toggle("d-none");
    alert("yauda kalo gamau gitu aja repot!");
  }
})();

// Lanjut Kenalan cuyyy
function lanjutknl() {
  kanjut.classList.toggle("d-none");
  perkenalan.classList.toggle("d-none");
  makasih.classList.toggle("d-none");
  senyum2.classList.toggle("d-none");
}
btnKanjut.onclick = lanjutknl;

// cerita topi
function selanjutnyaSalamA() {
  perkenalan.classList.toggle("d-none");
  stopi.classList.toggle("d-none");
  tunggu.classList.toggle("d-none");
  senyum2.classList.toggle("d-none");
}
salamA.onclick = selanjutnyaSalamA;

// tentang topi
function selanjutnyaBaikla() {
  stopi.classList.toggle("d-none");
  tunggu.classList.toggle("d-none");
  lanjutTunggu.classList.toggle("d-none");
}
btnTopi.onclick = selanjutnyaBaikla;

// menunggu make topi
function selanjutnyaTopi() {
  // hilangkan
  lanjutTunggu.classList.toggle("d-none");
  pTopi.classList.toggle("d-none");
  // munculkan
  stopi2.classList.toggle("d-none");
}
btnTanjut.onclick = selanjutnyaTopi;

// Cerita kucing mati awal
function jawabTopiA() {
  // hilangkan
  pTopi.classList.toggle("d-none");
  stopi2.classList.toggle("d-none");
  // munculkan
  stopi3.classList.toggle("d-none");
  bahagia.classList.toggle("d-none");
}
btnTopiA.onclick = jawabTopiA;

// Cerita kucing mati awal2 tandai
function selanjutnyaBahagia() {
  // hilangkan
  stopi3.classList.toggle("d-none");
  bahagia.classList.toggle("d-none");
  // munculkan
  sedih3.classList.toggle("d-none");
  sadS.classList.toggle("d-none");
}
btnBahagaia.onclick = selanjutnyaBahagia;

//  Cerita kucing mati isi tandai
function selanjutnyaNanyaA() {
  // hilangkan
  sedih3.classList.toggle("d-none");
  sadS.classList.toggle("d-none");
  // munculkan
  sedih2.classList.toggle("d-none");
  stageAwal.classList.toggle("d-none");
}
nanyaA.onclick = selanjutnyaNanyaA;

// cerita kucing mati tandai
function selanjutnyaStageA() {
  // hilangkan
  sedih2.classList.toggle("d-none");
  stageAwal.classList.toggle("d-none");
  // munculkan
  sedih4.classList.toggle("d-none");
  sCatDead.classList.toggle("d-none");
}
stageA.onclick = selanjutnyaStageA;

// respon cerita kucing
function jawabCatA() {
  // hilangkan
  sedih4.classList.toggle("d-none");
  sCatDead.classList.toggle("d-none");
  // munculkan
  sedih.classList.toggle("d-none");
  sCatDead2.classList.toggle("d-none");
}
catA.onclick = jawabCatA;

// respon ingin memberikan sesuatu
function selanjutnyaCat2A() {
  // hilangkan
  sedih.classList.toggle("d-none");
  sCatDead2.classList.toggle("d-none");
  // munculkan
  sedih5.classList.toggle("d-none");
  sCatDead3.classList.toggle("d-none");
}
cat2A.onclick = selanjutnyaCat2A;

// respon tutup mata
function selanjutnyaBtnCat3A() {
  // hilangkan
  sedih5.classList.toggle("d-none");
  sCatDead3.classList.toggle("d-none");
  // munculkan
  merem.classList.toggle("d-none");
  sedih6.classList.toggle("d-none");
}
btnCat3A.onclick = selanjutnyaBtnCat3A;

// berikan dia sesuatu
function selanjutnyaNCat3A() {
  // hilangkan
  merem.classList.toggle("d-none");
  sedih6.classList.toggle("d-none");
  // munculkan
  pemberian.classList.toggle("d-none");
  ngintip.classList.toggle("d-none");
}
nCatA3.onclick = selanjutnyaNCat3A;

// ketika memberikan dia kucing
function memberiKucing() {
  // hilangkan
  pemberian.classList.toggle("d-none");
  ngintip.classList.toggle("d-none");
  // munculkan
  ngintipL.classList.toggle("d-none");
  kucingR.classList.toggle("d-none");
  nextCat.classList.toggle("d-none");
}
beriKucing.onclick = memberiKucing;
// perjalanan good ending
function otwGEnding() {
  // hilangkan
  ngintipL.classList.toggle("d-none");
  kucingR.classList.toggle("d-none");
  nextCat.classList.toggle("d-none");
  // munculkan
  love.classList.toggle("d-none");
  goodEnding.classList.toggle("d-none");
}
btnNCat.onclick = otwGEnding;

// tamat
function udahTamat() {
  // hilangkan
  love.classList.toggle("d-none");
  goodEnding.classList.toggle("d-none");
  // munculkan
  tamat.classList.toggle("d-none");
}
btnGEnding.onclick = udahTamat;

// jawaban salah
// jawaban salah perkenalan
function jawabanSalah() {
  // hilangkan
  perkenalan.classList.toggle("d-none");
  senyum2.classList.toggle("d-none");
  // munculkan
  kalah.classList.toggle("d-none");
}
salamB.onclick = jawabanSalah;
salamC.onclick = jawabanSalah;
