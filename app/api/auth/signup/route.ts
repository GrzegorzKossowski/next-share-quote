import bcrypt from 'bcrypt';
import User from '@models/User';
import { connectToDB } from '@utils/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { username, password, email } = await req.json();
    if (!username || !email || !password) {
        return new NextResponse('Missing Fields', { status: 400 });
    }

    try {
        await connectToDB();
        const userExists = await User.findOne({ email });
        if (userExists) throw new Error('User already exists');
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            image: '/assets/user.jpg',
        });
        if (!user) throw new Error('Invalid user data');
        console.log(user);
        return new NextResponse(JSON.stringify(user), { status: 201 });
    } catch (error: any) {
        const message = error?.message || 'Failed to create new user';
        return new NextResponse(JSON.stringify({ error: message }), {
            status: 500,
        });
    }
}

export async function GET(req: NextRequest, res: NextResponse) {
    return new NextResponse('API works');
}
