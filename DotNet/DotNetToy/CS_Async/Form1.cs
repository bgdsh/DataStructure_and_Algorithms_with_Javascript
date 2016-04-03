using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CS_Async
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void SyncMethod_Click(object sender, EventArgs e)
        {
            MyDownloadString ds = new MyDownloadString();
            ds.DoRun();
        }

        private void AsyncMethod_Click(object sender, EventArgs e)
        {
            MyDownloadStringAsync ds = new MyDownloadStringAsync();
            ds.DoRun();
        }
    }
}
