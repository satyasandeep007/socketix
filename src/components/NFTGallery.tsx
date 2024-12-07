export default function NFTGallery() {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* This would be populated with actual NFTs from the user's wallet */}
      <div className="bg-gray-800/50 rounded-xl p-4 text-center">
        <p className="text-gray-400">No NFTs earned yet</p>
      </div>
    </div>
  );
}
