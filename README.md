# Museum Agent

An interactive museum guide agent that uses OpenAI's Realtime API to create engaging conversations about art exhibits.

## Features

- Interactive voice conversations with a museum guide
- Multiple voice options with adjustable speed
- Information about the "La Raza Art and Media Collective" exhibition
- Responsive UI with image display capabilities

## Setup Instructions

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- OpenAI API key with access to the Realtime API

### Environment Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

### Running the Application

1. Start the development server:
   ```
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:3000`
3. Click the "Connect" button to start interacting with the museum guide

## Usage

1. Select your preferred voice from the dropdown menu
2. Adjust the voice speed using the slider
3. Click "Connect" to establish a connection with the agent
4. Use the "Talk" button (with Push-to-talk enabled) or type your questions in the text box
5. The agent will respond and show relevant images from the exhibition

## Technologies Used

- Next.js
- React
- OpenAI Realtime API
- WebRTC for real-time audio communication

## License

See the LICENSE file for details.
