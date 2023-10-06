// Define an array of preloaded messages
var messages = [
    {type: "user", text: "Hi, I would like your help to create a website with a simple structre that looks like this chat interface I am having with you."},
    {type: "assistant", text: "Hello, thank you for your interest in creating a website with a simple chat interface. I will try to help you with some basic steps and resources."},
    {type: "user", text: "This website https://mdbootstrap.com/docs/standard/extended/chat/ have a basic template with some code in it. Can you create for me an HTML code that I can use with a preloaded text (you can put any random text in it for now) for this kind of chat and create the code that make it play word by word (like the text you generate) once the page is loaded."},
    {type: "assistant", text: "Sure, I can help you create an HTML code that you can use with a preloaded text for a chat interface like the one you linked. Here is the code that I generated using my own words and knowledge:"},
    {type: "assistant", text: "<html>..."},
    {type: "user", text: "Wow, thank you so much! You are amazing!"},
    {type: "assistant", text: "You're welcome. I'm glad I could help. 😊"}
];

// Define a variable to store the current message index
var messageIndex = 0;

// Define a variable to store the current word index
var wordIndex = 0;

// Define a variable to check if the current message is done
var messageDone = false;

// Define a function to display a message
function displayMessage() {
    // Get the current message from the array
    var message = messages[messageIndex];
    // Create a list item element for the message
    var li = document.createElement("li");
    // Add a class to the list item element based on the message type
    li.classList.add(message.type);
    // Append the list item element to the chat messages list
    document.getElementById("chat-messages").appendChild(li);
    // Scroll to the bottom of the chat messages list
    document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
    // Increment the message index by one
    messageIndex++;
}

// Define a function to play the messages word by word
function playMessages() {
    // Check if there are more messages to display
    if (messageIndex < messages.length) {
        // Get the current message from the array
        var message = messages[messageIndex];
        // Get the current word from the message text by splitting it by spaces
        var words = message.text.split(" ");
        var word = words[wordIndex];
        // Create a span element for the word
        var span = document.createElement("span");
        // Set the text content of the span element to the word
        span.textContent = word;
        // Append the span element to the last list item element in the chat messages list
        document.getElementById("chat-messages").lastChild.appendChild(span);
        // Add a space after the word
        document.getElementById("chat-messages").lastChild.appendChild(document.createTextNode(" "));
        // Scroll to the bottom of the chat messages list
        document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
        // Increment the word index by one
        wordIndex++;
        // Check if there are more words in the current message
        if (wordIndex < words.length) {
            // Set a timeout to play the next word after a delay
            setTimeout(playMessages, 80);
        } else {
            // Reset the word index to zero
            wordIndex = 0;
            // Set the message done variable to true
            messageDone = true;
            // Set a timeout to display the next message after a delay
            setTimeout(displayMessage, 1000);
        }
    }
}

// Call the displayMessage function when the page is loaded
window.onload = displayMessage;

// Call the playMessages function when the first message is displayed
setTimeout(playMessages, 1000);

// Define an interval to check if the current message is done and play the next one if it is true
setInterval(function() {
    if (messageDone) {
        // Set the message done variable to false
        messageDone = false;
        // Call the playMessages function
        playMessages();
    }
}, 100);
