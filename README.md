# Kuvaka Chat

Kuvaka Chat is a real-time chat application that utilizes Socket.IO for seamless client-server communication, enabling users to broadcast messages instantly.

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mrmani15/kuvaka-chat.git
    ```

2. Navigate to the server and client folders and install the necessary dependencies:

    ```bash
    cd server
    npm install
    ```

    ```bash
    cd ../client
    npm install
    ```

3. Create an `.env` file in the server folder and add the following environment variables:

    ```
    PORT=5000
    CLIENT_URL=http://localhost:5173
    ```

### Running Locally

1. In the client folder, navigate to src/App.js and replace "https://kuvaka-server.onrender.com" with your local server url

    ```bash
    http://localhost:5000
    ```

2. In the server and client folders, run the development servers:

    ```bash
    npm run dev
    ```

3. Open a web browser and navigate to:

    ```
    http://localhost:5173
    ```


## Folder structure for client:

```
├── /dist/                     # compiled output
├── /node_modules/              # 3rd party lib
├── /public/                    # Static files and logo
├── /src/                       # The source code of the application
├───── /components/             # React components
├──────├──/ Header              # Top header
├──────├──────/Input            # input field component for create message
├──────├──────/Message          # main message section where all message are shown
├────── /App.js                 # starting js point 
|──────/App.css                 # starting css file
|──────/Index.css               # main css file
|──────/main.js                 # main js file
|──────/index.html              #html file
      
```

## Folder structure for server:

```
├── node_modules                 # 3rd party lib
├──index.js                      # main server file
├──.env                          # environement variable

```

## Application Architecture

- Client-Side: The application utilizes React.js for the front end. React components are used to create the user interface elements and manage the client-side logic.

- Server-Side: The server-side is implemented using Node.js with Express.js, allowing handling WebSocket connections.

- Real-Time Communication: The application implements real-time communication between the client and server using Socket.IO, a JavaScript library for real-time web applications. 

- Socket io Concurrency: Socket io manages concurrency by maintaining a pool of WebSocket connections and handling events asynchronously. It allows for the concurrent handling of multiple socket connections, enabling real-time communication between clients and the server without blocking.