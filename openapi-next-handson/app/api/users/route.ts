import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    users: [
      { id: 1, name: "太郎" },
      { id: 2, name: "花子" },
      { id: 3, name: "次郎" },
    ],
  });
}
