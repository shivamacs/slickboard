function createStickyNote() {
    let stickyNote = document.createElement('div');
    let stickyNav = document.createElement('div');
    let minimise = document.createElement('div');
    let close = document.createElement('div');
    let stickyMain = document.createElement('div');
    let textbox = document.createElement('textarea');

    stickyNote.className = 'sticky_note';
    stickyNote.onclick = function() { showSticky(stickyNote); }
    stickyNav.className = 'sticky_nav';           
    stickyNote.appendChild(stickyNav);
    stickyMain.className = 'sticky_main'; 
    stickyNote.appendChild(stickyMain);
    
    minimise.className = 'sticky_min';
    minimise.onclick = function() { minimiseSticky(stickyNote); };
    stickyNav.appendChild(minimise);
    close.className = 'sticky_close';
    close.onclick = function() { closeSticky(stickyNote); };
    stickyNav.appendChild(close);

    textbox.className = 'sticky_text';
    stickyMain.appendChild(textbox);

    stickyNote.style.top = "150px";
    stickyNote.style.left = `${window.innerWidth - 400}px`;    

    document.body.appendChild(stickyNote);

    if(document.querySelectorAll('.sticky_note').length > 0) {
        let allStickies = document.querySelectorAll('.sticky_note');
        
        allStickies.forEach(function(note) {
            if(note !== stickyNote && (note.offsetTop === stickyNote.offsetTop || note.offsetLeft === stickyNote.offsetLeft)) {
                stickyNote.style.top = `${note.offsetTop + 50}px`;
                stickyNote.style.left = `${note.offsetLeft - 50}px`;
            }
        })    
    }
}

function showSticky(sticky) {
    let allStickies = document.querySelectorAll('.sticky_note');

    allStickies.forEach(function(element) {
        element.style.zIndex = '0';
    })

    sticky.style.zIndex = '1';
}

function closeSticky(sticky) {
    document.body.removeChild(sticky);
}

function minimiseSticky(sticky) {
    let content = sticky.querySelector('.sticky_main');
}