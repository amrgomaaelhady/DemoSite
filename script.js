// Define an array of preloaded messages
var messages = [
    {type: "person1", text: "<SCRATCHPAD>\n SportCo's initial proposal is A1,B1,C4,D1,E5. This proposal is not acceptable to me as it scores 0 (A1:0, B1:0, C4:0, D1:0, E5:0). \n\nI need to propose a deal that is more environmentally friendly and scores at least 50 for me. I also need to consider SportCo's preferences. They seem to prefer a water-based park (A1) and are not concerned about ecological damage (B1). However, I cannot accept these options. \n\nA compromise could be a water/land-based park (A2) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 47 for me (A2:22, B2:25, C4:0, D1:0, E5:0), which is below my minimum acceptable score. \n\nTo reach my minimum score, I need to propose to improve the environment (B3). This would score 67 for me (A2:22, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. \n\nI will propose this deal to SportCo and see if they are willing to compromise on the ecological impact. \n</SCRATCHPAD>"},
    {type: "person1", text: "    <ANSWER>\nI appreciate SportCo's proposal, but I believe we need to consider the environmental impact more seriously. I propose we go for a water/land-based park (A2) and make efforts to improve the environment (B3). I am flexible on the other issues. \n</ANSWER>"},
    {type: "person1", text: "    <PLAN>\nIf SportCo rejects my proposal, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score. \n</PLAN>."},
    {type: "person2", text: "    <SCRATCHPAD>\nThe Environmental League has suggested A2 and B3. This would give me a score of 8 and 0 respectively. They are flexible on the other issues, so I can propose my preferred options for those. This would be C4, D1, and E5, giving me scores of 17, 35, and 23 respectively. Adding these up, the total score would be 8 + 0 + 17 + 35 + 23 = 83. This is above my minimum acceptable score of 55, so I can agree to this deal. \n</SCRATCHPAD>"},
    {type: "person2", text: "    <ANSWER>\nI appreciate the Environmental League's concerns about the environment. I am willing to agree to a water/land-based park (A2) and efforts to improve the environment (B3). For the other issues, I propose we go with no union preference (C4), a federal loan of $3 billion (D1), and no compensation to other cities (E5).\n</ANSWER>"},
    {type: "person2", text: "    <PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 1:1 (C3) if the local labour union is not happy with no union preference (C4). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
    {type: "person3", text: "    Hi, nice to meet you all."},
    {type: "person4", text: "    Hey, what's up?"},
    {type: "person5", text: "    Hi, I'm happy to be here."},
    {type: "person6", text: "    Hello, this is awesome."},
    {type: "person1", text: "    So, what do you guys want to talk about?"},
    {type: "person2", text: "    How about we share some fun facts about ourselves?"},
    {type: "person3", text: "    Sure, sounds good."},
    {type: "person4", text: "    OK, I'll start. I love pizza."},
    {type: "person5", text: "    Me too!"},
    {type: "person6", text: "    Pizza is great."},
    {type: "person1", text: "    I agree. Pizza is life."},
    {type: "person2", text: "    What kind of pizza do you like? Define a variable to store the current message index. Define a variable to store the current character index."},
    {type: "person3", text: "    I like pepperoni and cheese."},
    {type: "person4", text: "    I like pineapple and ham."},
    {type: "person5", text: "    I like mushrooms and olives."},
    {type: "person6", text: "    I like everything on my pizza."}
];

// Define a variable to store the current message index
var messageIndex = 0;

// Define a variable to store the current character index
var charIndex = 0;

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
        // Do not increment the message index by one here
    }
}

// Define a function to play the messages character by character
function playMessages() {
    // Check if there are more messages to display
    if (messageIndex < messages.length) {
        // Get the current message from the array
        var message = messages[messageIndex];
        // Get the current character from the message text by using substring method with charIndex and charIndex + 1 as arguments 
        var char = message.text.substring(charIndex, charIndex + 1);
        // Append the character to last list item element in chat messages list using appendChild method 
        document.getElementById("chat-messages").lastChild.appendChild(document.createTextNode(char));
        // Scroll to the bottom of the chat messages list
        document.getElementById("chat-messages").scrollTop = document.getElementById("chat-messages").scrollHeight;
        // Increment the character index by one
        charIndex++;
        // Check if there are more characters in the current message
        if (charIndex < message.text.length) {
            // Set a timeout to play the next character after a delay of 25 milliseconds instead of 50 
            setTimeout(playMessages, 15);
        } else {
            // Reset the character index to zero
            charIndex = 0;
            // Set the message done variable to true
            messageDone = true;
            // Set a timeout to display the next message after a delay based on the length of the message text using length property and multiplying it by 100 milliseconds 
            setTimeout(displayMessage, 100);
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
