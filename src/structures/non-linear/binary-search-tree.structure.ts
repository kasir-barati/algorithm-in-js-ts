class MyNode {
    #data: number;
    #left: MyNode | null;
    #right: MyNode | null;

    constructor(data: number) {
        this.#left = null;
        this.#right = null;
        this.#data = data;
    }

    set data(data: number) {
        this.#data = data;
    }
    get data() {
        return this.#data;
    }

    set left(left: MyNode | null) {
        this.#left = left;
    }
    get left(): MyNode | null {
        return this.#left;
    }

    set right(right: MyNode | null) {
        this.#right = right;
    }
    get right(): MyNode | null {
        return this.#right;
    }
}

class BinarySearchTree {
    #root: MyNode | null;
    constructor() {
        this.#root = null;
    }

    set root(node: MyNode | null) {
        if (node === null) {
            throw new Error('null_node');
        }
        if (this.#root !== null) {
            throw new Error('root_is_not_null');
        }
        this.#root = node;
    }
    get root() {
        return this.#root;
    }

    insert(currentNode: MyNode, data: number) {
        if (currentNode === null) {
            throw new Error('null_node');
        }
        if (currentNode.data > data) {
            if (currentNode.left !== null) {
                this.insert(currentNode.left, data);
            } else {
                currentNode.left = new MyNode(data);
                return;
            }
        } else if (currentNode.data < data) {
            if (currentNode.right !== null) {
                this.insert(currentNode.right, data);
            } else {
                currentNode.right = new MyNode(data);
                return;
            }
        } else {
            console.log('duplicate_data');
            return;
        }
        this.#balanceTree();
    }
    #balanceTree() {}
    remove(data: number) {}

    findMinNode() {}
    getRootNode() {
        return this.#root;
    }
    inOrder(node: MyNode) {}
    preOrder(node: MyNode) {}
    postOrder(node: MyNode) {}
    search(node: MyNode, data: number) {}

    print(currentNode: MyNode | null) {
        if (currentNode === null) {
            return;
        }
        for (
            let node: MyNode | null = currentNode;
            node;
            node = node?.left ?? node?.right
        ) {
            console.log('node.data = ', node.data);
        }
    }
}

const temp = new BinarySearchTree();

for (let i = 5; i < 10; i++) {
    if (!temp.root) {
        temp.root = new MyNode(i);
        continue;
    }
    temp.insert(temp.root, i);
}

temp.print(temp.root);

console.log();
console.log('===================================');
console.log();

for (let i = 1; i < 5; i++) {
    if (!temp.root) {
        temp.root = new MyNode(i);
        continue;
    }
    temp.insert(temp.root, i);
}

temp.print(temp.root);
