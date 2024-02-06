import { Tablecollection } from "@/models/Table2";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const newBody = await Tablecollection.create(body);
    return NextResponse.json(newBody, { status: 201 });
  } catch (error) {
    return NextResponse.json("Fail to add data", { status: 500 });
  }
}
export async function GET(req) {
  try {
    const datat = await Tablecollection.find();
    return NextResponse.json(datat, { status: 201 });
  } catch (error) {
    return NextResponse("Fail to fetch", { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await Tablecollection.findByIdAndDelete(id);
    return NextResponse.json("succesfully deleted");
  } catch (error) {
    return NextResponse.json("unable to delete");
  }
}
