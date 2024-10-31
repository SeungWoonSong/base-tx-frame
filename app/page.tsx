import { appURL, FRAMES_BASE_PATH, currentURL } from "@/lib/utils";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Base Tx Frame",
    description: "This is a frame to swap and send on Base",
    other: {
      ...(await fetchMetadata(new URL(FRAMES_BASE_PATH, appURL()))),
    },
  };
}

export default async function Home() {
  return (
    <div className="p-16 h-screen flex flex-col gap-16 text-white items-center justify-center bg-gradient-to-r from-10% from-[#311E19] via-[#231844] to-[#1C2127]">
      <div className="flex flex-col gap-2 text-center items-center justify-center mx-auto max-w-screen-md">
        <div className="text-5xl font-black bg-clip-text bg-gradient-to-b from-70% from-white to-white/60 text-transparent">
          Base Tx Frame
        </div>
        <div className="font-semibold text-xl">
          This is a frame following the{" "}
          <Link
            target="_blank"
            href={"https://framesjs.org/guides/open-frames"}
            className="underline"
          >
            frames.js OpenFrames
          </Link>{" "}
          standard, working on Base mainnet.
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center items-center justify-center mx-auto max-w-screen-md">
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="text-3xl font-bold text-center">Usage</div>
          <div className="text-lg sm:text-sm font-medium">
            for more details, check the{" "}
            <Link
              href={"https://github.com/ephemerahq/base-tx-frame"}
              target="_blank"
              className="underline"
            >
              Github repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
