import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, service, businessTitle, location, message } = body;

        // Validate required fields
        if (!name || !phone || !email || !service || !businessTitle || !location || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Log the form submission
        console.log('Contact form submission:', {
            name,
            phone,
            email,
            service,
            businessTitle,
            location,
            message,
            timestamp: new Date().toISOString(),
        });

        // Send email using ZeptoMail API
        const zeptoMailResponse = await fetch('https://api.zeptomail.in/v1.1/email/template', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Zoho-enczapikey PHtE6r1bE+nigzEv9RUAsfbqR87yNIos9e1lfQdOt44TXKIGGk1S+NEvkTXhqB55XPVHEKGSwIxqubuUu+7UcW+4YWsaXWqyqK3sx/VYSPOZsbq6x00asV8Zf0zeVIXmcdFr0CTXuN7eNA=='
            },
            body: JSON.stringify({
                mail_template_key: '2518b.5ca07f11c3f3c129.k1.027984c0-9143-11f0-ac10-cabf48e1bf81.199474b570c',
                from: {
                    address: 'noreply@fullstackartists.com',
                    name: 'noreply'
                },
                to: [{
                    email_address: {
                        address: 'deepakvish7354@gmail.com',
                        name: 'Deepak Vishwakarma'
                    }
                }],
                merge_info: {
                    Email: email,
                    phone: phone,
                    name: name,
                    location: location,
                    businessType: businessTitle,
                    message: message
                }
            })
        });

        if (!zeptoMailResponse.ok) {
            const errorData = await zeptoMailResponse.json();
            console.error('ZeptoMail API error:', errorData);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        const zeptoMailData = await zeptoMailResponse.json();
        console.log('Email sent successfully:', zeptoMailData);

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
