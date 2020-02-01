/* chrome.extension.onMessage.addListener((request, sender, sendResponse) => {  
    if(request.action) {
        console.log('action is: ', request.action);
        sendResponse({content: "response message"});
        highlight(request.action);
		return true; // This is required by a Chrome Extension
	}
}); */

const fonts = document.createElement('link');

fonts.href = 'https://fonts.googleapis.com/css?family=Kalam&display=swap';
fonts.rel = 'stylesheet';

document.getElementsByTagName('head')[0].appendChild(fonts);

const handleKeypress = (ev) => {
    if (ev.shiftKey && ev.key.toLowerCase() === 'd') {
        highlight('remove');
        ev.preventDefault();
    } else if (ev.shiftKey && ev.key.toLowerCase() === 'a') {
        highlight('add');
        ev.preventDefault();
    }
}

document.addEventListener('keypress', handleKeypress);

const highlight = (action) => {
    let word = getHighlightedWord();
    word.forEach(letter => letter.classList.remove('temp-marker'));
    if (action === 'add') {
        word.forEach(letter => letter.classList.add('temp-marker'));
    }
}

const getHighlightedWord = () => {
    return document.body.querySelectorAll('li.selected,li.marker');
}