"use client";

import { example } from "@/utils/ethersUtil";

const TestPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 text-white p-2 rounded-md"
        onClick={example}
      >
        Test
      </button>
    </div>
  );
};

export default TestPage;
