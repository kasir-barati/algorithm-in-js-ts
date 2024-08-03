import { TreeNode } from './tree-node';

export class BinarySearchTree<T extends string | number> {
  // Parameter Properties
  constructor(public head: TreeNode<T> | null = null) {}

  // Make it easier to insert data into out BST
  insert(
    node: TreeNode<T> | null = this.head,
    value: T,
  ): TreeNode<T> {
    if (!node) {
      const root = new TreeNode<T>(value);
      return root;
    }

    if (value < node.data) {
      node.left = this.insert(node.left, value);
    } else if (value > node.data) {
      node.right = this.insert(node.right, value);
    }
    return node;
  }

  search(
    node: Readonly<TreeNode<T>> | null | null = this.head,
    value: T,
  ): TreeNode<T> | null {
    if (!node) {
      return null;
    }

    if (node.data === value) {
      return node;
    }

    if (value < node.data) {
      return this.search(node.left, value);
    }

    return this.search(node.right, value);
  }

  /**
   * @description Prints out a sorted version of the tree.
   */
  inOrderTraversal(
    root: Readonly<TreeNode<T>> | null = this.head,
  ): void {
    if (root) {
      this.inOrderTraversal(root.left);
      console.log(root.data);
      this.inOrderTraversal(root.right);
    }
  }

  /**
   * @description Prints out the root first and then the rest of the nodes in ascending order.
   */
  preOrderTraversal(
    root: Readonly<TreeNode<T>> | null = this.head,
  ): void {
    if (root) {
      console.log(root.data);
      this.inOrderTraversal(root.left);
      this.inOrderTraversal(root.right);
    }
  }

  /**
   * @description Prints out the root at the end, and the rest of the nodes in ascending order.
   */
  postOrderTraversal(
    root: Readonly<TreeNode<T>> | null = this.head,
  ): void {
    if (root) {
      this.inOrderTraversal(root.left);
      this.inOrderTraversal(root.right);
      console.log(root.data);
    }
  }
}

console.clear();

const rootNode = new TreeNode<number>(50);
rootNode.left = new TreeNode(35);
rootNode.right = new TreeNode(60);

const bst = new BinarySearchTree(rootNode);
bst.insert(bst.head, 2);
bst.insert(bst.head, 34);
bst.insert(bst.head, 90);
bst.insert(bst.head, 15);

console.log('==========In order traversal==========');
bst.inOrderTraversal();
console.log('==========Pre order traversal==========');
bst.preOrderTraversal();
console.log('==========Post order traversal==========');
bst.postOrderTraversal();

console.log('==========Search==========');
console.log(bst.search(bst.head, 20));
