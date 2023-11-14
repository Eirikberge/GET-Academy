function showForm() {
    document.getElementById('app').innerHTML = 
    createField('text', 'fname', 'first name')
    + createField('text', 'lname', 'last name')
    + createField('range', 'zero2hundered', 'En til hundre', 1, 100, 1)
    + createNumberInput()
    + createRadioHTML()
    + createRadioCSS()
    + createCheckboxBike()
    + createCheckboxCar()
    + createCheckboxBoat();
}

function createField(type, id, label) {
const labelHTML = /*HTML*/`<label for="${id}">${label}:</label><br/>`;
    if(type=='text'){
        return /*HTML*/`
        <label for="${id}">${label}</label><br/>
        <input type="text" id="${id}"><br/>
    `;
    }
    if(type=='range'){
        return /*HTML*/`
        <label for="${id}">${label}</label><br/>
        <input type="range" min="${min}" max="${max}" step="${step}" id="zero2hundred"><br/>
        `;
    }
}


function createNumberInput(){
    return /*HTML*/`
        <label for="number">skriv inn et tall:</label><br/>
        <input type="number" id="number"><br/>
    `;
}

function createRadioHTML(){
    return /*HTML*/`
        <input type="radio" id="html" name="fav_language" value="HTML">
        <label for="html">HTML</label><br/>
    `;
}

function createRadioCSS(){
    return /*HTML*/`
        <input type="radio" id="css" name="fav_language" value="CSS">
        <label for="html">CSS</label><br/>
    `;
}

function creatRadioJS(){
    return /*HTML*/`
        <input type="radio" id="javascript" name="fav_language" value="JavaScript">
        <label for="javascript">JavaScript</label><br/>
    `;
}

function createCheckboxBike(){
    return /*HTML*/`
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1">I have a bike</label><br/>
    `;
}

function createCheckboxCar(){
    return /*HTML*/`
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
        <label for="vehicle2">I have a car</label><br/>
    `;
}

function createCheckboxBoat(){
    return /*HTML*/`
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
        <label for="vehicle3">I have a boat</label><br/>
    `;
}
