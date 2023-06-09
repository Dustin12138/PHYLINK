﻿"use strict";
var readWriteRanges = ["819000 81a000",
"84a000 84b000",
"8f0000 8f1000",
"94b000 94c000",
"955000 956000",
"960000 961000",
"99e000 99f000",
"9bd000 9be000",
"9cb000 9d1000",
"b09000 b0a000",
"b0b000 b0c000",
"b14000 b15000",
"b84000 b85000",
"b98000 b99000",
"bb6000 bb7000",
"bc3000 bc4000",
"bd8000 bd9000",
"bdd000 bde000",
"bf0000 bf1000",
"bfb000 bfc000",
"bfe000 bff000",
"c06000 c0a000",
"c0b000 c0e000",
"c10000 c12000",
"c16000 c1e000",
"c1f000 c21000",
"c23000 c24000",
"c8b000 c8c000",
"c9b000 c9c000",
"c9e000 ca0000",
"ebb000 ebd000",
"ebe000 ec3000",
"ec6000 ec8000",
"eca000 ecb000",
"ed9000 eda000",
"169d000 16af000",
"16b1000 16b2000",
"16d1000 16d4000",
"16d5000 16d8000",
"2808000 2809000",
"2b40000 2b42000",
"2c1d000 2c1e000",
"2c24000 2c25000",
"2c7d000 2c89000",
"2c8c000 2c8d000",
"2d91000 2d92000",
"2d94000 2da0000",
"2da1000 2da6000",
"2da8000 2da9000",
"2db0000 2db1000",
"2def000 2df0000",
"2df1000 2df2000",
"2dfa000 2e00000",
"2e06000 2e07000",
"2eac000 2eae000",
"2eb3000 2eb5000",
"2eb7000 2eb9000",
"2ed1000 2ed8000",
"2efb000 2efe000",
"2f84000 2f85000",
"2fa3000 2fa5000",
"2fac000 2fad000",
"2fbe000 2fbf000",
"2fe7000 2ffe000",
"2fff000 3011000",
"3012000 3016000",
"3020000 3022000",
"3038000 303d000",
"304c000 304d000",
"308c000 3156000",
"3159000 315a000",
"319a000 319b000",
"319d000 31a8000",
"31d6000 31d7000",
"31d9000 31e4000",
"3302000 3305000",
"3306000 3311000",
"3312000 3317000",
"3319000 331a000",
"331f000 3320000",
"33d2000 33d4000",
"33e1000 33e8000",
"33e9000 33ee000",
"33f0000 33f1000",
"33f3000 33f4000",
"10049000 1004a000",
"10053000 10056000",
"10060000 10063000",
"1d014000 1d016000",
"1d030000 1d031000",
"1d061000 1d064000",
"32ada000 32adb000",
"32adc000 32ade000",
"32ae1000 32ae4000",
"32aeb000 32aec000",
"32af1000 32afc000",
"32afd000 32afe000"];
function initializeScript()
{
    return [new host.apiVersionSupport(1, 7)];
}

function invokeScript()
{
    host.diagnostics.debugLog("***> Starting Script \n");
    var ctl = host.namespace.Debugger.Utility.Control;   
    
    
    for(var range of readWriteRanges)
    {
        var output = ctl.ExecuteCommand("db " + range);
        for(var line of output)
        {
            host.diagnostics.debugLog("-> ", line, "\n");
        }
        host.diagnostics.debugLog("\n\n\n");
    }
    //
    // Insert your script content here.  This method will be called whenever the script is
    // invoked from a client.
    //
    // See the following for more details:
    //
    //     https://aka.ms/JsDbgExt
    //
}
