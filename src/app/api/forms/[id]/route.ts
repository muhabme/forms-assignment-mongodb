import { NextRequest, NextResponse } from 'next/server';
import { Form } from '@/models/Form';

export const GET = async (request: NextRequest) => {
    const id = request.url.split('/forms/')[1];

    // Get One Form Data
    try {
        const form = await Form.findOne({ _id: id });
        return new NextResponse(JSON.stringify(form), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Internal Server Error', error }),
            {
                status: 500,
            },
        );
    }
};

export const PUT = async (request: NextRequest) => {
    const id = request.url.split('/forms/')[1];
    try {
        const newData = await request.json();

        const form = await Form.findOneAndUpdate(
            {
                _id: id,
            },
            newData,
            { new: true },
        );

        return new NextResponse(JSON.stringify({ message: 'success' }), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Internal Server Error', error }),
            {
                status: 500,
            },
        );
    }
};

export const DELETE = async (request: NextRequest) => {
    const id = request.url.split('/forms/')[1];
    try {
        await Form.findOneAndDelete({
            _id: id,
        });

        return new NextResponse(JSON.stringify({ message: 'success' }), {
            status: 200,
        });
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: 'Internal Server Error', error }),
            {
                status: 500,
            },
        );
    }
};
