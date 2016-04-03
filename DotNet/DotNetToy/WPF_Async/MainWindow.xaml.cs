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

namespace WPF_Async
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private async void btnDo_Click(object sender, RoutedEventArgs e)
        {
            btnDo.IsEnabled = false;
            lbStatus.Content = "正在工作";
            await Task.Delay(4000);
            lbStatus.Content = "啥都没做";
            btnDo.IsEnabled = true;
        }
    }
}
