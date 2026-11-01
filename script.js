const vocabulary = [
 {id:1,category:"Basics",kannada:"ನಮಸ್ಕಾರ",roman:"Namaskāra",meaning:"Hello / Greetings",example:"Use this polite greeting when meeting someone."},
 {id:2,category:"Basics",kannada:"ಧನ್ಯವಾದಗಳು",roman:"Dhanyavādagaḷu",meaning:"Thank you",example:"A warm way to express thanks."},
 {id:3,category:"Basics",kannada:"ದಯವಿಟ್ಟು",roman:"Dayaviṭṭu",meaning:"Please",example:"Use when making a polite request."},
 {id:4,category:"Basics",kannada:"ಹೌದು",roman:"Haudu",meaning:"Yes",example:"A simple way to say yes."},
 {id:5,category:"Basics",kannada:"ಇಲ್ಲ",roman:"Illa",meaning:"No / There isn't",example:"Use to say no or indicate something is not there."},
 {id:6,category:"People",kannada:"ನಿಮ್ಮ ಹೆಸರು ಏನು?",roman:"Nimma hesaru ēnu?",meaning:"What is your name?",example:"A polite question when meeting someone."},
 {id:7,category:"People",kannada:"ನನ್ನ ಹೆಸರು ...",roman:"Nanna hesaru ...",meaning:"My name is ...",example:"Introduce yourself by adding your name."},
 {id:8,category:"People",kannada:"ಹೇಗಿದ್ದೀರಾ?",roman:"Hēgiddīrā?",meaning:"How are you?",example:"A polite way to ask how someone is."},
 {id:9,category:"Travel",kannada:"ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",roman:"Bus nildāṇa ellide?",meaning:"Where is the bus stop?",example:"Useful when asking for directions."},
 {id:10,category:"Travel",kannada:"ಇದು ಎಷ್ಟು?",roman:"Idu eṣṭu?",meaning:"How much is this?",example:"Ask the price of an item."},
 {id:11,category:"Travel",kannada:"ನನಗೆ ಸಹಾಯ ಬೇಕು",roman:"Nanage sahāya bēku",meaning:"I need help",example:"Use when you need assistance."},
 {id:12,category:"Food",kannada:"ನೀರು ಬೇಕು",roman:"Nīru bēku",meaning:"I need water",example:"A useful phrase at a restaurant or shop."},
 {id:13,category:"Food",kannada:"ಊಟ ಬೇಕು",roman:"Ūṭa bēku",meaning:"I would like food / a meal",example:"Use when asking for a meal."},
 {id:14,category:"Food",kannada:"ಬಿಲ್ ಕೊಡಿ",roman:"Bill koḍi",meaning:"Please give me the bill",example:"Use at the end of a meal."},
 {id:15,category:"Help",kannada:"ನನಗೆ ಕನ್ನಡ ಸ್ವಲ್ಪ ಗೊತ್ತು",roman:"Nanage Kannada svalpa gottu",meaning:"I know a little Kannada",example:"Let someone know you are a beginner."},
 {id:16,category:"Help",kannada:"ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ",roman:"Nidhānavāgi mātanāḍi",meaning:"Please speak slowly",example:"Helpful when someone is speaking too quickly."},
 {id:17,category:"Travel",kannada:"ರೈಲು ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?",roman:"Railu nildāṇa ellide?",meaning:"Where is the railway station?",example:"Ask for the railway station."},
 {id:18,category:"Food",kannada:"ಇದು ಚೆನ್ನಾಗಿದೆ",roman:"Idu chennāgide",meaning:"This is good",example:"A friendly way to say something is good."}
];
const conversations = {
 shop:{title:"At a shop",intro:"A short exchange when asking about an item.",lines:[
  ["Customer","ಇದು ಎಷ್ಟು?","Idu eṣṭu? · How much is this?"],
  ["Shopkeeper","ಇದು ನೂರು ರೂಪಾಯಿ.","Idu nūru rūpāyi. · This is one hundred rupees."],
  ["Customer","ಸರಿ, ಧನ್ಯವಾದಗಳು.","Sari, dhanyavādagaḷu. · Okay, thank you."]
 ]},
 greeting:{title:"Meeting someone",intro:"Start a friendly and polite introduction.",lines:[
  ["Person A","ನಮಸ್ಕಾರ!","Namaskāra! · Hello!"],
  ["Person B","ನಮಸ್ಕಾರ! ಹೇಗಿದ್ದೀರಾ?","Namaskāra! Hēgiddīrā? · Hello! How are you?"],
  ["Person A","ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.","Chennāgiddēne, dhanyavādagaḷu. · I am fine, thank you."]
 ]},
 travel:{title:"Finding a place",intro:"Ask someone for directions when travelling.",lines:[
  ["Traveller","ಬಸ್ ನಿಲ್ದಾಣ ಎಲ್ಲಿದೆ?","Bus nildāṇa ellide? · Where is the bus stop?"],
  ["Local","ಅಲ್ಲಿ ಇದೆ.","Alli ide. · It is over there."],
  ["Traveller","ತುಂಬಾ ಧನ್ಯವಾದಗಳು.","Tumbā dhanyavādagaḷu. · Thank you very much."]
 ]}
};
const quizQuestions = [
 {q:"What does ನಮಸ್ಕಾರ mean?",options:["Goodbye","Hello / Greetings","Please","Water"],answer:1,why:"ನಮಸ್ಕಾರ (Namaskāra) is a common polite greeting."},
 {q:"How do you say “Thank you” in Kannada?",options:["ಹೌದು","ಇಲ್ಲ","ಧನ್ಯವಾದಗಳು","ನೀರು"],answer:2,why:"ಧನ್ಯವಾದಗಳು (Dhanyavādagaḷu) means thank you."},
 {q:"What does ಹೌದು mean?",options:["No","Yes","Help","Food"],answer:1,why:"ಹೌದು (Haudu) means yes."},
 {q:"Which phrase asks “How much is this?”",options:["ಇದು ಎಷ್ಟು?","ಹೇಗಿದ್ದೀರಾ?","ನಿಮ್ಮ ಹೆಸರು ಏನು?","ಬಿಲ್ ಕೊಡಿ"],answer:0,why:"ಇದು ಎಷ್ಟು? (Idu eṣṭu?) is used to ask the price."},
 {q:"What does ನೀರು ಬೇಕು mean?",options:["I need help","Please speak slowly","I need water","Where is the station?"],answer:2,why:"ನೀರು (nīru) means water; ಬೇಕು (bēku) means need/want."}
];
const state = {category:"All",query:"",learned:new Set(JSON.parse(localStorage.getItem("kfe-learned")||"[]")),best:Number(localStorage.getItem("kfe-best")||0),qIndex:0,selected:null,answered:false,score:0};
const vocabGrid=document.getElementById("vocabGrid"), emptyState=document.getElementById("emptyState"), toast=document.getElementById("toast");
function safeText(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),2300);}
function speak(text, fallbackText=""){
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast("Audio playback is not supported by this browser. You can use the written pronunciation guide.");
    return;
  }

  const synth = window.speechSynthesis;
  const play = () => {
    const voices = synth.getVoices();
    const kannadaVoice = voices.find(voice => /^kn([-_]|$)/i.test(voice.lang));
    const textToSpeak = kannadaVoice || !fallbackText ? text : fallbackText;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = kannadaVoice ? kannadaVoice.lang : (fallbackText && textToSpeak === fallbackText ? "en-IN" : "kn-IN");
    utterance.rate = 0.82;
    if (kannadaVoice) {
      utterance.voice = kannadaVoice;
    } else if (fallbackText) {
      showToast("No Kannada voice found; playing the written pronunciation guide.");
    } else {
      showToast("No Kannada voice was found. Audio may not sound correct on this device.");
    }
    utterance.onerror = () => showToast("Audio could not play. Check device volume and installed speech voices.");
    synth.cancel();
    synth.speak(utterance);
  };

  // Some browsers load their available speech voices asynchronously.
  if (synth.getVoices().length) {
    play();
  } else {
    let finished = false;
    const onVoicesChanged = () => {
      if (finished) return;
      finished = true;
      synth.removeEventListener("voiceschanged", onVoicesChanged);
      play();
    };
    synth.addEventListener("voiceschanged", onVoicesChanged);
    // Avoid waiting forever if this browser never fires voiceschanged.
    window.setTimeout(() => {
      if (finished) return;
      finished = true;
      synth.removeEventListener("voiceschanged", onVoicesChanged);
      play();
    }, 700);
  }
}
function renderVocabulary(){const items=vocabulary.filter(item=>(state.category==="All"||item.category===state.category)&&`${item.kannada} ${item.roman} ${item.meaning} ${item.category}`.toLowerCase().includes(state.query.toLowerCase()));vocabGrid.innerHTML=items.map(item=>`<article class="vocab-card"><div class="vocab-card-top"><span class="vocab-category">${safeText(item.category)}</span><button class="speak-button" data-speak="${safeText(item.kannada)}" data-speak-fallback="${safeText(item.roman)}" aria-label="Play pronunciation for ${safeText(item.meaning)}">▶</button></div><h3 class="kannada-word">${safeText(item.kannada)}</h3><p class="transliteration">${safeText(item.roman)}</p><p class="word-meaning">${safeText(item.meaning)}</p><button class="mark-learned ${state.learned.has(item.id)?"done":""}" data-learn="${item.id}">${state.learned.has(item.id)?"✓ Learned":"＋ Mark as learned"}</button></article>`).join("");emptyState.classList.toggle("hidden",items.length>0);updateProgress();}
function updateProgress(){document.getElementById("bestScore").textContent=`${state.best}%`;document.getElementById("learnedCount").textContent=state.learned.size;}
document.getElementById("searchInput").addEventListener("input",e=>{state.query=e.target.value;renderVocabulary();});
document.getElementById("categoryFilters").addEventListener("click",e=>{const button=e.target.closest("[data-category]");if(!button)return;state.category=button.dataset.category;document.querySelectorAll(".filter-chip").forEach(b=>b.classList.toggle("active",b===button));renderVocabulary();});
document.addEventListener("click",e=>{const speaker=e.target.closest("[data-speak]");if(speaker){speak(speaker.dataset.speak, speaker.dataset.speakFallback || "");return;}const learn=e.target.closest("[data-learn]");if(learn){const id=Number(learn.dataset.learn);if(state.learned.has(id)){state.learned.delete(id);showToast("Phrase removed from your learned list.");}else{state.learned.add(id);showToast("Great work! Phrase marked as learned.");}localStorage.setItem("kfe-learned",JSON.stringify([...state.learned]));renderVocabulary();}});
document.querySelectorAll("[data-situation]").forEach(button=>button.addEventListener("click",()=>{const cat=button.dataset.situation;state.category=cat==="Travel"?"Travel":cat==="Food"?"Food":cat==="People"?"People":"Help";document.querySelectorAll(".filter-chip").forEach(b=>b.classList.toggle("active",b.dataset.category===state.category));state.query="";document.getElementById("searchInput").value="";renderVocabulary();document.getElementById("learn").scrollIntoView({behavior:"smooth"});}));
function renderConversation(key){const item=conversations[key];document.getElementById("conversationPanel").innerHTML=`<h3>${safeText(item.title)}</h3><p>${safeText(item.intro)}</p>${item.lines.map(line=>`<div class="dialogue-line"><span class="speaker">${safeText(line[0])}</span><div class="dialogue-text"><strong>${safeText(line[1])}</strong><small>${safeText(line[2])}</small></div><button data-speak="${safeText(line[1])}" data-speak-fallback="${safeText(line[2].split(" · ")[0])}" aria-label="Play pronunciation guide">▶</button></div>`).join("")}`;}
document.querySelectorAll("[data-conversation]").forEach(button=>button.addEventListener("click",()=>{document.querySelectorAll("[data-conversation]").forEach(b=>b.classList.toggle("active",b===button));renderConversation(button.dataset.conversation);}));
function renderQuiz(){const q=quizQuestions[state.qIndex];document.getElementById("questionCounter").textContent=`Question ${state.qIndex+1} of ${quizQuestions.length}`;document.getElementById("quizProgress").style.width=`${((state.qIndex+1)/quizQuestions.length)*100}%`;document.getElementById("quizContent").innerHTML=`<h3 class="question-title">${safeText(q.q)}</h3><div class="answer-list">${q.options.map((option,i)=>`<button class="answer-option ${state.selected===i?"selected":""} ${state.answered&&i===q.answer?"correct":""} ${state.answered&&state.selected===i&&i!==q.answer?"incorrect":""}" data-answer="${i}" ${state.answered?"disabled":""}>${String.fromCharCode(65+i)}. ${safeText(option)}</button>`).join("")}</div>`;document.getElementById("quizFeedback").textContent=state.answered?(state.selected===q.answer?`Correct! ${q.why}`:`Not quite. ${q.why}`):"Choose the best answer.";document.getElementById("quizNext").textContent=state.answered?(state.qIndex===quizQuestions.length-1?"See my result":"Next question")+" →":"Check answer →";}
document.getElementById("quizContent").addEventListener("click",e=>{const option=e.target.closest("[data-answer]");if(!option||state.answered)return;state.selected=Number(option.dataset.answer);renderQuiz();});
document.getElementById("quizNext").addEventListener("click",()=>{if(!state.answered){if(state.selected===null){showToast("Choose an answer first.");return;}state.answered=true;if(state.selected===quizQuestions[state.qIndex].answer)state.score++;renderQuiz();return;}if(state.qIndex<quizQuestions.length-1){state.qIndex++;state.selected=null;state.answered=false;renderQuiz();return;}const percent=Math.round(state.score/quizQuestions.length*100);if(percent>state.best){state.best=percent;localStorage.setItem("kfe-best",String(percent));}document.getElementById("quizContent").innerHTML=`<div class="quiz-result"><p class="question-kannada">${percent===100?"ಅದ್ಭುತ!":"ಚೆನ್ನಾಗಿದೆ!"}</p><h3 class="question-title">You scored ${state.score} out of ${quizQuestions.length}</h3><p>${percent>=80?"Wonderful work! Keep practising to make these phrases your own.":percent>=60?"Good effort! Review the vocabulary and give it another try.":"Every attempt helps you learn. Review the phrases and try again."}</p></div>`;document.getElementById("questionCounter").textContent="Quiz complete";document.getElementById("quizProgress").style.width="100%";document.getElementById("quizFeedback").textContent="Your result has been saved on this device.";document.getElementById("quizNext").textContent="Try again ↻";document.getElementById("quizNext").onclick=()=>{state.qIndex=0;state.selected=null;state.answered=false;state.score=0;document.getElementById("quizNext").onclick=null;renderQuiz();};updateProgress();});
document.getElementById("resetProgress").addEventListener("click",()=>{if(!confirm("Reset your saved phrases and best quiz score on this device?"))return;state.learned.clear();state.best=0;localStorage.removeItem("kfe-learned");localStorage.removeItem("kfe-best");renderVocabulary();showToast("Your local learning progress has been reset.");});
const menuToggle=document.getElementById("menuToggle"),mainNav=document.getElementById("mainNav");menuToggle.addEventListener("click",()=>{const open=mainNav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));});mainNav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mainNav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");}));
renderVocabulary();renderConversation("shop");renderQuiz();updateProgress();
