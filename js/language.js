const url = window.location.href

const current_language_button = document.getElementById("btn-language")
const new_language_button = document.getElementById("btn-language-2")

window.addEventListener('load', function () {
    const base = url.split("/")[2], lang = document.documentElement.lang, page = url.split("/")[4]

    let language = "", new_lang = ""

    if (lang === "en") language = "en", new_lang = "nl"
    else language = "nl", new_lang = "en"

    const new_url = '//' + base + '/' + new_lang + '/' + page

    current_language_button.href = url
    new_language_button.href = new_url


    current_language_button.style.background= "url('../Images/Flags/" + language + ".png') no-repeat center center"
    current_language_button.style.backgroundSize = "cover"

    new_language_button.style.background= "url('../Images/Flags/" + new_lang + ".png') no-repeat center center"
    new_language_button.style.backgroundSize = "cover"
})