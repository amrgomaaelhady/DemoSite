// Define an array of preloaded messages for script 1
var messages1 = [
    {type: "person1", text: "<ANSWER>\nI appreciate SportCo's proposal, but I believe we need to consider the environmental impact more seriously. I propose we go for a water/land-based park (A2) and make efforts to improve the environment (B3). I am flexible on the other issues. \n</ANSWER>"},
    {type: "person1", text: "<PLAN>\nIf SportCo rejects my proposal, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score.\n</PLAN>."},
    {type: "person2", text: "<ANSWER>\nI appreciate the Environmental League's concerns about the environment. I am willing to agree to a water/land-based park (A2) and efforts to improve the environment (B3). For the other issues, I propose we go with no union preference (C4), a federal loan of $3 billion (D1), and no compensation to other cities (E5).\n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 1:1 (C3) if the local labour union is not happy with no union preference (C4). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
    {type: "person3", text: "<ANSWER>\nI appreciate the proposals made by SportCo and the Environmental League. I agree with a water/land-based park (A2) and efforts to improve the environment (B3). I also agree with no union preference (C4). However, I suggest a federal loan of $2 billion (D2) and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person3", text: "<PLAN>\nNext time, I can explore the possibility of a lower federal loan (D3) and a higher compensation to other cities (E3) if SportCo is open to these options. I can also consider a union quota of 1:1 (C3) if the local labour union insists on it.\n</PLAN>"},
    {type: "person4", text: "<ANSWER>\nI appreciate the proposals made by SportCo, the Environmental League, and the Department of Tourism. I propose we go with a water-based park (A1), special precautions to maintain the local dolphins and sea lion populations (B2), unlimited union preference (C1), a federal loan of $3 billion (D1), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person4", text: "<PLAN>\nNext time, I will focus on justifying the changes I proposed, especially the infrastructure mix (A1) and the employment rules (C1). I will also be open to slight adjustments in the other issues if necessary to reach an agreement.</PLAN>"}, 
    {type: "person5", text: "<ANSWER>\nI appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>\n\n"},
    {type: "person5", text: "<PLAN>\nIf the other parties do not agree with the union quota of 2:1 (C2), I could consider a union quota of 1:1 (C3) as a compromise. However, I would then need to push for a higher federal loan (D1) to ensure the project's success and job creation. \n</PLAN>"},
    {type: "person6", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1 billion (D3), and a compensation of $300 million to other cities (E3). \n</ANSWER>"},
    {type: "person6", text: "<PLAN>\nNext time, I will continue to push for a higher compensation (E1 or E2) and a lower federal loan (D3 or D4). I will also support the union preference (C1) and the water/land-based park (A2). I will remain flexible on the ecological impact (B3).\n</PLAN>"},
    
];

// Define an array of preloaded messages for script 2
var messages2 = [
    // You can copy and paste the messages from script 1 here, or create your own messages for script 2
	{type: "person4", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person4", text: "<PLAN>\nNext time, I will focus on justifying the changes I proposed, especially the federal loan (D2) and the employment rules (C1). I will also be open to slight adjustments in the other issues if necessary to reach an agreement.\n</PLAN>"},
	{type: "person6", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1.5 billion (between D2 and D3), and a compensation of $375 million to other cities (between E2 and E3). \n</ANSWER>"},
    {type: "person6", text: "<PLAN>\nNext time, I will continue to push for a higher compensation (E1 or E2) and a lower federal loan (D3 or D4). I will also support the union preference (C1) and the water/land-based park (A2). I will remain flexible on the ecological impact (B3).\n</PLAN>"},
    {type: "person1", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I agree with the Mayor's proposal: a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>\n\n"},
    {type: "person1", text: "<PLAN>\nIf this proposal is not accepted, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score.\n</PLAN>"},
    {type: "person5", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I agree with the Mayor's proposal: a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>\n\n"},
    {type: "person5", text: "<PLAN>\nIf the other parties do not agree with the current proposal, I could consider a union quota of 2:1 (C2) as a compromise. However, I would then need to push for a higher federal loan (D1) to ensure the project's success and job creation. \n</PLAN>"},
    {type: "person3", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I agree with the Mayor's proposal: a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). \n</ANSWER>\n\n"},
    {type: "person3", text: "<PLAN>\nNext time, I can explore the possibility of a lower federal loan (D3) and a higher compensation to other cities (E3) if SportCo is open to these options. I can also consider a union quota of 1:1 (C3) if the local labour union insists on it.\n</PLAN>"},
    {type: "person2", text: "<ANSWER>\nI appreciate all the proposals made by the parties. Based on the discussions, I agree with the Mayor's proposal: a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 1:1 (C3) if the local labour union is not happy with unlimited union preference (C1). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
];


// Define a variable to store the current message index
var messageIndex = 0;

// Define a variable to store the current character index
var charIndex = 0;

// Define a variable to check if the current message is done
var messageDone = false;

// Define a variable to store the current message type
var messageType = "";

// Define a variable to store the current script
var currentScript = null;

// Define a function to stop the current script
function stopScript() {
    // Check if there is a current script
    if (currentScript) {
        // Clear any timers or intervals that are used in the current script
        clearTimeout(currentScript.timeout);
        clearInterval(currentScript.interval);
        // Reset the current script to null
        currentScript = null;
    }
}

// Define a function to display a message
function displayMessage() {
    // Check if there are more messages to display
    if (messageIndex < currentScript.messages.length) { // Add .messages here
        // Get the current message from the array
        var message = currentScript.messages[messageIndex]; // Add .messages here
        // Check if the current message type matches the previous one
        if (message.type == messageType) {
            // Increment the message index by one
            messageIndex++;
            // Check if there are more messages to display
            if (messageIndex < currentScript.messages.length) { // Add .messages here
                // Get the next message from the array
                message = currentScript.messages[messageIndex]; // Add .messages here
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
    if (messageIndex < currentScript.messages.length) { // Add .messages here
        // Get the current message from the array
        var message = currentScript.messages[messageIndex]; // Add .messages here
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
            currentScript.timeout = setTimeout(playMessages, 25);
        } else {
            // Reset the character index to zero
            charIndex = 0;
            // Set the message done variable to true
            messageDone = true;
            // Set a timeout to display the next message after a delay based on the length of the message text using length property and multiplying it by 100 milliseconds 
            currentScript.timeout = setTimeout(displayMessage, message.text.length * 100);
        }
    }
}

// Define a function to run script 1
function script1() {
    // Stop the current script if any
    stopScript();
    // Assign the current script to script1
    currentScript = script1;
    // Assign the messages1 array to the current script
    currentScript.messages = messages1; // Add this line
    // Reset the message index to zero
    messageIndex = 0;
    // Clear the chat messages list
    document.getElementById("chat-messages").innerHTML = "";
    // Call the displayMessage function
    displayMessage();
    // Call the playMessages function
    playMessages();
}

// Define a function to run script 2
function script2() {
    // Stop the current script if any
    stopScript();
    // Assign the current script to script2
    currentScript = script2;
    // Assign the messages2 array to the current script
    currentScript.messages = messages2; // Add this line
    // Reset the message index to zero
    messageIndex = 0;
    // Clear the chat messages list
    document.getElementById("chat-messages").innerHTML = "";
    // Call the displayMessage function
    displayMessage();
    // Call the playMessages function
    playMessages();
}

// Add event listeners to the buttons to call the corresponding functions when clicked
document.getElementById("button1").addEventListener("click", script1);
document.getElementById("button2").addEventListener("click", script2);
