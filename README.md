# Brainbase Kafka

Kafka is an internal AI worker for Brainbase that helps with creating integrations.

## Running Kafka

### Prerequisites

Before you begin, ensure you have Node.js installed on your machine. If not, you can download and install it from [Node.js official website](https://nodejs.org/).

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/terminal-chat.git
cd terminal-chat
```

Since the project uses only built-in Node.js modules, no additional npm installations are required.

### Making the Script Executable

To make the `chat.js` script executable, run the following command:

```bash
chmod +x chat.js
```

### Linking the Package

Link the package globally on your system to run it from anywhere using `npx`. Navigate to the project directory and run:

```bash
npm link
```

### Usage

To start the chat application, you can use the following command from anywhere in your terminal:

```bash
npx terminal-chat
```

Alternatively, you can also run the script directly using Node.js if you are in the project directory:

```bash
node chat.js
```

### Exiting the Chat

To exit the chat, simply type `exit` and hit enter. The application will close.

### Contributing

Contributions are welcome! Please feel free to submit a pull request.

### License

This project is open-source and available under the MIT License.

### Notes on the README

- **Prerequisites**: This section ensures that the user has Node.js installed, which is necessary to run the script.
- **Installation**: Detailed steps guide the user through getting the project set up on their local machine.
- **Making the Script Executable and Linking the Package**: These instructions are crucial for setting up the script so it can be run with `npx`.
- **Usage**: Provides clear commands for how to run the application, both locally and globally.
- **Contributing**: Encourages others to contribute to the project.
- **License**: It's good practice to include a license; MIT is a common choice for open source.

Make sure to replace `https://github.com/yourusername/terminal-chat.git` with the actual URL of your GitHub repository. This README should be placed in the root directory of your project so that it's easily visible to anyone who visits your repository on GitHub.