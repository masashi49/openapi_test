import { NextResponse } from 'next/server';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();

  const { name, email } = body;

  return NextResponse.json({
    //id,
    name,
    email,
  });
}
