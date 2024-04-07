const storyDisplay = document.getElementById("story-display");
let story = "";

const clickPippiandLillaGubben = () => {
    story = story + <p> Let us meet the world's strongest girl, She who never wants to grow up and are rich enough to live on her own. She lives with a monkey, Mister Nilsson and a horse called Lilla Gubben (little man). Today she has a tiny busy plan.</p>
     storyDisplay.innerHTML = story;
    }

const clickPippicarriescake = () => {
    story = story + <p> Oh, watch out with the cakes Pippi! Pippi smiles back and answers, Do not worry. Being a strong girl is a good thing, and I can balance these really well on my body. But do tell me, have you ever meet my friends? You will soon meet them!</p>
     storyDisplay.innerHTML = story;
    }

const clickpippisfriends = () => {
    story = story + <p> Well hello there, a young mans voice says. My name is Tommy and I am a good friend of Pippi. A new light girl voice is heard, and my name is Annika. Nice to meet you. You smile back to them and greet them. Pippi screams of happiness and runs to greet her friends. They all start packing and you ask if they need help. Oh no, We are just going on a tiny picnic. You smile and nod, explaining that you can't join.</p>
     storyDisplay.innerHTML = story;
    }

const clicktosaygoodbye = () => {
    story = story + <p> Oh, too bad to hear the children reply. But we are really happy you came by. Maybe next time we could all hang out! You watch them ride away and think to yourself that this tiny redhead girl is a funny human. Suddenly Pippi yells in the far distance "Please come soon again!"</p>
     storyDisplay.innerHTLM = story;
    }

const resetStory = () => {
    story = "";
    storyDisplay.innerHTLM = story;
}