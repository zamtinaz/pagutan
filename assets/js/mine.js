var msg = new SpeechSynthesisUtterance();
var suara;
var myTimeout;
function myTimer() {
  speechSynthesis.pause();
  speechSynthesis.resume();
  myTimeout = setTimeout(myTimer, 10000);
}
setTimeout(() => {
  suara = window.speechSynthesis.getVoices();
  msg.voice = suara[11];
  msg.lang = "in-ID";
  msg.rate = 0.9;
}, 1000);
const voice = "Indonesian Female";

const bunyi = (jenis) => {
  try {
    let navbar = document.querySelector("#navbar");
    navbar.className = "navbar";
    let mobileNav = document.querySelector(".mobile-nav-toggle");
    mobileNav.className = "bi mobile-nav-toggle bi-list";
  } catch (error) {
    console.log(error);
  }

  switch (jenis) {
    case "cerai":
      isPlay();
      let el = replace_whitespace(document.getElementById("bunyi-cerai"));
      el = el.replaceAll("KUA", "K U A");
      el = el.replaceAll("...", ",");
      bunyikan("Persyaratan Perceraian", el);
      break;
    case "gugat-waris":
      isPlay();
      let bunyiGugatWaris = replace_whitespace(
        document.getElementById("bunyi-gugat-waris")
      );
      bunyiGugatWaris = bunyiGugatWaris.replaceAll("...", ",");
      bunyikan("Persyaratan gugat waris", bunyiGugatWaris);
      break;
    case "hadhanah":
      isPlay();
      let bunyiHadhanah = replace_whitespace(
        document.getElementById("bunyi-hadhanah")
      );
      bunyiHadhanah = bunyiHadhanah.replaceAll("...", ",");
      bunyikan("Persyaratan Hak Asuh Anak atau Hadhanah", bunyiHadhanah);
      break;
    case "harta-bersama":
      isPlay();
      let bunyiHartaBersama = replace_whitespace(
        document.getElementById("bunyi-harta-bersama")
      );
      bunyiHartaBersama = bunyiHartaBersama.replaceAll("...", ",");
      bunyikan(
        "Persyaratan harta bersama atau harta gono gini",
        bunyiHartaBersama
      );
      break;
    case "isbat-cerai":
      isPlay();
      let bunyiIsbatCerai = replace_whitespace(
        document.getElementById("bunyi-isbat-cerai")
      );
      bunyiIsbatCerai = bunyiIsbatCerai.replaceAll("...", ",");
      bunyiIsbatCerai = bunyiIsbatCerai.replaceAll("KUA", "K U A");
      bunyikan(
        "Persyaratan isbat nikah disertai dengan perceraian",
        bunyiIsbatCerai
      );
      break;
    case "nafkah-anak":
      isPlay();
      let bunyiNafkahAnak = replace_whitespace(
        document.getElementById("bunyi-nafkah-anak")
      );
      bunyiNafkahAnak = bunyiNafkahAnak.replaceAll("...", ",");
      bunyikan("Persyaratan nafkah anak", bunyiNafkahAnak);
      break;
    case "pembatalan-nikah":
      isPlay();
      let bunyiPembatalanNikah = replace_whitespace(
        document.getElementById("bunyi-pembatalan-nikah")
      );
      bunyiPembatalanNikah = bunyiPembatalanNikah.replaceAll("...", ",");
      bunyikan("Persyaratan pembatalan nikah", bunyiPembatalanNikah);
      break;
    case "poligami":
      isPlay();
      let bunyiPoligami = replace_whitespace(
        document.getElementById("bunyi-poligami")
      );
      bunyiPoligami = bunyiPoligami.replaceAll("...", ",");
      bunyikan("Persyaratan izin poligami", bunyiPoligami);
      break;
    case "asal-usul-anak":
      isPlay();
      let bunyiAsalUsulAnak = replace_whitespace(
        document.getElementById("bunyi-asal-usul-anak")
      );
      bunyikan("Persyaratan asal usul anak", bunyiAsalUsulAnak);
      break;
    case "dispensasi-nikah":
      isPlay();
      let bunyiDispensasiNikah = replace_whitespace(
        document.getElementById("bunyi-dispensasi-nikah")
      );
      bunyiDispensasiNikah = bunyiDispensasiNikah.replaceAll("KUA", "K U A");
      bunyikan("Persyaratan dispensasi nikah", bunyiDispensasiNikah);
      break;
    case "isbat-nikah":
      isPlay();
      let bunyiIsbatNikah = replace_whitespace(
        document.getElementById("bunyi-isbat-nikah")
      );
      bunyiIsbatNikah = bunyiIsbatNikah.replaceAll(".....", ",");
      bunyiIsbatNikah = bunyiIsbatNikah.replaceAll("...", ",");
      bunyiIsbatNikah = bunyiIsbatNikah.replaceAll("KUA", "K U A");
      bunyikan(
        "Persyaratan isbat nikah atau pengesahan nikah",
        bunyiIsbatNikah
      );
      break;
    case "pencegahan-nikah":
      isPlay();
      let bunyiPencegahanNikah = replace_whitespace(
        document.getElementById("bunyi-pencegahan-nikah")
      );
      bunyiPencegahanNikah = bunyiPencegahanNikah.replaceAll("...", ",");
      bunyikan("Persyaratan pencegahan nikah", bunyiPencegahanNikah);
      break;
    case "paw":
      isPlay();
      let bunyiPaw = replace_whitespace(document.getElementById("bunyi-paw"));
      bunyiPaw = bunyiPaw.replaceAll("...", ",");
      bunyikan("Persyaratan Penetapan Ahli Waris", bunyiPaw);
      break;
    case "pengangkatan-anak":
      isPlay();
      let bunyiPengangkatanAnak = replace_whitespace(
        document.getElementById("bunyi-pengangkatan-anak")
      );
      bunyikan("Persyaratan pengangkatan anak", bunyiPengangkatanAnak);
      break;
    case "perwalian":
      isPlay();
      let bunyiPerwalian = replace_whitespace(
        document.getElementById("bunyi-perwalian")
      );
      bunyikan("Persyaratan perwalian", bunyiPerwalian);
      break;
    case "wali-adhal":
      isPlay();
      let bunyiWali = replace_whitespace(document.getElementById("bunyi-wali"));
      bunyiWali = bunyiWali.replaceAll("KUA", "K U A");
      bunyiWali = bunyiWali.replaceAll("...", ",");
      bunyikan("Persyaratan wali adhal", bunyiWali);
      break;
    case "eksekusi":
      isPlay();
      let bunyiEksekusi = replace_whitespace(
        document.getElementById("bunyi-eksekusi")
      );
      bunyikan("Persyaratan eksekusi", bunyiEksekusi);
      break;
    default:
      break;
  }
};
const isPlay = () => {
  try {
    speechSynthesis.cancel();
    responsiveVoice.cancel();
  } catch (error) {
    console.log(error);
  }
  // if(speechSynthesis.speaking)
  // {
  //   speechSynthesis.cancel();
  // }

  // if(responsiveVoice.isPlaying())
  // {
  //   responsiveVoice.cancel();
  // }
};
const bunyikan = (title, text) => {
  try {
    // throw new Exception();
    responsiveVoice.speak(title, voice, {
      pitch: 1,
      rate: 0.9,
      volume: 1,
      onend: function () {
        responsiveVoice.speak(text, voice, {
          pitch: 1,
          rate: 0.9,
          volume: 1,
        });
      },
    });
  } catch (error) {
    // myTimeout = setTimeout(myTimer, 10000);
    msg.text = title;
    msg.onend = function () {
      // clearTimeout(myTimeout);
      lanjutkan(text);
    };
    speechSynthesis.speak(msg);
  }
};

const lanjutkan = (text) => {
  const new_text = split_text(text);
  const panjang = new_text.length;
  lanjut_lagi(new_text, panjang);
};

const lanjut_lagi = (text, panjang, iter = 0) => {
  if (iter < panjang) {
    // myTimeout = setTimeout(myTimer, 10000);
    msg.text = text[iter];
    msg.onend = function () {
      // clearTimeout(myTimeout);
      ++iter;
      if (iter < panjang) {
        lanjut_lagi(text, panjang, iter);
      }
    };
    speechSynthesis.speak(msg);
  }
};

function replace_whitespace(element) {
  return element.textContent.replace(/[\n\r]+|[\s]{2,}/g, " ").trim();
}

function split_text(text) {
  return text.match(/.{1,100}(?:\s|$)/g);
}
