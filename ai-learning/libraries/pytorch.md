# PyTorch


## Installation


未完待续...

## Tutorials

未完待续...

## Examples

### torch.max()

`torch.max()`计算张量的最大值，`torch.max(input, dim, keepdim=False, out=None) -> (Tensor, LongTensor)`，返回最大值和最大值的索引。

示例：
```python
import torch
a = torch.randn(4, 4)
print(a)
print('\n')
print(torch.max(a, 1))
```

输出：
```shell
tensor([[ 0.4720,  1.2754, -0.9520, -0.1086],
        [-1.0423, -0.0083,  1.0577, -0.5556],
        [ 0.0219,  0.8216,  0.6929, -1.2122],
        [ 0.9698, -0.0423,  0.8109, -0.2953]])


torch.return_types.max(
values=tensor([1.2754, 1.0577, 0.8216, 0.9698]),
indices=tensor([1, 2, 1, 0]))
```

其中indices表示最大值的索引，values表示最大值。[1, 2, 1, 0]分别表示第一行最大值出现在 index 为1的位置，第二行最大值出现在 index 为2的位置，第三行最大值出现在 index 为1的位置，第四行最大值出现在 index 为0的位置。