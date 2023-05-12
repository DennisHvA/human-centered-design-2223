// const copyBtn = document.getElementById('copyBtn');
// copyBtn.addEventListener('click', () => {
//   const selection = window.getSelection().toString();
//   if (selection) {
//     navigator.clipboard.writeText(selection).then(() => {
//       console.log('Text copied to clipboard');
//     }).catch((err) => {
//       console.error('Error copying text: ', err);
//     });
//   }
// });

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
// pasteBtn.addEventListener('click', () => {
//   navigator.clipboard.readText().then((text) => {
//     console.log('Text pasted from clipboard: ', text);
//     textarea.value = text;
//   }).catch((err) => {
//     console.error('Error pasting text: ', err);
//   });
// });

// pasteBtn.addEventListener('click', () => {
//   navigator.clipboard.readText().then((text) => {
//     // Get the existing value of the text area
//     const existingValue = textarea.value;

//     // Concatenate the pasted text to the existing value
//     const newValue = existingValue + text;

//     // Set the new value of the text area
//     textarea.value = newValue;

//     console.log('Text pasted from clipboard: ', text);
//   }).catch((err) => {
//     console.error('Error pasting text: ', err);
//   });
// });

pasteBtn.addEventListener('click', () => {
    navigator.clipboard.readText().then((text) => {
      // Get the current cursor position
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
  
      // Get the existing value of the text area
      const existingValue = textarea.value;
  
      // Concatenate the text before and after the cursor position with the pasted text
      const newValue = existingValue.substring(0, startPos) + text + existingValue.substring(endPos);
  
      // Set the new value of the text area
      textarea.value = newValue;
  
      // Set the new cursor position after the pasted text
      textarea.selectionStart = startPos + text.length;
      textarea.selectionEnd = startPos + text.length;
  
      console.log('Text pasted from clipboard: ', text);
    }).catch((err) => {
      console.error('Error pasting text: ', err);
    });
  });  
  
  





