import React from "react";
import { FaVoteYea } from "react-icons/fa"; 

const ResultsSection = ({ candidates }) => {
  return (
    <section className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
      <div className="flex items-center space-x-2 mb-4">
        <FaVoteYea className="text-indigo-600 text-2xl" />
        <h3 className="text-3xl font-bold text-gray-800">Live Results</h3>
      </div>

      {candidates.length === 0 ? (
        <p className="text-gray-500 text-center">
          No votes have been cast yet.
        </p>
      ) : (
        <ul className="space-y-4">
          {candidates.map((c, i) => (
            <li
              key={i}
              className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition p-4 rounded-xl border border-gray-200 shadow-sm"
            >
              <span className="font-semibold text-lg text-gray-800">
                {i + 1}. {c.name}
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold text-sm shadow">
                {c.votes} Vote{() => (c.votes === "1" ? "" : "s")}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ResultsSection;
