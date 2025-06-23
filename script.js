function changeText() {
    var element = document.getElementById('demo-text');
    element.textContent = 'The text has been changed by JavaScript!';
    console.log('Text changed successfully');
}

function resetText() {
    var element = document.getElementById('demo-text');
    element.textContent = 'This is the original text.';
    console.log('Text reset to original');
}
function showInput() {
    var inputElement = document.getElementById('user-input');
    var outputElement = document.getElementById('output');
    var userText = inputElement.value;

    if (userText === '') {
outputElement.innerHTML = '<strong style="color; red;">Please enter some text!</strong>';
    } else {
outputElement.innerHTML = '<strong>You entered:</strong>' + userText;
    }
    console.log('User input displayed:', userText);
}
function clearInput() {
    document.getElementById('user-input').value= '';
    document.getElementById('output').textContent = 'Your output will appear here...';
 console.log('Input and output cleared');
}
function changeColor() {
    var element = document.getElementById('style-text');
    var colors = ['pink','orange','blue','purple','green','red'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
element.style.color = randomColor;

console.log('Color changed to:', randomColor);
}
function changeSize() {
    var element = document.getElementById('style-text');
    var randomSize = Math.floor(Math.random() * 17) + 16;
    element.style.fontSize = randomSize + 'px';
    console.log('Font size changed to:', randomSize + 'px');
}
function addHighlight() {
    var element = document.getElementById('style-text');
    element.className = 'highlight';
    var colors = ['pink','orange','blue','purple','green','red'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
element.style.backgroundColor = randomColor;
    console.log('Highlight added');
}
function removeHighlight() {
    var element = document.getElementById('style-text');
    element.className = '';
    element.style.backgroundColor = '';
    console.log('Highlight removed');
}
function hideText() {
var element = document.getElementById('toggle-text');
element.style.display = 'none';
console.log('Element hidden');
}
function showText() {
    var element = document.getElementById('toggle-text');
    element.style.display = 'block';
    console.log('Element shown');
}
function toggleText() {
    var element = document.getElementById('toggle-text');
    if (element.style.display === 'none') {
        element.style.display = 'block';
        console.log('Element toggled to visible');
    } else {
element.style.display = 'none';
console.log('Element toggled to hidden');
    }
    }
    var elementCounter = 0;
    function addNewElement() {
        elementCounter++;
        var container = document.getElementById('new-elements-container');
        var newParagraph = document.createElement('p');
newParagraph.textContent = 'This is paragraph number ' + elementCounter;
newParagraph.style.padding = '10px' ;
newParagraph.style.margin = '5px 0' ;
newParagraph.style.backgroundColor = '#d4edda' ;
newParagraph.style.borderRadius = '5px' ;
newParagraph.id = 'dynamic-paragraph-' + elementCounter;
container.appendChild(newParagraph);
console.log('New paragraph created with ID:', newParagraph.id);
}
function removeLastElement() {
    var container = document.getElementById('new-elements-container');
    if (container.children.length > 0) {
        var lastElement = container.lastElementChild;
        console.log('Removing element:', lastElement.id);
        container.removeChild(lastElement);
        elementCounter--;
    } else {
        console.log('No elements to remove');
        alert('No elements to remove!');
    }
}
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and ready!');
    console.log('JavaScript DOM connection established successfully!');
});
console.log('Simple DOM manipulation script loaded successfully!');