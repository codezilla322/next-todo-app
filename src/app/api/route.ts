import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();

  await new Promise((r) => setTimeout(r, 500));
  return NextResponse.json({ status: "ok" });
}
