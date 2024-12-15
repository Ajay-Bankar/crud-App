import connectMongoDB from '@/libs/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import Topic from '@/models/topic';

export async function POST(request) {
    // Parse the incoming JSON
    const { title, description } = await request.json();

    // Ensure the MongoDB connection is established before proceeding
    try {
        await connectMongoDB();

        // Create a new Topic document
        const newTopic = await Topic.create({ title, description });

        return NextResponse.json({ message: 'Topic created', topic: newTopic }, { status: 200 });

    } catch (error) {
        console.error('Error creating topic:', error);
        return NextResponse.json({ message: 'Failed to create topic', error: error.message }, { status: 500 });
    }
}


export async function GET() {

    await connectMongoDB();
    const topic = await Topic.find();
    return NextResponse.json({topic});

    
}

export async function DELETE(request) {

    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"} , {status: "200"});

    
}


