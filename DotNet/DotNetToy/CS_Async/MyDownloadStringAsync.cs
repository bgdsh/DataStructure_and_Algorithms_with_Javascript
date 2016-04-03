using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Diagnostics;
using System.Threading.Tasks;

namespace CS_Async
{
    class MyDownloadStringAsync
    {
        Stopwatch sw = new Stopwatch();
        public void DoRun()
        {
            const int LargeNumber = 6000000;
            sw.Start();
            Task<int> t1 = CountCharactersAsync(1, "http://www.microsoft.com");
            
            Task<int> t2 = CountCharactersAsync(2, "https://www.baidu.com");
            t1.Wait();
            t2.Wait();
            Console.WriteLine("异步：微软网站的字节数：{0}", t1.Result);
            Console.WriteLine("异步：百度网站的字节数：{0}", t2.Result);
            CountToALargeNumber(1, LargeNumber);
            CountToALargeNumber(2, LargeNumber);
            CountToALargeNumber(3, LargeNumber);
            CountToALargeNumber(4, LargeNumber);
            t1.Wait();
            t2.Wait();
            Console.WriteLine("异步：微软网站的字节数：{0}",t1.Result);
            Console.WriteLine("异步：百度网站的字节数：{0}", t2.Result);
            Console.WriteLine("aaa");
        }

        private void CountToALargeNumber(int id, int value)
        {
            for (long i = 0; i < value; i++)
            {
                ;
            }
            Console.WriteLine(" End Counting {0} : {1,4:N0} ms",id,sw.Elapsed.TotalMilliseconds);
        }

        private async  Task<int> CountCharactersAsync(int id, string uriString)
        {
            WebClient wc1 = new WebClient();
            Console.WriteLine("开始调用{0} : {1,4:N0} ms",id,sw.Elapsed.TotalMilliseconds);
            string result =await wc1.DownloadStringTaskAsync(new Uri(uriString));//不知道为何执行到这里就执行不下去了。
            Console.WriteLine("调用 {0} 完成 : {1,4:N0} ms", id, sw.Elapsed.TotalMilliseconds);
            return result.Length;
        }
    }
}
