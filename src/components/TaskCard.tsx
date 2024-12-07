"use client";

import Image from "next/image";

interface TaskCardProps {
  hashtag: string;
  likesRequired: number;
  nftReward: string;
  deadline: string;
}

export default function TaskCard({
  hashtag,
  likesRequired,
  nftReward,
  deadline,
}: TaskCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
      <div className="mb-4">
        <Image
          src={nftReward}
          alt="NFT Reward"
          width={200}
          height={200}
          className="rounded-lg w-full"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{hashtag}</h3>
      <div className="space-y-2 text-sm text-gray-400">
        <p>Required Likes: {likesRequired}</p>
        <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-blue-400">0/{likesRequired}</span>
        </div>
        <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </div>
  );
}
