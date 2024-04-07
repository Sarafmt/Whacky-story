const storyDisplay = document.getElementById("story-display");
let story = "";

const clickPippiandLillaGubben = () => {
    story = story + <p> Let us meet the world's strongest girl, She who never wants to grow up and are rich enough to live on her own. She lives with a money, Mister Nilsson and a horse called Lilla Gubben (little man). Today she has a tiny busy plan.</p>
     storyDisplay.innerHTML = story;
    }

const clickPippicarriescake = () => {
    story = story + <p> Oh, watch out with the cakes Pippi! Pippi smiles back and answers, Do not worry. Being a strong girl is a good thing, and I can balance these really well on my body. But do tell me, have you ever meet my friends? You will soon meet them!</p>
     storyDisplay.innerHTML = story;
    }