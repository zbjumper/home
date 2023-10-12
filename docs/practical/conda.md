# Anaconda

## 安装

实用[清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)的安装方式，提速


## 配置

推荐使用[清华大学开源镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/)的配置方式，修改渠道的 url 地址来提速

> 创建`.condarc`文件。这是conda channel的配置文件，在安装conda之后并不会生成这个文件。在terminal中使用conda config指令可以创建该文件
> ```shell
> conda config
> ```

## 常用命令

### 查看现在的channel状态和优先级

```shell
conda config --show channels
```

### 添加conda-forge channel并设置为最高优先级

```shell
conda config --add channels conda-forge
conda config --set channel_priority strict
```

### conda 环境控制


#### 添加环境
```shell
# 创建名字为env_name的环境，同时安装 python，python版本为3.10
conda create -n env_name python=3.10
```

#### 激活环境
```shell
conda activate env_name
```

#### 退出环境
```shell
conda deactivate
```

#### 删除环境
```shell
conda remove -n env_name --all
```

#### 查看环境

```shell
# 查看当前环境
conda info
```

```shell
# 查看所有环境列表
conda info -e
```

#### 查看环境中已安装的包
```shell
conda list
```

#### 查看环境中已安装的包及版本
```shell
conda list -n env_name
```

#### 安装包
```shell
conda install package_name
```

#### 卸载包
```shell
conda remove package_name
```

#### 更新包
```shell
conda update package_name
```

#### 查找包
```shell
conda search package_name
```

#### 查看包信息
```shell
conda info package_name
```

#### 查看包信息
```shell
conda info package_name
```
