function init(){
//add your javascrip between these two lines of code
 //working with 3 fields, the button(entrybutton), input where the text is(entryinput) and what the h2 output is(textoutput)
 const input = document.getElementById("entryinput");
 const button = document.getElementById("entrybutton");
 const output = document.getElementById("textoutput");

 //we need to know if the button is being clicked so we add an eventlistener to check if its being clicked
//when the button is clicked it will run this piece of code
 button.addEventListener("click", ()=> {
    const inputText = input.value;

    alert("Christian Garcia: " + inputText);
    output.textContent = inputText;
 });




}

window.addEventListener('load', init);
