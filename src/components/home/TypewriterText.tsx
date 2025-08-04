'use client';
import Typewriter from 'typewriter-effect';

export default function TypewriterText() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString( "Hire the right talent fast")
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
      }}
      options={{
         strings: [
          "Connecting job seekers and employers",
          "Find your dream job easily",
          "Your digital bridge to careers"
        ],
        autoStart:true,
        loop:true
      }}
      
    />
  );
}
