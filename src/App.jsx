import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "./VotingABI.json"
import Header from "./components/Header";
import VoteSection from "./components/VoteSection";
import ResultsSection from "./components/ResultsSection";

const contractAddress = "0x642AB41a71320fcbB359679D19c135DA071CBd77";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [votingContract, setVotingContract] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState("");

  // Wallet connect
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setWalletAddress(accounts[0]);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setVotingContract(contract);
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setVotingContract(null);
  };

  // Fetch candidate list
  const fetchCandidates = async () => {
    if (!votingContract) return;

    try {
      const count = await votingContract.getCandidateCount();
      console.log("Candidate count:", count.toString());

      const temp = [];

      for (let i = 0; i < count; i++) {
        const c = await votingContract.candidates(i);
        console.log(`Candidate ${i}:`, c.name, c.voteCount.toString());
        temp.push({ name: c.name, votes: c.voteCount.toString() });
      }

      setCandidates(temp);
    } catch (err) {
      console.error("Error fetching candidates", err);
    }
  };
  

  useEffect(() => {
    if (votingContract) fetchCandidates();
  }, [votingContract]);

  // Vote
  const handleVote = async (e) => {
    e.preventDefault();
    if (!selectedCandidate) return alert("Select a candidate");
    try {
      const tx = await votingContract.vote(parseInt(selectedCandidate));
      await tx.wait();
      alert("Vote cast successfully!");
      fetchCandidates();
    } catch (err) {
      console.error(err);
      alert("Vote failed. Maybe already voted or voting ended.");
    }
  };

  return (
    <div>
      <Header
        walletAddress={walletAddress}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
      />
      <main className="min-h-screen bg-gray-50 p-6">
        <VoteSection
          walletAddress={walletAddress}
          candidates={candidates}
          selectedCandidate={selectedCandidate}
          setSelectedCandidate={setSelectedCandidate}
          handleVote={handleVote}
        />
        <ResultsSection candidates={candidates} />
      </main>
    </div>
  );
}

export default App;
