'use client';

//ALthouth in next js we do not need of it
import { useEffect } from "react";

import { usePathname } from "next/navigation";

const ScrollToTop=()=>{

    const pathname=usePathname();
    useEffect(()=>{
       window.scrollTo({
        top:0,
        behavior:'instant'
       });
    },[pathname]);
    return null;
}

export default  ScrollToTop;