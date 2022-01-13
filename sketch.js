var poem = ["Siempre vocalicé mal mi nombre", "tinder", "bumble", "meetic", "lovoo", "happn", "grindr", "dejé a los 𝕣𝕖𝕓𝕒ñ𝕠𝕤 𝕥𝕖𝕟𝕕𝕖𝕣𝕤𝕖 𝕖𝕟 𝕞𝕚𝕤 𝕠𝕛𝕠𝕤", "match.com", "okcupid", "badoo",  "confundí el dolor y la felicidad con los festivales","tindog", "shakn", "adoptauntio", "facebookdating", "ourtime", "acepté que los seres son invisibles", "fairytrail", "heybaby", "chispa", "filteroff", "lantern", "espié a los descampados y rezarle a la arena","curtn", "kippo", "her","reducido a la coherencia", "pure", "nuit", "xo","ship", "tastebuds", "coffee meets", "tengo todo lo que podría quererse", "hinge", "match", "plenty of fish", "tez finísima, de protozoarios", "jaumo", "pof", "bloom", "tagged", "ablo", "taimi", "meetme", "vdating", "liruch", "sapio", "boompi", "herpes en los párpados y tumbas en el pensamiento", "mint", "edarling", "eharmony", "zoosk", "hot or not", "shakn", "down", "feeld", "un viejo que toca piano","lovely", "tinble", "meelo", "happgrin", "tindoo", "matchsha", "heytrail", "Qué puede ofrecerle un tipo promedio", "kiher", "curtna", "plenty boom", "jaupio", "feeldmint", "ezoosk","a otro tipo promedio", "como yo", "¿de que país hablaré?", "cuando lleguemos a la montaña", "tindoo", "matchsha", "heytrail","tindoo", "matchsha", "heytrail", "match.com", "okcupid","badoo","tagged", "ablo", "taimi"]

var index = 0


function setup() {
  createCanvas(3660,3600);
   background(0);
  
}

function draw() {
 
  
  
  
}

function mousePressed(){
  textSize(50);
  textAlign(CENTER);
  fill(random(0,255),0,(0,255));
  stroke(random(0,255), (0,255), 0)
  text(poem[index], mouseX,mouseY)
  
 index = index + 1

if (index == poem.length) {
 index = 0
}
}
