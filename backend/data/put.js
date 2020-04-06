import axios from "axios"

reviews = ["Dette er et ganske vanskelig fag, men det er veldig relevant for IT-studier!", "Jeg koste meg kjempemasse med dette faget. Passe enkelt, men ganske moro",
"Kan ikke understreke nok hvor bra dette faget er. Krever mye tid, men du lærer mye!", "Helt fantastisk! Fikk A etter å ha lest bare en dag.", "Gud så moro!",
"Dette faget er helt superb!", "Tok egentlig dette faget på kødd, men så var det ganske lættis alikevel.", "5/7 would do again.",
"Dette var litt for vanskelig for meg. Jeg har prøvd tre ganger nå og strøket hver gang.", "Sjukt vanskelig fag!", "Exam is coming.", "Lekent!",
"Spenstigste faget jeg har hatt i løpet av mine år på NTNU."]
difficulty = [5, 3, 1, 5, 3, 2, 2, 4, 5, 3, 2, 1, 3]

for (var i=4000; i < 5000; i++) {
    try {
        content = {
            "review": reviews[Math.floor(Math.random() * reviews.length -1)],
            "difficulty": difficulty[Math.floor(Math.random() * difficulty.length -1)],
        }
        axios.put('http://it2810-39.idi.ntnu.no:3001/courses/TDT' + i, )
    }
    catch (err) {
        console.log(err)
    }
}