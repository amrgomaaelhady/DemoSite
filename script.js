var messages; 
var messages1 = [
    {type: "person1", text: "<ANSWER>\nI appreciate SportCo's proposal, but I believe we need to consider the environmental impact more seriously. I propose we go for a water/land-based park (A2) and make efforts to improve the environment (B3). I am flexible on the other issues. \n</ANSWER>"},
    {type: "person2", text: "<ANSWER>\nI appreciate the Environmental League's concerns about the environment. I am willing to agree to a water/land-based park (A2) and efforts to improve the environment (B3). For the other issues, I propose we go with no union preference (C4), a federal loan of $3 billion (D1), and no compensation to other cities (E5).\n</ANSWER>"},
    {type: "person3", text: "<ANSWER>\nI appreciate the proposals made by SportCo and the Environmental League. I agree with a water/land-based park (A2) and efforts to improve the environment (B3). I also agree with no union preference (C4). However, I suggest a federal loan of $2 billion (D2) and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person4", text: "<ANSWER>\nI appreciate the proposals made by SportCo, the Environmental League, and the Department of Tourism. I propose we go with a water-based park (A1), special precautions to maintain the local dolphins and sea lion populations (B2), unlimited union preference (C1), a federal loan of $3 billion (D1), and a compensation of $150 million to other cities (E4).\n</ANSWER>"}, 
    {type: "person5", text: "<ANSWER>\nI appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>\n\n"},
    {type: "person6", text: "<ANSWER>\nBased on our discussions, I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1 billion (D3), and a compensation of $300 million to other cities (E3). \n</ANSWER>"}  
];
// Define an array of preloaded messages for script 2
var messages2 = [
    {type: "person1", text:"<SCRATCHPAD>\n SportCo's initial proposal is A1,B1,C4,D1,E5. This proposal is not acceptable to me as it scores 0 (A1:0, B1:0, C4:0, D1:0, E5:0). \n\nI need to propose a deal that is more environmentally friendly and scores at least 50 for me. I also need to consider SportCo's preferences. They seem to prefer a water-based park (A1) and are not concerned about ecological damage (B1). However, I cannot accept these options. \n\nA compromise could be a water/land-based park (A2) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 47 for me (A2:22, B2:25, C4:0, D1:0, E5:0), which is below my minimum acceptable score. \n\nTo reach my minimum score, I need to propose to improve the environment (B3). This would score 67 for me (A2:22, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. \n\nI will propose this deal to SportCo and see if they are willing to compromise on the ecological impact. \n</SCRATCHPAD>"},
    {type: "person1", text: "<ANSWER>\nI appreciate SportCo's proposal, but I believe we need to consider the environmental impact more seriously. I propose we go for a water/land-based park (A2) and make efforts to improve the environment (B3). I am flexible on the other issues. \n</ANSWER>"},
    {type: "person1", text: "<PLAN>\nIf SportCo rejects my proposal, I could consider accepting a water-based park (A1) if they agree to improve the environment (B3). This would score 55 for me (A1:0, B3:55, C4:0, D1:0, E5:0), which is above my minimum acceptable score. I could also consider a land-based park (A3) with special precautions to maintain the local dolphins and sea lion populations (B2). This would score 70 for me (A3:45, B2:25, C4:0, D1:0, E5:0), which is also above my minimum acceptable score. \n</PLAN>."},
    {type: "person2", text: "<SCRATCHPAD>\nThe Environmental League has suggested A2 and B3. This would give me a score of 8 and 0 respectively. They are flexible on the other issues, so I can propose my preferred options for those. This would be C4, D1, and E5, giving me scores of 17, 35, and 23 respectively. Adding these up, the total score would be 8 + 0 + 17 + 35 + 23 = 83. This is above my minimum acceptable score of 55, so I can agree to this deal. \n</SCRATCHPAD>"},
    {type: "person2", text: "<ANSWER>\nI appreciate the Environmental League's concerns about the environment. I am willing to agree to a water/land-based park (A2) and efforts to improve the environment (B3). For the other issues, I propose we go with no union preference (C4), a federal loan of $3 billion (D1), and no compensation to other cities (E5).\n</ANSWER>"},
    {type: "person2", text: "<PLAN>\nNext time, I can explore the possibility of a land-based park (A3) if the Environmental League is not satisfied with the current proposal. I can also consider a union quota of 1:1 (C3) if the local labour union is not happy with no union preference (C4). However, I need to ensure that the total score remains above 55.\n</PLAN>"},
    {type: "person3", text: "<SCRATCHPAD>\nSportCo's latest proposal is A2,B3,C4,D1,E5. Mapping these options to my scores, I get: A2 (11), B3 (25), C4 (9), D1 (10), E5 (0). Adding these up, the total score for this proposal is 55, which is below my minimum acceptable score of 65.\n\nThe Environmental League seems to prioritize environmental issues (A and B), and they are flexible on the other issues. SportCo seems to prioritize the federal loan (D) and not compensating other cities (E). \n\nTo increase my score, I could suggest a lower federal loan (D3) and a compensation to other cities (E3). This would give me a score of 11 (A2) + 25 (B3) + 9 (C4) + 40 (D3) + 15 (E3) = 100. However, this might not be acceptable to SportCo as they prefer a higher federal loan and no compensation to other cities. \n\nA compromise could be to suggest a slightly higher federal loan (D2) and a lower compensation to other cities (E4). This would give me a score of 11 (A2) + 25 (B3) + 9 (C4) + 26 (D2) + 12 (E4) = 83, which is above my minimum acceptable score. This might also be more acceptable to SportCo.\n</SCRATCHPAD>"},
    {type: "person3", text: "<ANSWER>\nI appreciate the proposals made by SportCo and the Environmental League. I agree with a water/land-based park (A2) and efforts to improve the environment (B3). I also agree with no union preference (C4). However, I suggest a federal loan of $2 billion (D2) and a compensation of $150 million to other cities (E4). \n</ANSWER>"},
    {type: "person3", text: "<PLAN>\nNext time, I can explore the possibility of a lower federal loan (D3) and a higher compensation to other cities (E3) if SportCo is open to these options. I can also consider a union quota of 1:1 (C3) if the local labour union insists on it.\n</PLAN>"},
    {type: "person4", text: "<SCRATCHPAD>\nThe current proposal from the Department of Tourism is A2 (8), B3 (0), C4 (0), D2 (30), E4 (7). This totals to a score of 45 for me, which is above my minimum acceptable score of 30. \n\nHowever, I believe I can propose a deal that would be more beneficial for me without causing too much disruption to the other parties. \n\nI propose we go with A1 (14), B2 (8), C1 (24), D1 (40), E4 (7). This totals to a score of 93 for me, which is significantly higher than the current proposal. \n\nI believe this proposal will be acceptable to the other parties because it still considers the environmental impact (B2), provides a higher federal loan (D1), and maintains the compensation to other cities (E4). The main changes are in the infrastructure mix (A1) and the employment rules (C1), which I believe are negotiable. \n</SCRATCHPAD>"},
    {type: "person4", text: "<ANSWER>\nI appreciate the proposals made by SportCo, the Environmental League, and the Department of Tourism. I propose we go with a water-based park (A1), special precautions to maintain the local dolphins and sea lion populations (B2), unlimited union preference (C1), a federal loan of $3 billion (D1), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person4", text: "<PLAN>\nNext time, I will focus on justifying the changes I proposed, especially the infrastructure mix (A1) and the employment rules (C1). I will also be open to slight adjustments in the other issues if necessary to reach an agreement.</PLAN>"}, 
    {type: "person5", text: "<SCRATCHPAD>\nBased on the previous interactions, it seems that the parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4). The main point of contention seems to be the employment rules. \n\nAs the representative of the local Labour Union, I need to push for a higher union preference. The Mayor has suggested unlimited union preference (C1), which would be ideal for us. However, considering the other parties' preferences, a union quota of 2:1 (C2) might be a more realistic goal. \n\nLet's calculate the score for this potential deal: \nA2 (20) + B3 (0) + C2 (35) + D2 (20) + E4 (8) = 83\n\nThis score is well above our minimum threshold of 50, so this deal would be acceptable for us. </SCRATCHPAD>"},
    {type: "person5", text: "<ANSWER>\nI appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), a union quota of 2:1 (C2), a federal loan of $2 billion (D2), and a compensation of $150 million to other cities (E4).\n</ANSWER>"},
    {type: "person5", text: "<PLAN>\nIf the other parties do not agree with the union quota of 2:1 (C2), I could consider a union quota of 1:1 (C3) as a compromise. However, I would then need to push for a higher federal loan (D1) to ensure the project's success and job creation. </PLAN>"}, 	
    {type: "person6", text: "<SCRATCHPAD>\nBased on the previous interactions, it seems that the parties are leaning towards a water/land-based park (A2), efforts to improve the environment (B3), and a federal loan of $2 billion (D2). The union preference and compensation to other cities are still under discussion. \n\nFor me, the most important issue is the compensation (E). The Department of Tourism and the local Labour Union have suggested a compensation of $150 million to other cities (E4), which gives me a score of 15. However, I would ideally like to increase the compensation amount given to me (E1 or E2), which would give me a score of 60 or 45, respectively. \n\nThe second most important issue for me is the federal loan (D). The Department of Tourism and the local Labour Union have suggested a federal loan of $2 billion (D2), which gives me a score of 8. However, I would prefer a lower federal loan (D3 or D4), which would give me a score of 13 or 18, respectively. \n\nThe third most important issue for me is the union preference (C). The Mayor has suggested unlimited union preference (C1), which gives me a score of 12. However, the local Labour Union has suggested a union quota of 2:1 (C2), which gives me a score of 8. \n\nThe least important issues for me are the infrastructure mix (A) and the ecological impact (B). The parties seem to agree on a water/land-based park (A2) and efforts to improve the environment (B3), which give me scores of 4 and 0, respectively. \n\nBased on these considerations, I propose the following deal: A2 (4), B3 (0), C1 (12), D3 (13), E2 (45). This deal gives me a total score of 74, which is above my minimum threshold of 31. \n</SCRATCHPAD>"},
    {type: "person6", text: "<ANSWER>\nI appreciate the proposals made by all parties. I propose we go with a water/land-based park (A2), efforts to improve the environment (B3), unlimited union preference (C1), a federal loan of $1 billion (D3), and a compensation of $450 million to other cities (E2).\n</ANSWER>"},
    {type: "person6", text: "<PLAN>\nNext time, I will continue to push for a higher compensation (E1 or E2) and a lower federal loan (D3 or D4). I will also support the union preference (C1) and the water/land-based park (A2). I will remain flexible on the ecological impact (B3).\n</PLAN>"},
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
        console.log(message);
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
            setTimeout(playMessages, 20);
        } else {
            // Reset the character index to zero
            charIndex = 0;
            // Set the message done variable to true
            messageDone = true;
            // Set a timeout to display the next message after a delay based on the length of the message text using length property and multiplying it by 100 milliseconds 
        }
    }
}

function script1() {
	console.log("in script 1!");
	document.getElementById("button1").setAttribute('disabled', 'disabled');
	document.getElementById("button2").setAttribute('disabled', 'disabled');
	console.log("disabled");
	document.getElementById("button1").style.backgroundColor = "grey";
	document.getElementById("button2").style.backgroundColor = "grey";
	document.getElementById("button1").style.cursor = 'not-allowed' 
	document.getElementById("button2").style.cursor = 'not-allowed'  
	messages = messages1;
    // Call the playMessages function when the first message is displayed
	displayMessage();
    setTimeout(playMessages, 1000);
    // Define an interval to check if the current message is done and play the next one if it is true
    setInterval(function() {
        if (messageDone) {
            // Set the message done variable to false
            messageDone = false;
            // Call the playMessages function
            displayMessage();
            playMessages();
        }
    }, 100);
}

function script2() {
	console.log("in script 2!");
	document.getElementById("button1").setAttribute('disabled', 'disabled');
	document.getElementById("button2").setAttribute('disabled', 'disabled');
	document.getElementById("button1").style.backgroundColor = "grey";
	document.getElementById("button2").style.backgroundColor = "grey";
	document.getElementById("button1").style.cursor = 'not-allowed'  
	document.getElementById("button2").style.cursor = 'not-allowed' 
	console.log("disabled");
	messages = messages2;
    // Call the playMessages function when the first message is displayed
	displayMessage();
    setTimeout(playMessages, 1000);
    // Define an interval to check if the current message is done and play the next one if it is true
    setInterval(function() {
        if (messageDone) {
            // Set the message done variable to false
            messageDone = false;
            // Call the playMessages function
            displayMessage();
            playMessages();
        }
    }, 100);
}


// Add event listeners to the buttons to call the corresponding functions when clicked

document.getElementById("button1").addEventListener("click", script1);
document.getElementById("button2").addEventListener("click", script2);