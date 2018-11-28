// Get DOM Elements
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Add Events Into Fill Element
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop Through empties and call a drag envent
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
} 

function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';

}
function dragLeave() {
    this.className = 'empty';
}
function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}

// Create A Drag Picture
function dragStart() {
  this.className += ' hold';
  setTimeout(() => fill.className = 'invisible', 0);
}

function dragEnd() {
  this.className = 'fill';
}