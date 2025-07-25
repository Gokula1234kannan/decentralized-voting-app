# Decentralized Voting App

This is a decentralized voting application built with React and Vite, leveraging the Ethereum blockchain via ethers.js. Users can connect their MetaMask wallet, view candidates, cast votes, and see live voting results in real-time.

## Features

- Connect and disconnect MetaMask wallet
- Fetch and display candidates from the Ethereum smart contract
- Cast votes for selected candidates
- Live update of voting results
- Responsive and modern UI with Tailwind CSS

## Prerequisites

- Node.js (v14 or higher recommended)
- MetaMask browser extension installed and configured
- Access to an Ethereum network where the voting smart contract is deployed (e.g., local testnet, Rinkeby, or mainnet)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd decentralized-voting-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the App

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to the URL shown in the terminal (usually http://localhost:3000).

## Usage

1. Connect your MetaMask wallet by clicking the "Connect Wallet" button.
2. Select a candidate from the list.
3. Click the "Vote" button to cast your vote.
4. View live voting results in the results section.
5. You can disconnect your wallet by clicking the "Disconnect Wallet" button.

## Technologies Used

- React
- Vite
- ethers.js
- Tailwind CSS
- MetaMask
- React Icons

## Contract Information

- Contract Address: `0x642AB41a71320fcbB359679D19c135DA071CBd77`
- Contract ABI: Located in `src/VotingABI.json`

## License

This project is licensed under the MIT License.
