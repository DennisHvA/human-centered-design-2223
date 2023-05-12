const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');

copyBtn.addEventListener('click', () => {
  const selection = window.getSelection().toString();
  if (selection) {
    navigator.clipboard.writeText(selection).then(() => {
      console.log('Text copied to clipboard');
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
    }).catch((err) => {
      console.error('Error pasting text: ', err);
    });
}); 

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();

// Create a new SpeechRecognition object
// const recognition = new window.SpeechRecognition();

// Set the language for speech recognition
recognition.lang = 'en-US';

// Add an event listener for the 'result' event
// recognition.addEventListener('result', (event) => {
//   // Get the transcript from the first result
//   const transcript = event.results[0][0].transcript;

//   // Write the transcript to the clipboard
//   navigator.clipboard.writeText(transcript)
//     .then(() => {
//       console.log('Copied to clipboard: ' + transcript);
//     })
//     .catch((err) => {
//       console.error('Failed to copy to clipboard: ', err);
//     });
// });

// // Add an event listener for the 'result' event
// recognition.addEventListener('result', (event) => {
//   // Get the transcript from the first result
//   const transcript = event.results[0][0].transcript;

//   // Find the first text node on the page that contains the transcript
//   const textNode = document.evaluate(`//text()[contains(., "${transcript}")]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

//   if (textNode) {
//     // Select the text node's contents
//     const range = document.createRange();
//     range.selectNodeContents(textNode);

//     // Copy the selected contents to the clipboard
//     const selection = window.getSelection();
//     selection.removeAllRanges();
//     selection.addRange(range);

//     document.execCommand('copy');
//     console.log('Copied to clipboard: ' + transcript);
//   } else {
//     console.error(`No text node found containing "${transcript}"`);
//   }
// });

// recognition.addEventListener('result', (event) => {
//   const transcript = event.results[0][0].transcript;
//   const [startWord, endWord] = transcript.replace(/and/gi, '').split('to');

//   console.log(`Start word: "${startWord.trim()}"`);
//   console.log(`End word: "${endWord.trim()}"`);

//   const words = document.body.innerText.trim().split(/\s+/);
//   const startWordIndex = words.findIndex((word) => word.toLowerCase() === startWord.trim().toLowerCase());
//   const endWordIndex = words.findIndex((word) => word.toLowerCase() === endWord.trim().toLowerCase());

//   console.log(`Start word index: ${startWordIndex}`);
//   console.log(`End word index: ${endWordIndex}`);

//   if (startWordIndex !== -1) {
//     const startTextNode = getNodeFromIndex(document.body, startWordIndex);

//     console.log(`Start text node: ${startTextNode}`);

//     if (endWordIndex !== -1) {
//       const endTextNode = getNodeFromIndex(document.body, endWordIndex);

//       console.log(`End text node: ${endTextNode}`);

//       if (startTextNode && endTextNode) {
//         const range = document.createRange();
//         range.setStartAfter(startTextNode);
//         range.setEndBefore(endTextNode);

//         const selection = window.getSelection();
//         selection.removeAllRanges();
//         selection.addRange(range);

//         const successful = document.execCommand('copy');
//         if (successful) {
//           console.log(`Copied "${selection.toString()}" to clipboard`);
//         } else {
//           console.error('Unable to copy to clipboard');
//         }
//       } else {
//         console.error(`No text node found containing "${endWord}"`);
//       }
//     } else {
//       console.error(`No matching word found for "${endWord}"`);
//     }
//   } else {
//     console.error(`No matching word found for "${startWord}"`);
//   }
// });

// recognition.addEventListener('error', (event) => {
//   console.error(`Speech recognition error: ${event.error}`);
// });

// recognition.addEventListener('nomatch', () => {
//   console.log('No match found');
// });

// recognition.addEventListener('end', () => {
//   console.log('Speech recognition ended');
// });

const voiceButton  = document.querySelector('#voice');

// document.addEventListener('click', () => {
//   recognition.start();
// });

voiceButton.addEventListener('click', () => {
  recognition.start();
});


// function getNodeFromIndex(root, index) {
//   const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
//   let count = 0;
//   while (walker.nextNode()) {
//     const node = walker.currentNode;
//     const words = node.textContent.trim().split(/\s+/);
//     if (count + words.length > index) {
//       const textNode = document.createTextNode(words[index - count]);
//       node.parentNode.replaceChild(textNode, node);
//       return textNode;
//     }
//     count += words.length;
//   }
//   return null;
// }

// Start the speech recognition service
// recognition.start();


// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral', 'crimson', 'cyan', 'fuchsia', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'indigo', 'ivory', 'khaki', 'lavender', 'lime', 'linen', 'magenta', 'maroon', 'moccasin', 'navy', 'olive', 'orange', 'orchid', 'peru', 'pink', 'plum', 'purple', 'red', 'salmon', 'sienna', 'silver', 'snow', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'white', 'yellow'];

// var recognition = new SpeechRecognition();
// if (SpeechGrammarList) {
//   // SpeechGrammarList is not currently available in Safari, and does not have any effect in any other browser.
//   // This code is provided as a demonstration of possible capability. You may choose not to use it.
//   var speechRecognitionList = new SpeechGrammarList();
//   var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
//   speechRecognitionList.addFromString(grammar, 1);
//   recognition.grammars = speechRecognitionList;
// }
// recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// var diagnostic = document.querySelector('.output');
// var bg = document.querySelector('html');
// var hints = document.querySelector('.hints');

// var colorHTML= '';
// colors.forEach(function(v, i, a){
//   console.log(v, i);
//   colorHTML += '<span style="background-color:' + v + ';"> ' + v + ' </span>';
// });
// hints.innerHTML = 'Tap/click then say a color to change the background color of the app. Try ' + colorHTML + '.';

// document.body.onclick = function() {
//   recognition.start();
//   console.log('Ready to receive a color command.');
// }

// recognition.onresult = function(event) {
//   // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
//   // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
//   // It has a getter so it can be accessed like an array
//   // The first [0] returns the SpeechRecognitionResult at the last position.
//   // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
//   // These also have getters so they can be accessed like arrays.
//   // The second [0] returns the SpeechRecognitionAlternative at position 0.
//   // We then return the transcript property of the SpeechRecognitionAlternative object
//   var color = event.results[0][0].transcript;
//   diagnostic.textContent = 'Result received: ' + color + '.';
//   bg.style.backgroundColor = color;
//   console.log('Confidence: ' + event.results[0][0].confidence);
// }

// recognition.onspeechend = function() {
//   recognition.stop();
// }

// recognition.onnomatch = function(event) {
//   diagnostic.textContent = "I didn't recognise that color.";
// }

// recognition.onerror = function(event) {
//   diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
// }