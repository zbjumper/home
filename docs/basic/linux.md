# Linux 基础


## 1. Linux 简介



## 2. 常用命令


### 2.1 文件操作

#### 2.1.1 rsync

```shell
rsync -avzP --delete --exclude-from=exclude.txt source_dir target_dir
```

* -a, --archive 归档模式，表示以递归方式传输文件，并保持所有文件属性，等于-rlptgoD
* -v, --verbose 详细模式输出
* -z, --compress 压缩文件传输
* -P 等于 --partial --progress，--partial：保留那些因故没有完全传输的文件，并在下一次传输时继续传输。--progress：显示传输过程
* --delete 删除那些在接收端（target_dir）已经不存在的文件，即删除目标端多余文件
* --exclude-from=exclude.txt 排除文件，exclude.txt中的内容为要排除的文件名，每行一个文件名
* source_dir 源目录
* target_dir 目标目录*