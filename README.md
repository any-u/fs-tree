## fs-tree
Display the tree structure in the terminal

## Install
```
npm install @any-u/fs-tree
```

## Usage
### Get Tree Node 
```js
import{ createTreeNode } from '@any-u/fs-tree';

const treeNode = createTreeNode(path)
```

### Display
```js
import { displayTree } from '@any-u/fs-tree';

// deep: show folder level
displayTree(path, deep)
```






