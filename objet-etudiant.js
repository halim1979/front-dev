function makeUser (name, firstname, statut) {
    return {
        name: name,
        firstname: firstname,
        statut: statut

    };
}

let john = makeUser("John", "doe");
let pierre = makeUser("pierre", "doe");

}
console.log(pierre.name); // Johnalert(user.name); // John
// tester localstorage
document.write(pierre.name);

// try {
//     localStorage.setItem("key", "value");
// } catch (e) { console.log(e) }

localStorage.clear();
localStorage.setItem("key", JSON.stringify(pierre));

let str = localStorage.getItem("key");
console.log(str);// OPTIMIZE:


//var x = new Boolean(true);
// if (x) {
//     console.log("true")
// } else { console.log("false"); }
