import { use, useEffect, useState } from "react";


function Count()
{
    var cval = 3899;
    const [Int,SetInt]=useState(cval);
    const lzo = (x) => x<10?"0"+x:x;

        useEffect(()=>{
            if(Int>0)
                
       setTimeout(()=>SetInt(Int-1),1000);
    }
,[Int]);
let day = 24*60*60,hrs=60*60,min = 60;

let FinalDay,RS,finalHrs,FinalMin,M,finalSec;
/*
    1d = 24h ,86400s , 1440m
    1h = 1/24 d
    1s = 1/86400 d
    1m = 1/1440 d

        var da={d:24*60*60,h:60*60,m:60};
    var f=(x)=>Math.floor(x);
    var ar=[];
    ar.push(f(G/da.d),f(G%da.d));
    Val/86400 , Val%86400

    ar.push(f(ar[1]/da.h),f(ar[1]%da.h));

    ar.push(f(ar[3]/da.m),f(ar[3]%da.m));
    
    i('D').value=week(ar[0]);
     i('H').value=ar[2]+'h';
     i('M').value=ar[4]+'m';
     i('S').value=ar[5]+'s';

*/


FinalDay = Math.floor(Int/day);     // CONV DAY
RS = Math.floor(Int%day);       // REMAINING SECS
finalHrs = Math.floor(RS/hrs);     //  LEFT HOURS =  00
M = Math.floor(RS%hrs);      // MINS LEFT
FinalMin = Math.floor(M/min);       //..LAST SECS


finalSec = Math.floor(M%min);



            return <>
<pre>{lzo(FinalDay)} d :{lzo(finalHrs)} h: {lzo(FinalMin)} m : {lzo(finalSec)} s</pre>
</>
    }
// }
export default Count;