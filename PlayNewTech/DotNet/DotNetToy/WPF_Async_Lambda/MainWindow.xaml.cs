using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

namespace WPF_Async_Lambda
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            startWorkButton.Click += async (sender,e) => {
                SetGuiValues(false,"开始工作了");
                await DoSomeWork();
                SetGuiValues(true, "工作结束了");
            };
        }
        private void SetGuiValues(bool buttonEnabled,string status)
        {
            startWorkButton.IsEnabled = buttonEnabled;
            workStartedTextBlock.Content = status;
        }
        private Task DoSomeWork()
        {
            return Task.Delay(2500);
        }
    }
}
