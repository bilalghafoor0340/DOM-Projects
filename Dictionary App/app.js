const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const btn = document.getElementById("search-btn");
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const inputEl = document.getElementById("input-word");

btn.addEventListener("click", () => {
    const inputWord = inputEl.value;

    fetch(`${url}${inputWord}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            (data)

            result.innerHTML = `
                <div class="words">
                    <h3>${inputWord}</h3>
                    <button onclick="playSound()">
                        <i class="fas fa-volume-up"></i>
                    </button>
                </div>
                <div class="detail">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic || "N/A"}/</p>
                </div>
                <p class="word-meaning">
                    ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>
            `;

            // ✅ SAFE AUDIO HANDLING
            const audioData = data[0].phonetics.find(p => p.audio);

            if (audioData) {
                sound.setAttribute("src", audioData.audio);
            } else {
                sound.removeAttribute("src");
            }
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

function playSound() {
    if (sound.src) {
        sound.play();
    } else {
        alert("No pronunciation available");
    }
}