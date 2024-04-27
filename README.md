# Brainbase Kafka Template

This assignment requires you to create the Brainbase Kafka internal AI worker.

## Installing the template

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/BrainbaseHQ/brainbase-kafka-template
cd brainbase-kafka-template
```

Since the project uses only built-in Node.js modules, no additional npm installations are required.

### Making the Script Executable

To make the `main.js` script executable, run the following command:

```bash
chmod +x main.js
```

### Linking the Package

Link the package globally on your system to run it from anywhere using `npx`. Navigate to the project directory and run:

```bash
npm link
```

### Usage

To start the chat application, you can use the following command from anywhere in your terminal:

```bash
npx brainbase-kafka-template
```

Alternatively, you can also run the script directly using Node.js if you are in the project directory:

```bash
node main.js
```

### Exiting the Chat

To exit the chat, simply type `exit` and hit enter. The application will close.

## Components

The assignment has the following components:

- `main.js`: Primary part where the terminal chat application runs
- `functions.js`: Some utility functions that need to be implemented for Kafka to be able to interact with the file system (feel free to add more functions as you need)
- `log_utils.js`: Some utility functions for logs (no need to touch)
- `/boilerplate`: This is what an application code should look like

## Milestones

**This is a challenging assignment.** Therefore you're given the following milestones that get progressively more difficult, and provide necessary structure for how to implement the entire system.

### Milestone 1: Terminal Chat
For Milestone 1, all you need to do is connect the provided application to the OpenAI GPT-4 API to create a lite version of ChatGPT on the terminal. **No function calling or streaming necessary.**

#### Criteria
- [ ] The OpenAI API is successfully set up.
- [ ] The system is able to keep a conversation going.

### Milestone 2: Basic file tasks
For Milestone 2, you need to allow your basic chat app from Milestone 1 to create the correct file structure for a new app based on user instruction.

#### Criteria
- [ ] The OpenAI API is successfully set up.
- [ ] The system is able to keep a conversation going.


Kafka provides a chat interface for you to explain what integration you want it to create and to nudge it along the way.

Upon start, you can tell Kafka something like the following:

```bash
I want you to create the send_email action for the gmail app. The output of the action should have the id of the email sent and the thread id.
```

Following this Kafka will ask you to provide the necessary documentation or the URL to the documentation.

After this Kafka will be able to go ahead and create the following file structure:

```bash
apps/
└── gmail/
    ├── index.js
    └── actions/
        └── send_email.js
```

Kafka will also fill in these files with the boilerplate code for the necessary files:

```javascript
// apps/gmail/index.js
const { action_1 } = require('/actions/action_1.js');

export const app = {
    name: 'gmail',
    displayName: 'Gmail',
    authors: ['Kafka'],
    actions: [
        action1
    ]
};
```

```javascript
// apps/gmail/actions/send_email.js
const send_email = {
    name: 'send_email',
    description: 'Sends an email',
    displayName: 'Send email',
    outputSchema: {
        type: 'object',
        properties: {
            email_id: {
                type: 'string',
                displayName: 'Id of email'
            },
            thread_id: {
                type: 'string',
                displayName: 'Id of thread'
            },
        },
    },
    props: {
    },
    async run({ auth, props }) {
    },

};

module.exports = {
    send_email,
};
```

Here these files will be bare or very fleshed out based on how much information you already supplied Kafka at the beginning. Here we see that we didn't tell Kafka anything about the input props that this function needs to take, so we can say:

```bash
The function should take the following arguments: sender, receiver, body and subject
```

Following this Kafka will go ahead and modify the correct section of `apps/gmail/actions/send_email.js`.

Talking through it, you can iterate Kafka to a point where you're satisfied with the output.