var text = [
  "",
  "satu",
  "dua",
  "tiga",
  "empat",
  "lima",
  "enam",
  "tujuh",
  "delapan",
  "sembilan",
  "sepuluh",
  "sebelas",
  "dua belas",
  "tiga belas",
  "empat belas",
  "lima belas",
  "enam belas",
  "tujuh belas",
  "delapan belas",
  "sembilan belas",
  "dua puluh",
];

function perulangan() {
  for (var i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(text[i]);
    } else if (i % 2 == 1) {
      console.log(i);
    }
  }
}

perulangan();
