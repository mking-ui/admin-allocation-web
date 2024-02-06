import { Tablecollection } from "@/models/Table2";
import { NextResponse } from "next/server";

export async function GET(req, { params: { id } }) {
  try {
    const level1 = await Tablecollection.findOne({_id:id});
    return NextResponse.json(level1);
  } catch (error) {
    return NextResponse.json("error in fetching single id");
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    //Get the data from the request
    const {
      newCode: code,
      newTitle: title,
      newDesc: desc,
      newName: name,
      newPosition: position,
      newField: field,
      newEmail: email,
      newPhone: phone,
      newImage: image,
      newLevel: level,
    } = await request.json();
    const newUser = {
      code,
      title,
      desc,
      name,
      position,
      field,
      email,
      phone,
      image,
      level,
    };
    //Use the Model to update
    await Tablecollection.findByIdAndUpdate(id, newUser);
    return NextResponse.json(
      {
        message: "User Updated successfully",
        data: newUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to Create a User",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
