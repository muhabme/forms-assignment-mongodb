import { NextRequest, NextResponse } from 'next/server';
import { Form } from '@/models/Form';
import connect from '@/lib/mongoose';

export const GET = async (request: NextRequest) => {
    await connect();
    // Get All Form Data
    try {
        const allForms = await Form.find();

        return new NextResponse(JSON.stringify(allForms), {
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

export const POST = async (request: NextRequest) => {
    await connect();

    try {
        const date = new Date(Date.now()).toLocaleString();
        const productDoc = await Form.create({
            title: 'New Form',
            date,
            status: 'Pending',
            data: {
                name: '',
                addressOfCorrespondence: '',
                accountName: '',
                accountNumber: '',
                certificates: '',
                profits: '',
                outcomes: '',
                certificatesOther: '',
                profitsOther: '',
                outcomesOther: '',
                agreedToTOS: false,
            },
        });

        return new NextResponse(JSON.stringify(productDoc), {
            status: 201,
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
