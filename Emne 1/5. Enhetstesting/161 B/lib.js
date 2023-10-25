function checkIfMail(text) {
    return text.includes("@") && text.includes(".");
}
// function checkIfMail(text) {
//     let regex = /.*@.*\..*/;
    
//     return regex.test(text);
//   }
// regex = forkortelse for regular expression (regulært utrykk).
// denne funksjonen sjekker bare om det er et punktum, ikke om det er før eller etter @.