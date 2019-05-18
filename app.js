const express = require('express');
const builder = require('botbuilder');

// Setup Express Server
const app = express();
const port = 3978 || process.env.PORT;

// Chat connector for communicating with Bot Framework Service 
const adapter = new builder.BotFrameworkAdapter({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Listen for messages from users  
app.post('/api/messages', (req,res) => {
   adapter.processActivity(req, res, async (turnContext) => {
        // Do something with incoming activity
        if (turnContext.activity.type === 'message') {
            // Get the user's text
            const utterance = turnContext.activity.text;

            // Send a reply
            await turnContext.sendActivity(`I heard you say ${utterance}`);
        }
   });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});