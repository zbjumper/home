# ImportError: attempted relative import with no known parent package(导入错误：尝试相对导入，但没有已知的父包。)

[原文](https://iq-inc.com/importerror-attempted-relative-import/)

你不愿意看到这种情况。你刚开始一个新项目。一切都进行得很顺利。你决定是时候认真对待了 - 所以你开始创建第二个文件，并将多余的函数移动到那个文件中。完成整理工作后，感觉非常好。在我今天下班之前再运行一次吧...等等...这刚才还能正常工作！


<div style="text-align:center;">
<span style="color: red;">ImportError: attempted relative import with no known parent package</span>
</div>


ImportError - 这到底是什么意思！？我只是想导入另一个文件。父包是什么鬼东西！？

如果你现在正在经历这个或者过去曾经经历过，这篇帖子就是为了你而写的。

## 修复

赶时间，只想快速解决问题？那这部分是为您准备的。如果您想了解这些修复措施背后的原因，请查看稍后的[包解释](https://iq-inc.com/importerror-attempted-relative-import/#packages-explained)部分。如果您只是想获得一些建议，以避免出现类似问题，请跳转到常见[项目结构](https://iq-inc.com/importerror-attempted-relative-import/#common-project-structures)部分。

许多网络资料会让你调整`sys.path`，但在大多数情况下，这是一种[代码异味](https://en.wikipedia.org/wiki/Code_smell)，表明你没有正确使用模块和/或包。

这个问题几乎总是发生在您将项目使用扁平文件结构，并尝试将功能拆分为两个文件时。例如：

```txt
.
└── src/
 ├── main.py
 └── util.py
```

main.py

```python
from util import doSomethingCool

print("About to do something cool!")
doSomethingCool()
```

util.py

```python
def doSomethingCool():
    print("Doing something cool")
```

使用此设置运行main.py将导致：

<div style="text-align:center;">
<span style="color: red;">ImportError: attempted relative import with no known parent package</span>
</div>


## 方法 1：不使用 from

不要使用 from，只需使用 import，然后确保在使用导入的函数时使用模块引用。在我们的示例中，这是 util。因此，你的 main.py 现在应该如下所示：

main.py

```json
import util

print("About to do something cool!")
util.doSomethingCool()
```

问题解决了。继续你的生活吧。如果你想了解为什么这样修复问题，请查看[包说明](https://iq-inc.com/importerror-attempted-relative-import/#packages-explained)。

## 方法 2：构造一个真实存在的 package

如果您正在创建一个单独的文件来执行有用的操作，为什么不将其制作成一个实际的包？实际上比您想象的要容易得多。

更改您的文件结构，使要拆分出来的功能位于一个单独的文件夹中，并包含一个空的`__init__.py`文件。类似这样：

```txt
.
└── src/
    ├── main.py
    └── utils/
        ├── __init__.py
        └── util.py
```

使用这个结构，您实际上可以以许多不同的方式进行导入。以下任何一种方法都可以工作。

```python
# main file for doing cool things
import utils.util

print("About to do something cool!")
utils.util.doSomethingCool()
# main file for doing cool things
from utils import util

print("About to do something cool!")
util.doSomethingCool()
# main file for doing cool things
from utils.util import doSomethingCool

print("About to do something cool!")
doSomethingCool()
```

您还可以更加高级，使用as关键字，这将允许您为导入定义一个新的别名。

```python
# main file for doing cool things
import utils.util as foo

print("About to do something cool!")
foo.doSomethingCool()
```

##  Packages 解释

如果您不着急并且想了解模块和包的工作原理，请继续阅读！

### 什么是模块？

Python是一种解释性脚本语言。Python解释器是运行您的脚本的核心引擎。如果您曾经在终端上直接运行过python而没有文件，那么您只是在运行Python解释器。它会读取您输入的命令并按照您输入的方式执行它们。然而，这不是一个非常有用的范式；没有人愿意整天坐在终端前面键入代码。这就是脚本发挥作用的地方。你可能以前创建过一个.py文件；我们称之为脚本。

当您创建一个希望在多个脚本中使用的函数时，应该怎么做？这就是我们使用模块的地方。模块只是一个包含一个或多个定义的.py脚本。定义是我们在模块中定义的可以通过import关键字在其他脚本中使用的函数。文件名成为了模块名。所以，例如，如果我们有foo.py，我们会使用import foo来导入它。基本模块通常最好放置在与主要脚本相同的目录中工作。

当您使用import关键字时，例如import foo，Python将加载该脚本并将所有定义引入到当前脚本中。函数不会直接导入到脚本中，但可以通过模块名访问它们。

```python
# foo.py

def bar():
    print("E-Flat walks into a bar. The bartender says, 'Sorry, we don't serve minors!'")

# TellBarJoke.py
import foo

foo.bar()
```

模块允许您将代码逻辑上分离为功能块。在导入模块时，您还可以包含非函数定义的代码。它只在首次导入模块时执行一次。请参见下面的示例，在导入时初始化barJoke。

```python
# foo.py

barJoke = "E-Flat walks into a bar. The bartender says, 'Sorry, we don't serve minors!'"

def bar():
    print(barJoke)
```

在大多数情况下，这是一种不好的做法，应该避免使用，因为它可能会产生意想不到的副作用。

### 模块调试技巧

有时候当你在编写一个模块，打算被另一个脚本导入时，你想要测试一下自己所写的内容。这就是可以使用特殊的 `__name__` 变量的地方！当一个模块被另一个脚本导入时，`__name__` 被设置为该模块的名称，但是当直接运行一个模块时，`__name__` 被设置为 `__main__`。我们可以利用这个知识，在我们的模块中添加只有在 `__name__` == "`__main__`" 时才会执行的代码。

```python
# foo.py

def bar():
    print("E-Flat walks into a bar. The bartender says, 'Sorry, we don't serve minors!'")

if __name__ == "__main__":
    # bar will be invoked if this module is being run directly, but not via import!
    bar()
```

### 什么是 package？

一个包是一种将一个或多个模块捆绑在一起的机制，以便更容易地组织成逻辑分组。包还允许我们将模块组织到不同的文件夹中。如果你发现自己有超过几个模块，那么可能是时候使用包了。本文不涉及分发包的内容。如果你想了解更多关于包分发的信息，请查看[Python Wheels](https://docs.python.org/3/distributing/index.html)的文档页面。

在其最简单的形式中，任何具有`__init__.py`文件和一个或多个模块的目录都是一个包。`__init__.py`文件既作为Python标记此为包的标志，也作为执行使用该包所需的任何初始化代码的位置。通常情况下，除非需要进行某种高级包初始化操作，否则`__init__.py`只是一个空文件。

```text
.
└── src/
    ├── main.py
    └── utils/
        ├── __init__.py
        └── util.py
```

在上面的示例中，utils是一个包。`__init__.py`文件只是一个空文件。Python只会寻找`__init__.py`文件来判断一个目录是否被视为一个包。

一个包可以包含多个模块：

```text
.
└── src/
    ├── main.py
    └── utils/
        ├── __init__.py
        ├── util.py
        └── otherUtil.py
```

您还可以在同一个父文件夹中拥有多个包。

```text
.
└── src/
    ├── main.py
    ├── utils/
    │   ├── __init__.py
    │   ├── util.py
    │   └── otherUtil.py
    └── calculations/
        ├── __init__.py
        └── financials.py
```

您甚至可以有嵌套的包：

```text
.
└── src/
    ├── main.py
    ├── utils/
    │   ├── __init__.py
    │   ├── util.py
    │   └── shared/
    │       ├── __init__.py
    │       └── helpers.py
    └── calculations/
        ├── __init__.py
        └── financials.py
```

包可以像模块一样导入。包内相对导入可能会有些棘手。下面是一个使用相对导入从一个包中导入另一个包的示例。

```text
.
└── src/
    ├── main.py
    └── utils/
        ├── __init__.py
        ├── util.py
        └── shared/
            ├── __init__.py
            └── helpers.py

```

```python
# main.py for doing cool things
import utils.util

print("About to do something cool!")
utils.util.doSomethingCool()
# util.py
from . shared import helpers

def doSomethingCool():
    print(helpers.doHelp("Doing something cool"))
# helpers.py

def doHelp(x):
    return "help {}".format(x)
```

## 常见的项目结构

本节旨在成为一个烹饪书，告诉您如何根据项目的发展来构建结构。

### 谦虚的起点

也许你只是想快速验证一下概念，并且不希望它变成一个大项目。*提示：大多数大型项目都起源于小而谦逊的开始！*

```text
.
└── src/
    ├── main.py
    └── util.py
```

### 清理一下

您已经准备好提取一些功能，这些功能要么在多个地方使用，要么不是您在主要任务中试图完成的核心内容。

```text
.
└── src/
    ├── main.py
    └── util.py
```

### 好的，现在认真起来

也许你的小项目开始变得严肃起来，或者你已经创建了希望在其他项目中作为包使用的功能。请注意，你的主入口点 main.py 总是位于包之外。这将节省很多麻烦。

```text
.
└── src/
    ├── main.py
    └── MyUtils/
        ├── __init__.py 
        ├── utils.py
        └── helpers.py
```

### 这肯定会再次使用

好的，现在你的小项目已经发展成了一个庞然大物，并且创建了几个可以独立运行的有用包。它可能被组织结构如下。

```text
.
└── src/
    ├── main.py
    ├── PackageA/
    │   ├── __init__.py
    │   ├── logic.py
    │   ├── SubPackageA1/
    │   │   ├── __init__.py
    │   │   └── util.py
    │   └── SubPackageA2/
    │       ├── __init__.py
    │       └── otherUtil.py
    └── PackageB/
        ├── __init__.py
        └── helpers.py
```

## 总结

我希望你已经成功解决了你的导入问题，也许在这个过程中学到了一些东西。如果对这篇文章有任何问题，或者可能有一个与Python相关的项目需要帮助？请随时发送电子邮件至tech@iq-inc.com！











