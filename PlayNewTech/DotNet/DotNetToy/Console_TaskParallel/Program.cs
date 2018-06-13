using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console_TaskParallel
{
    class Program
    {
        static void Main(string[] args)
        {
            Parallel.For(0,15,i=>Console.WriteLine("{0}的平方是{1}",i,i*i));
            string[] words=new string[]{
                "we",
                "hold",
                "these",
                "truths",
                "to",
                "be",
                "self-evident",
                "that",
                "all",
                "men",
                "are",
                "created",
                "equal"
            };
            Parallel.ForEach(words, i => Console.WriteLine(string.Format("单词{0}的长度是{1}",i,i.Length)));
            Console.ReadKey();
        }
    }
}
