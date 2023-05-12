const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');
const feedbackText = document.querySelector('#feedback>p');

copyBtn.addEventListener('click', () => {
  const selection = window.getSelection().toString();
  if (selection) {
    navigator.clipboard.writeText(selection).then(() => {
      console.log('Text copied to clipboard');
      feedbackText.textContent = 'De tekst is gekopieerd!';
    }).catch((err) => {
      console.error('Error copying text: ', err);
    });
  }
});

const textarea = document.querySelector('textarea');

pasteBtn.addEventListener('click', () => {
    navigator.clipboard.readText().then((text) => {
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
  
      const existingValue = textarea.value;
  
      const newValue = existingValue.substring(0, startPos) + text + existingValue.substring(endPos);
  
      textarea.value = newValue;
  
      textarea.selectionStart = startPos + text.length;
      textarea.selectionEnd = startPos + text.length;
  
      console.log('Text pasted from clipboard: ', text);
      feedbackText.textContent = 'De tekst is geplakt!';
    }).catch((err) => {
      console.error('Error pasting text: ', err);
    });
}); 

window.onload = function() {
  document.querySelector('#map').focus();
};

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'nl-NL';

  const voiceButton = document.getElementById('voice-button');
  voiceButton.addEventListener('click', () => {
    recognition.start();
    feedbackText.textContent = 'Zeg: "alinea (getal)" om te kopieren.';
  });

  recognition.addEventListener('result', (event) => {
    const transcript = event.results[0][0].transcript;
    selectAndCopyListItem(transcript);
  });
} else {
  console.error('Web Speech API is not available');
}

function selectAndCopyListItem(text) {
  const regex = /alinea (\d+)/i;
  const matches = text.match(regex);
  if (matches) {
    const itemNumber = parseInt(matches[1]);
    const listItems = document.getElementsByTagName('li');
    if (itemNumber > 0 && itemNumber <= listItems.length) {
      const listItem = listItems[itemNumber - 1];
      const paragraph = listItem.querySelector('p');
      if (paragraph) {
        const range = document.createRange();
        range.selectNodeContents(paragraph);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        console.log('Paragraph copied to clipboard:', paragraph.textContent);
        feedbackText.textContent = 'De alinea is gekopieerd!';
      } else {
        console.error('No paragraph found for list item', itemNumber);
        feedbackText.textContent = 'De alinea is niet gevonden';
      }
    } else {
      console.error('Item number out of range:', itemNumber);
      feedbackText.textContent = 'Dit getal is niet gevonden';
    }
  } else {
    console.error('Invalid command:', text);
    feedbackText.textContent = 'Probeer opnieuw en zeg: alinea (getal)';
  }
}
