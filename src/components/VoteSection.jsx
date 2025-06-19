import React from "react";

const VoteSection = ({
  walletAddress,
  candidates,
  selectedCandidate,
  setSelectedCandidate,
  handleVote,
}) => {
  return (
    <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Cast Your Vote
      </h2>

      {walletAddress ? (
        <form onSubmit={handleVote} className="space-y-4">
          <select
            value={selectedCandidate}
            onChange={(e) => setSelectedCandidate(e.target.value)}
            className="p-3 w-full rounded border border-gray-300"
          >
            <option value="">-- Choose a Candidate --</option>
            {candidates.map((candidate, index) => (
              <option key={index} value={index}>
                {candidate.name}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            Vote Now
          </button>
        </form>
      ) : (
        <p className="text-gray-500">Please connect your wallet to vote.</p>
      )}
    </section>
  );
};

export default VoteSection;
