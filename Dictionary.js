function once(){
document.getElementById("search").addEventListener("keypress", function(event){
 if(event.key ="enter"){Api();}   
});
}
function audio2(){
var aud = document.getElementById("audio");
var audio = new Audio(aud.value);
document.getElementById("play").addEventListener("click",audio.play());
}

async function Api(){
var url1 = "https://api.dictionaryapi.dev/api/v2/entries/en/";
var search =document.getElementById("search").value;
var url = url1 + search;
var response = await fetch(url);

var data = await response.json();
var data1 = JSON.stringify(data);
//  alert(data1);
var data2 = data1.split('"')[1];
if(data2=="title"){alert("word not found")}
var word = data[0].word;
var phonetic = data[0].phonetics[0].text;
if (data[0].phonetics[0].audio==""){
var audio = data[0].phonetics[1].audio;}
else{var audio = data[0].phonetics[0].audio;}
document.getElementById("audio").value = audio;
//var audio1 = document.getElementById("audio").value;
//alert(audio);
//var radio = new Audio(audio1);
var pos1 = data[0].meanings[0].partOfSpeech;
var def1 = data[0].meanings[0].definitions[0].definition;
var syn1 = data[0].meanings[0].definitions[0].synonyms;
var ant1 = data[0].meanings[0].definitions[0].antonyms;
var exm1 = data[0].meanings[0].definitions[0].example;
if (data[0].meanings[0].definitions[1]){
var def2 = data[0].meanings[0].definitions[1].definition;
var syn2 = data[0].meanings[0].definitions[1].synonyms;
var ant2 = data[0].meanings[0].definitions[1].antonyms;
var exm2 = data[0].meanings[0].definitions[1].example;}
if (data[0].meanings[0].definitions[2]){
var def3 = data[0].meanings[0].definitions[2].definition;
var syn3 = data[0].meanings[0].definitions[2].synonyms;
var ant3 = data[0].meanings[0].definitions[2].antonyms;
var exm3 = data[0].meanings[0].definitions[2].example;}
if (data[0].meanings[0].definitions[3]){
var def4 = data[0].meanings[0].definitions[3].definition;
var syn4 = data[0].meanings[0].definitions[3].synonyms;
var ant4 = data[0].meanings[0].definitions[3].antonyms;
var exm4 = data[0].meanings[0].definitions[3].example;}
if (data[0].meanings[0].definitions[4]){
var def5 = data[0].meanings[0].definitions[4].definition;
var syn5 = data[0].meanings[0].definitions[4].synonyms;
var ant5 = data[0].meanings[0].definitions[4].antonyms;
var exm5 = data[0].meanings[0].definitions[4].example;}
if (data[0].meanings[0].definitions[5]){
var def6 = data[0].meanings[0].definitions[5].definition;
var syn6 = data[0].meanings[0].definitions[5].synonyms;
var ant6 = data[0].meanings[0].definitions[5].antonyms;
var exm6 = data[0].meanings[0].definitions[5].example;}
if (data[0].meanings[0].definitions[6]){
var def7 = data[0].meanings[0].definitions[6].definition;
var syn7 = data[0].meanings[0].definitions[6].synonyms;
var ant7 = data[0].meanings[0].definitions[6].antonyms;
var exm7 = data[0].meanings[0].definitions[6].example;}
if (data[0].meanings[0].definitions[7]){
var def8 = data[0].meanings[0].definitions[7].definition;
var syn8 = data[0].meanings[0].definitions[7].synonyms;
var ant8 = data[0].meanings[0].definitions[7].antonyms;
var exm8 = data[0].meanings[0].definitions[7].example;}
if (data[0].meanings[0].definitions[8]){
var def9 = data[0].meanings[0].definitions[8].definition;
var syn9 = data[0].meanings[0].definitions[8].synonyms;
var ant9 = data[0].meanings[0].definitions[8].antonyms;
var exm9 = data[0].meanings[0].definitions[8].example;}
if (data[0].meanings[0].definitions[9]){
var def10 = data[0].meanings[0].definitions[9].definition;
var syn10 = data[0].meanings[0].definitions[9].synonyms;
var ant10 = data[0].meanings[0].definitions[9].antonyms;
var exm10 = data[0].meanings[0].definitions[9].example;}
var src = data[0].sourceUrls;
if (data[0].meanings[1]){
//alert("data1");
var pos2 = data[0].meanings[1].partOfSpeech;
var def21 = data[0].meanings[1].definitions[0].definition;
var syn21 = data[0].meanings[1].definitions[0].synonyms;
var ant21 = data[0].meanings[1].definitions[0].antonyms;
var exm21 = data[0].meanings[1].definitions[0].example;

if (data[0].meanings[1].definitions[3]){
var def22 = data[0].meanings[1].definitions[1].definition;
var syn22 = data[0].meanings[1].definitions[1].synonyms;
var ant22 = data[0].meanings[1].definitions[1].antonyms;
var exm22 = data[0].meanings[1].definitions[1].example;}

if (data[0].meanings[1].definitions[2]){
var def23 = data[0].meanings[1].definitions[2].definition;
var syn23 = data[0].meanings[1].definitions[2].synonyms;
var ant23 = data[0].meanings[1].definitions[2].antonyms;
var exm23 = data[0].meanings[1].definitions[2].example;}

if (data[0].meanings[1].definitions[3]){
var def24 = data[0].meanings[1].definitions[3].definition;
var syn24 = data[0].meanings[1].definitions[3].synonyms;
var ant24 = data[0].meanings[1].definitions[3].antonyms;
var exm24 = data[0].meanings[1].definitions[3].example;}

if (data[0].meanings[1].definitions[4]){
var def25 = data[0].meanings[1].definitions[4].definition;
var syn25 = data[0].meanings[1].definitions[4].synonyms;
var ant25 = data[0].meanings[1].definitions[4].antonyms;
var exm25 = data[0].meanings[1].definitions[4].example;}

if (data[0].meanings[1].definitions[5]){
var def26 = data[0].meanings[1].definitions[5].definition;
var syn26 = data[0].meanings[1].definitions[5].synonyms;
var ant26 = data[0].meanings[1].definitions[5].antonyms;
var exm26 = data[0].meanings[1].definitions[5].example;}
}
if (syn1 == undefined){syn1=""};
if (syn2 == undefined){syn2=""};
if (syn3 == undefined){syn3=""};
if (syn4 == undefined){syn4=""};
if (syn5 == undefined){syn5=""};
if (syn6 == undefined){syn6=""};
if (syn7 == undefined){syn7=""};
if (syn8 == undefined){syn8=""};
if (syn9 == undefined){syn9=""};
if (syn10 == undefined){syn10=""};

if (ant1 == undefined){ant1=""};
if (ant2 == undefined){ant2=""};
if (ant3 == undefined){ant3=""};
if (ant4 == undefined){ant4=""};
if (ant5 == undefined){ant5=""};
if (ant6 == undefined){ant6=""};
if (ant7 == undefined){ant7=""};
if (ant8 == undefined){ant8=""};
if (ant9 == undefined){ant9=""};
if (ant10 == undefined){ant10=""};

if (syn21 == undefined){syn21=""};
if (syn22 == undefined){syn22=""};
if (syn23 == undefined){syn23=""};
if (syn24 == undefined){syn24=""};
if (syn25 == undefined){syn25=""};
if (syn26 == undefined){syn26=""};

if (ant21 == undefined){ant21=""};
if (ant22 == undefined){ant22=""};
if (ant23 == undefined){ant23=""};
if (ant24 == undefined){ant24=""};
if (ant25 == undefined){ant25=""};
if (ant26 == undefined){ant26=""};

if(pos2 == undefined){document.getElementById("part2").style.display="none";}
else{document.getElementById("part2").style.display="block"}
if(def2 == undefined){
document.getElementById("two").style.display="none";
}else{document.getElementById("two").style.display="block"}
if(def3 == undefined){
document.getElementById("thr").style.display="none";
}else{document.getElementById("thr").style.display="block"}
if(def4 == undefined){
document.getElementById("four").style.display="none";
}else{document.getElementById("four").style.display="block"}
if(def5 == undefined){
document.getElementById("five").style.display="none";
}else{document.getElementById("five").style.display="block"}
if(def6 == undefined){
document.getElementById("six").style.display="none";
}else{document.getElementById("six").style.display="block"}
if(def7 == undefined){
document.getElementById("svn").style.display="none";
}else{document.getElementById("svn").style.display="block"}
if(def8 == undefined){
document.getElementById("eht").style.display="none";
}else{document.getElementById("eht").style.display="block"}
if(def9 == undefined){
document.getElementById("nine").style.display="none";
}else{document.getElementById("nine").style.display="block"}
if(def10 == undefined){
document.getElementById("ten").style.display="none";
}else{document.getElementById("ten").style.display="block"}

if(exm1 == undefined){
document.getElementById("exm1").style.display="none";
}else{document.getElementById("exm1").style.display="block"}
if(exm2 == undefined){
document.getElementById("exm2").style.display="none";
}else{document.getElementById("exm2").style.display="block"}
if(exm3 == undefined){
document.getElementById("exm3").style.display="none";
}else{document.getElementById("exm3").style.display="block"}
if(exm4 == undefined){
document.getElementById("exm4").style.display="none";
}else{document.getElementById("exm4").style.display="block"}
if(exm5 == undefined){
document.getElementById("exm5").style.display="none";
}else{document.getElementById("exm5").style.display="block"}
if(exm6 == undefined){
document.getElementById("exm6").style.display="none";
}else{document.getElementById("exm6").style.display="block"}
if(exm7 == undefined){
document.getElementById("exm7").style.display="none";
}else{document.getElementById("exm7").style.display="block"}
if(exm8 == undefined){
document.getElementById("exm8").style.display="none";
}else{document.getElementById("exm8").style.display="block"}
if(exm9 == undefined){
document.getElementById("exm9").style.display="none";
}else{document.getElementById("exm9").style.display="block"}
if(exm10 == undefined){
document.getElementById("exm10").style.display="none";
}else{document.getElementById("exm10").style.display="block"}

if(def22 == undefined){
document.getElementById("p22").style.display="none";
}else{document.getElementById("p22").style.display="block"}
if(def23 == undefined){
document.getElementById("p23").style.display="none";
}else{document.getElementById("p23").style.display="block"}
if(def24 == undefined){
document.getElementById("p24").style.display="none";
}else{document.getElementById("p24").style.display="block"}
if(def25 == undefined){
document.getElementById("p25").style.display="none";
}else{document.getElementById("p25").style.display="block"}
if(def26 == undefined){
document.getElementById("p26").style.display="none";
}else{document.getElementById("p26").style.display="block"}

if(exm21 == undefined){
document.getElementById("exm21").style.display="none";
}else{document.getElementById("exm21").style.display="block"}
if(exm22 == undefined){
document.getElementById("exm22").style.display="none";
}else{document.getElementById("exm22").style.display="block"}
if(exm23 == undefined){
document.getElementById("exm23").style.display="none";
}else{document.getElementById("exm23").style.display="block"}
if(exm24 == undefined){
document.getElementById("exm24").style.display="none";
}else{document.getElementById("exm24").style.display="block"}
if(exm25 == undefined){
document.getElementById("exm25").style.display="none";
}else{document.getElementById("exm25").style.display="block"}
if(exm26 == undefined){
document.getElementById("exm26").style.display="none";
}else{document.getElementById("exm26").style.display="block"}

var synonyms = syn1 + syn2 + syn3 + syn4 + syn5 + syn6 + syn7 + syn8 + syn9 + syn10;
var antonyms = ant1 + ant2 + ant3 + ant4 + ant5 + ant6 + ant7 + ant8 + ant9 + ant10;
var synonyms2 = syn21 + syn22 + syn23 + syn24 + syn25 + syn26;
var antonyms2 = ant21 + ant22 + ant23 + ant24 + ant25 + ant26;

if (synonyms==""){
 document.getElementById("syn").style.display="none"
}
else{document.getElementById("syn").style.display="block"}
if (antonyms==""){
 document.getElementById("ant").style.display="none"
}
else{document.getElementById("ant").style.display="block"}

if (synonyms2==""){
 document.getElementById("syn2").style.display="none"
}
else{document.getElementById("syn2").style.display="block"}
if (antonyms2==""){
 document.getElementById("ant2").style.display="none"
}
else{document.getElementById("ant2").style.display="block"}

document.getElementById("word").innerText=word;
document.getElementById("phonetic").innerText=phonetic;
document.getElementById("pos1").innerText=pos1;
document.getElementById("def1").innerText=def1;
//document.getElementById("syn1").innerText=syn1;
//document.getElementById("ant1").innerText=ant1;
document.getElementById("exm1").innerText=exm1;
document.getElementById("def2").innerText=def2;
//document.getElementById("syn2").innerText=syn2;
//document.getElementById("ant2").innerText=ant2;
document.getElementById("exm2").innerText=exm2;
document.getElementById("def3").innerText=def3;
//document.getElementById("syn3").innerText=syn3;
//document.getElementById("ant3").innerText=ant3;
document.getElementById("exm3").innerText=exm3;
document.getElementById("def4").innerText=def4;
//document.getElementById("syn4").innerText=syn4;
//document.getElementById("ant4").innerText=ant4;
document.getElementById("exm4").innerText=exm4;
document.getElementById("def5").innerText=def5;
//document.getElementById("syn5").innerText=syn5;
//document.getElementById("ant5").innerText=ant5;
document.getElementById("exm5").innerText=exm5;
document.getElementById("def6").innerText=def6;
document.getElementById("exm6").innerText=exm6;
document.getElementById("def7").innerText=def7;
document.getElementById("exm7").innerText=exm7;
document.getElementById("def8").innerText=def8;
document.getElementById("exm8").innerText=exm8;
document.getElementById("def9").innerText=def9;
document.getElementById("exm9").innerText=exm9;
document.getElementById("def10").innerText=def10;
document.getElementById("exm10").innerText=exm6;
document.getElementById("synonyms").innerText=synonyms;
document.getElementById("antonyms").innerText=antonyms;
document.getElementById("src").innerText=src;
document.getElementById("pos2").innerText=pos2;
document.getElementById("def21").innerText=def21;
document.getElementById("exm21").innerText=exm21;
document.getElementById("def22").innerText=def22;
document.getElementById("exm22").innerText=exm22;
document.getElementById("def23").innerText=def23;
document.getElementById("exm23").innerText=exm23;
document.getElementById("def24").innerText=def24;
document.getElementById("exm24").innerText=exm24;
document.getElementById("def25").innerText=def25;
document.getElementById("exm25").innerText=exm25;
document.getElementById("def26").innerText=def26;
document.getElementById("exm26").innerText=exm26;
document.getElementById("antonyms2").innerText=antonyms2;
document.getElementById("synonyms2").innerText=synonyms2;
}
