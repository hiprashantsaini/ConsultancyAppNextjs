// // app/api/submit-form/route.ts
// import { NextRequest, NextResponse } from 'next/server';

// // Replace this with your deployed Apps Script web app URL
// const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby1RsP3-owKPsAMTWduGWDSJMBHzhIPczWM4lCDJ15uj6E2f77m-e0ZkOXPrs5rXPCG/exec';

// export async function POST(request: NextRequest) {
//   try {
//     // Parse the incoming form data
//     const formData = await request.json();
    
//     // Validate required fields
//     if (!formData.name || !formData.email || !formData.message) {
//       return NextResponse.json(
//         { 
//           success: false, 
//           message: 'Name, email, and message are required fields.' 
//         },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       return NextResponse.json(
//         { 
//           success: false, 
//           message: 'Please enter a valid email address.' 
//         },
//         { status: 400 }
//       );
//     }

//     // Send data to Google Apps Script
//     const response = await fetch(APPS_SCRIPT_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });

//     if (!response.ok) {
//       throw new Error(`Apps Script responded with status: ${response.status}`);
//     }

//     const result = await response.json();

//     if (result.success) {
//       return NextResponse.json({
//         success: true,
//         message: 'Form submitted successfully!',
//         timestamp: result.timestamp
//       });
//     } else {
//       return NextResponse.json(
//         { 
//           success: false, 
//           message: result.message || 'Failed to submit form to Google Sheets.' 
//         },
//         { status: 500 }
//       );
//     }

//   } catch (error) {
//     console.error('Error submitting form:', error);
    
//     return NextResponse.json(
//       { 
//         success: false, 
//         message: 'Internal server error. Please try again later.' 
//       },
//       { status: 500 }
//     );
//   }
// }

// // Optional: Handle GET requests for testing
// export async function GET() {
//   return NextResponse.json({
//     message: 'Contact form API is working!',
//     timestamp: new Date().toISOString()
//   });
// }

// app/api/submit-form/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Replace this with your deployed Apps Script web app URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwT6nWW2haPeq2TCW03aC3pXr8V2Un7QDeOo57Ok9JOMnWTNCl1mXOJJAl3CGsilJDunA/exec';// savior hire
// const APPS_SCRIPT_URL ='https://script.google.com/macros/s/AKfycbyg42ejlNTJ7WXc510U_eKSXoyQCycZJn9WGkfI4dmJrd7b5ydHkkCSbccS-OloP4EI/exec';//my

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming form data
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.email || !formData.subject || !formData.message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email, subject, and message are required fields.' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address.' 
        },
        { status: 400 }
      );
    }

    // Send data to Google Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Apps Script responded with status: ${response.status}`);
    }

    const result = await response.json();

    console.log("result  contact form:",result);

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully!',
        timestamp: result.timestamp
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: result.message || 'Failed to submit form to Google Sheets.' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error submitting form:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'Contact form API is working!',
    timestamp: new Date().toISOString()
  });
}