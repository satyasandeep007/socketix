"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getEventById } from "@/lib/data";
import EventImage from "@/components/EventImage";
import { useState, useEffect } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { prepareMintTransaction } from "@/utils/ethersUtil";
import { toast } from "react-toastify";

export default function EventDetailPage() {
  const { id } = useParams();
  const event = getEventById(id as string);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Add Wagmi hooks
  const { isConnected } = useAccount();
  //   const { data: hash, isPending, writeContract, error } = useWriteContract();
  //   const { isLoading: isConfirming, isSuccess: isConfirmed } =
  //     useWaitForTransactionReceipt({
  //       hash,
  //     });

  // Update handleRegister
  const handleRegister = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      setIsLoading(true);
      toast.loading("Preparing your ticket purchase...");

      const tx = await prepareMintTransaction(Number(id));
      //   writeContract(tx);

      toast.dismiss();
      setTimeout(() => {
        toast.loading("Please confirm the transaction in your wallet...");
      }, 1000);
      setIsRegistered(true);
      toast.success("🎉 Successfully purchased your ticket!");

      // Optional: Show additional information
      //   toast.message("Ticket Details", {
      //     description: "You can view your ticket in your wallet.",
      //     action: {
      //       label: "View Transaction",
      //       onClick: () => window.open(`https://arbiscan.io/tx/`, "_blank"),
      //     },
      //   });
    } catch (error) {
      console.error("Registration failed:", error);
      toast.error("Failed to prepare transaction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: event?.title,
          text: event?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support native sharing
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!"); // Replace with proper notification
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen bg-[#F8F8F9] font-poppins pt-32 px-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-3xl font-light text-black mb-4">
            Event not found
          </h1>
          <Link
            href="/events"
            className="text-black hover:text-black] transition-colors"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F9] font-poppins">
      <main className="pt-12 py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/events"
              className="text-black/60 hover:text-black transition-colors"
            >
              ← Back to Events
            </Link>
          </div>

          {/* Event Header */}
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12 mb-16">
            <div>
              <h1 className="text-4xl font-light text-black mb-6">
                {event.title}
              </h1>
              <p className="text-black/80 text-lg mb-8">{event.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="px-4 py-2 rounded-lg bg-[#FFE34E20] text-black">
                  {event.date} at {event.time}
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#B197FC20] text-black">
                  {event.location}
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#E2E8F0] text-black">
                  {event.category}
                </span>
              </div>
              <button
                onClick={handleRegister}
                disabled={isRegistered || isLoading}
                className={`bg-black text-white px-8 py-4 rounded-lg transition-colors font-medium
                  ${
                    isRegistered || isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-black/80"
                  }`}
              >
                {isLoading
                  ? "Preparing..."
                  : isRegistered
                  ? "Ticket Minted ✓"
                  : "Buy Ticket"}
              </button>
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="bg-white border text-black px-8 py-4 rounded-lg transition-colors font-medium mx-2"
              >
                Share Event
              </button>
            </div>

            {/* Event Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <EventImage
                title={event.title}
                type={event.image.type}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Event Details */}
          <div className="grid lg:grid-cols-[2fr,1fr] gap-12">
            <div className="space-y-8">
              {/* About Section */}
              <section className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-medium text-black mb-4">
                  About this event
                </h2>
                <p className="text-black/80 leading-relaxed">
                  {event.description}
                </p>
              </section>

              {/* Location Section */}
              <section className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-medium text-black mb-4">
                  Location
                </h2>
                <p className="text-black/80 mb-4">{event.location}</p>
                <div className="aspect-[16/9] relative rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}&q=place_id:${event.placeId}&zoom=15`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-none"
                  />
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    event.location
                  )}&query_place_id=${event.placeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-black hover:text-black] transition-colors inline-block"
                >
                  View larger map →
                </a>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Organizer Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-medium text-black mb-4">
                  Organized by
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center text-white">
                    {event.organizer?.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-black">
                      {event.organizer?.name}
                    </p>
                    <p className="text-black/60 text-sm">Event Organizer</p>
                  </div>
                </div>
              </div>

              {/* Event Stats */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-black/60">Capacity</span>
                    <span className="text-black font-medium">
                      {event.capacity} spots
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-black/60">Attendees</span>
                    <span className="text-black font-medium">
                      {event.attendees} registered
                    </span>
                  </div>
                  <div className="w-full bg-[#F8F8F9] rounded-lg h-2">
                    <div
                      className="bg-black h-2 rounded-lg"
                      style={{
                        width: `${(event.attendees / event.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
