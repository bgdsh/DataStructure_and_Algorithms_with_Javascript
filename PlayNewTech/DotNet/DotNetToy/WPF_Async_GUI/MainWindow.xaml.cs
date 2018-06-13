using System;
using System.Collections.Generic;
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

namespace WPF_Async_GUI
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        CancellationTokenSource _cancellationTokenSource;
        CancellationToken _cancellationToken;
        public MainWindow()
        {
            InitializeComponent();
        }

        private async void btnProcess_Click(object sender, RoutedEventArgs e)
        {
            btnProcess.IsEnabled = false;
            _cancellationTokenSource = new CancellationTokenSource();
            _cancellationToken = _cancellationTokenSource.Token;
            int completedPercent = 10;
            for (int i = 0; i < 10; i++)
            {
                if (_cancellationToken.IsCancellationRequested)
                {
                    break;
                }
                try
                {
                    await Task.Delay(500,_cancellationToken);
                    completedPercent = (i + 1) * 10;
                }
                catch (TaskCanceledException ex)
                {
                    completedPercent = i * 10;
                }
                progressBar.Value = completedPercent;
            }
            var message = _cancellationToken.IsCancellationRequested
                ? string.Format("处理到{0}%的时候被取消了", completedPercent) : "处理正常完成";
            MessageBox.Show(message, "完成时的状态");
            progressBar.Value = 0;
            btnProcess.IsEnabled = true;
            btnCancel.IsEnabled = true;
        }

        private void btnCancel_Click(object sender, RoutedEventArgs e)
        {
            if (!btnProcess.IsEnabled)
            {
                btnCancel.IsEnabled = false;
                _cancellationTokenSource.Cancel();
            }
        }
    }
}
