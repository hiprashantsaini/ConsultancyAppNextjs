import { NextRequest, NextResponse } from 'next/server';

// Replace this with your deployed Apps Script web app URL
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzfPHWuRBkzBOLfLjBM5Baib1XYMEN5xLM62atML2UPpy0mMPSuX3k1wvfyZZDMrlP6/exec';//Savior Hire
// const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxpMesbkVT6SxC0O7hHQNRfUTpN29OjjX3Ucn0aF7a9Kddb3hFbdQT2gIZRfcN9YGw/exec';//my

export async function POST(request: NextRequest) {
  try {
    // Parse the incoming form data
    const formData = await request.json();
    
    // Validate required fields
    if (!formData.plan || !formData.name || !formData.email || !formData.phone) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Plan, name, email, and phone are required fields.' 
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

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid phone number.' 
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
      body: JSON.stringify({
        ...formData,
        type: 'plan_request' // Add type to distinguish from other forms
      }),
    });

    if (!response.ok) {
      throw new Error(`Apps Script responded with status: ${response.status}`);
    }

    const result = await response.json();

    if (result.success) {

      console.log("data result :",result);
      return NextResponse.json({
        success: true,
        message: 'Plan request submitted successfully!',
        timestamp: result.timestamp
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: result.message || 'Failed to submit plan request to Google Sheets.' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error submitting plan request:', error);
    
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
    message: 'Plan request API is working!',
    timestamp: new Date().toISOString()
  });
}