import { NextResponse } from "next/server";

const myHeaders = new Headers({ 'Content-Type': "application/json",  })

export async function GET() {
  const res = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.API_TREFLE_KEY}` , {
    headers: { 'Content-Type': "application/json" }
  });

  const data = await res.json();

  return NextResponse.json({ data });



}