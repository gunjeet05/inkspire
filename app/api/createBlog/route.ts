import { NextRequest, NextResponse } from "next/server";
import {prisma} from '@/database/index'
export const POST=async(request:NextRequest)=>{

    const dataRecieved=await request.json();
    const updatedData=await prisma.blog.create({
        data:dataRecieved
    })

    
    return NextResponse.json({
        message:updatedData
    },{
        status:200
    })

}