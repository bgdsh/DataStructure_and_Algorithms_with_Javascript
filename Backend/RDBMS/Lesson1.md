4的倍数
时间戳、字段长度、地址信息
变长记录放在定长记录后面
##记录集合的存储结构
### 邻接存储
### 指针连接
### 两种结合
##数据文件的组织形式
### 顺序文件

### 散列文件
哈希文件
### 按列存储
常用于OLAP
### 聚簇文件
提高多表连接查询效率
## 索引结构
提高查询效率
### 索引文件构成
搜索码值、指向的地址
### 种类
聚集-
稠密-稀疏
有序-散列
#### 顺序索引文件
文件按照搜索顺序存储，索引也是这样存储
可以是稀疏的也可以是稠密的
