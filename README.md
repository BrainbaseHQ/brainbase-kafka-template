# Brainbase Kafka

Kafka is an internal AI worker for Brainbase that helps with creating integrations.

## Installing Kafka

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

## Using Kafka

Kafka provides a chat interface for you to explain what integration you want it to create and to nudge it along the way.

Upon start, you can tell Kafka something like the following:

```bash
I want you to create the send_email action for the gmail app. The output of the action should have the id of the email sent and the thread id.
```

Following this Kafka will ask you to provide the necessary documentation or the URL to the documentation.

After this Kafka will be able to go ahead and create the following file structure:

```bash
apps/
└── gmail
    ├── index.js
    └── actions
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


### Notes on the README

- **Prerequisites**: This section ensures that the user has Node.js installed, which is necessary to run the script.
- **Installation**: Detailed steps guide the user through getting the project set up on their local machine.
- **Making the Script Executable and Linking the Package**: These instructions are crucial for setting up the script so it can be run with `npx`.
- **Usage**: Provides clear commands for how to run the application, both locally and globally.
- **Contributing**: Encourages others to contribute to the project.
- **License**: It's good practice to include a license; MIT is a common choice for open source.