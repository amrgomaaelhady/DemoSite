// Define an array of preloaded messages
var messages = [
    {type: "person1", text: "Hi everyone, welcome to our WhatsApp group."},
    {type: "person2", text: "Hello, thank you for inviting me."},
    {type: "person3", text: "Hi, nice to meet you all."},
    {type: "person4", text: "Hey, what's up?"},
    {type: "person5", text: "Hi, I'm happy to be here."},
    {type: "person6", text: "Hello, this is awesome."},
    {type: "person1", text: "So, what do you guys want to talk about?"},
    {type: "person2", text: "How about we share some fun facts about ourselves?"},
    {type: "person3", text: "Sure, sounds good."},
    {type: "person4", text: "OK, I'll start. I love pizza."},
    {type: "person5", text: "Me too!"},
    {type: "person6", text: "Pizza is great."},
    {type: "person1", text: "I agree. Pizza is life."},
    {type: "person2", text: "What kind of pizza do you like?"},
    {type: "person3", text: "I like pepperoni and cheese."},
    {type: "person4", text: "I like pineapple and ham."},
    {type: "person5", text: "I like mushrooms and olives."},
    {type: "person6", text: "I like everything on my pizza."}
];

// Define a variable to store the current message index
var messageIndex = 0;

// Define a variable to store the current word index
var wordIndex = 0;

// Define a variable to check if the current message is done
var messageDone = false;

// Define a variable to store the current message type
var messageType = "";

// Define a function to display a message
function displayMessage() {
    // Check if there are more messages to display
    if (messageIndex < messages.length) {
        // Get the current message from the array
        var message = messages[messageIndex];
        // Check if the current message type matches the previous one
        if (message.type == messageType) {
            // Increment the message index by one
            messageIndex++;
            // Check if there are more messages to display
            if (messageIndex < messages.length) {
                // Get the next message from the array
                message = messages[messageIndex];
            } else {
                // Stop the function
                return;
            }
        }
        // Update the current message type
        messageType = message.type;
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
