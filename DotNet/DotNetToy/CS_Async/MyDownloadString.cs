using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Diagnostics;

namespace CS_Async
{
    class MyDownloadString
    {
        Stopwatch sw = new Stopwatch();
        public void DoRun()
        {
            const int LargeNumber = 6000000;
            sw.Start();
            int t1 = CountCharacters(1, "http://www.microsoft.com");
            int t2 = CountCharacters(1, "https://www.baidu.com");
            CountToALargeNumber(1, LargeNumber);
            CountToALargeNumber(2, LargeNumber);
            CountToALargeNumber(3, LargeNumber);
            CountToALargeNumber(4, LargeNumber);
            Console.WriteLine("微软网站的字节数：{0}",t1);
            Console.WriteLine("百度网站的字节数：{0}", t2);
        }

        private void CountToALargeNumber(int id, int value)
        {
            for (long i = 0; i < value; i++)
            {
                ;
            }
            Console.WriteLine(" End Counting {0} : {1,4:N0} ms",id,sw.Elapsed.TotalMilliseconds);
        }

        private int CountCharacters(int id, string uriString)
        {
            WebClient wc1 = new WebClient();
            Console.WriteLine("Starting call{0} : {1,4:N0} ms",id,sw.Elapsed.TotalMilliseconds);
            string result = wc1.DownloadString(new Uri(uriString));
            Console.WriteLine("Call {0} completed : {1,4:N0} ms", id, sw.Elapsed.TotalMilliseconds);
            return result.Length;
        }
    }
}
