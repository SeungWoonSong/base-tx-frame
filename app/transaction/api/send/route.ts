import { NextRequest, NextResponse } from "next/server";
import { transfer } from "@/lib/transactions";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const { searchParams } = url;
  const token = searchParams.get("token") || "";
  const amount = searchParams.get("amount") || "";
  const receiverAddress = searchParams.get("receiver") || "";
  const buttonName = searchParams.get("buttonName") || "Send";

  try {
    const txCalldata = await transfer(
      token,
      amount,
      receiverAddress,
      buttonName
    );
    return NextResponse.json(txCalldata);
  } catch (e) {
    console.log("send error", e);
    return NextResponse.error();
  }
}
