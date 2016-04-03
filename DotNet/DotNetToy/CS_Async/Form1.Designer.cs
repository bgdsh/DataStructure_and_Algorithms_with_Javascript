namespace CS_Async
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.SyncMethod = new System.Windows.Forms.Button();
            this.AsyncMethod = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // SyncMethod
            // 
            this.SyncMethod.Location = new System.Drawing.Point(12, 64);
            this.SyncMethod.Name = "SyncMethod";
            this.SyncMethod.Size = new System.Drawing.Size(75, 23);
            this.SyncMethod.TabIndex = 0;
            this.SyncMethod.Text = "同步方法";
            this.SyncMethod.UseVisualStyleBackColor = true;
            this.SyncMethod.Click += new System.EventHandler(this.SyncMethod_Click);
            // 
            // AsyncMethod
            // 
            this.AsyncMethod.Location = new System.Drawing.Point(93, 64);
            this.AsyncMethod.Name = "AsyncMethod";
            this.AsyncMethod.Size = new System.Drawing.Size(75, 23);
            this.AsyncMethod.TabIndex = 1;
            this.AsyncMethod.Text = "异步方法";
            this.AsyncMethod.UseVisualStyleBackColor = true;
            this.AsyncMethod.Click += new System.EventHandler(this.AsyncMethod_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(282, 253);
            this.Controls.Add(this.AsyncMethod);
            this.Controls.Add(this.SyncMethod);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button SyncMethod;
        private System.Windows.Forms.Button AsyncMethod;
    }
}

