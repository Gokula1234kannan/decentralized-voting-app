import React from "react";

const Header = ({ walletAddress, connectWallet, disconnectWallet }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-4 shadow-lg text-white flex items-center justify-between">
      <h1 className="text-3xl font-extrabold tracking-wide">🗳️ Voting DApp</h1>
      <div className="flex items-center space-x-4">
        {walletAddress ? (
          <>
            <button className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-xl shadow">
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </button>
            <button
              className="bg-red-500 text-white font-semibold px-4 py-2 rounded-xl"
              onClick={disconnectWallet}
            >
              Disconnect
            </button>
          </>
        ) : (
          <button
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-xl shadow"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
