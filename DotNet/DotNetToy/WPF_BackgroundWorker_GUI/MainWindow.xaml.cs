using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WPF_BackgroundWorker_GUI
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        BackgroundWorker bgWorker = new BackgroundWorker();
        public MainWindow()
        {
            InitializeComponent();
            bgWorker.WorkerReportsProgress = true;
            bgWorker.WorkerSupportsCancellation = true;
            bgWorker.DoWork += DoWork_handler;
            bgWorker.ProgressChanged += ProgressChanged_Handler;
            bgWorker.RunWorkerCompleted += RunWorkerCompleted_Handler;
        }

        private void RunWorkerCompleted_Handler(object sender, RunWorkerCompletedEventArgs e)
        {
            progressBar.Value = 0;
            if (e.Cancelled)
            {
                MessageBox.Show("处理被取消", "处理被取消");
            }else{
                MessageBox.Show("处理已经正常完成","处理已经正常完成");
            }
        }

        private void ProgressChanged_Handler(object sender, ProgressChangedEventArgs e)
        {
            progressBar.Value = e.ProgressPercentage;
        }

        private void DoWork_handler(object sender, DoWorkEventArgs e)
        {
            BackgroundWorker worker = sender as BackgroundWorker;
            for (int i = 0; i <= 10; i++)
            {
                if (worker.CancellationPending)
                {
                    e.Cancel = true;
                    break;
                }
                else
                {
                    worker.ReportProgress(i * 10);
                    Thread.Sleep(500);

                }
            }
        }

        private void btnProcess_Click(object sender, RoutedEventArgs e)
        {
            if (!bgWorker.IsBusy)//判断是否正在进行异步工作
            {
                bgWorker.RunWorkerAsync();
            }
        }

        private void btnCancel_Click(object sender, RoutedEventArgs e)
        {
            if (bgWorker.IsBusy)
            {
                bgWorker.CancelAsync();
            }
        }
    }
}
