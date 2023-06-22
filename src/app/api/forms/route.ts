import { NextRequest, NextResponse } from 'next/server';
import { Form } from '@/models/Form';
import connect from '@/lib/mongoose';

export const GET = async (request: NextRequest) => {
    await connect();
    // Get All Form Data
    try {
        const allForms = await Form.find();
        allForms.sort(function (a, b): any {
            const date1: number = new Date(b.date).getTime();
            const date2: number = new Date(a.date).getTime();
            return date1 - date2;
        });

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
