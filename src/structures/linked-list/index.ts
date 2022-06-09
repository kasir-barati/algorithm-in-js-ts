// @ts-ignore
import { contract, invariant, requires, ensures } from 'denuto';

class LinkedListNode {
    constructor(private _value: number) {}

    public get value(): number {
        return this._value;
    }
    public set value(value: number) {
        this._value = value;
        this.next = null;
    }

    private _next: LinkedListNode | null = null;
    public get next(): LinkedListNode | null {
        return this._next;
    }
    public set next(value: LinkedListNode | null) {
        this._next = value;
    }
}

class LinkedList {
    private _head: LinkedListNode | null = null;
    public get head(): LinkedListNode | null {
        return this._head;
    }
    public set head(value: LinkedListNode | null) {
        this._head = value;
    }

    // @requires((self: LinkedList, [value]: [number]) => {
    //     return Number.isFinite(value);
    // })
    // @ensures(
    //     (
    //         currentSelf: LinkedList,
    //         oldSelf: LinkedList,
    //         [newValue]: [number],
    //         [oldNewValue]: [number],
    //     ) => {
    //         return (
    //             currentSelf.tail?.value === newValue &&
    //             currentSelf.tail.next === null
    //         );
    //     },
    // )
    push(value: number) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        for (
            let currentNode = this.head;
            currentNode !== null;
            currentNode = currentNode.next
        ) {
            if (currentNode.next === null) {
                currentNode.next = newNode;
                break;
            }
        }
    }

    unshift(value: number) {
        if (!this.head) {
            this.push(value);
            return;
        }

        const newNode = new LinkedListNode(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    includes(value: number) {
        if (!this.head) {
            return false;
        }

        for (
            let currentNode = this.head;
            currentNode !== null;
            // @ts-ignore
            currentNode = currentNode.next
        ) {
            if (currentNode.value === value) {
                return true;
            }
        }

        return false;
    }

    remove(value: number): boolean {
        if (!this.head) {
            return false;
        }

        if (this.head.value === value) {
            this.head = !this.head.next ? null : this.head.next;

            return true;
        }

        let previousNode: LinkedListNode | null;

        for (
            let currentNode = this.head;
            currentNode !== null;
            // @ts-ignore
            currentNode = currentNode.next
        ) {
            if (currentNode.value === value) {
                previousNode!.next = currentNode.next;
                return true;
            }

            previousNode = currentNode;
        }

        return false;
    }

    *traverse() {
        for (
            let currentNode = this.head;
            currentNode !== null;
            currentNode = currentNode.next
        ) {
            yield currentNode.value;
        }
    }

    *traverseReverse() {
        const result = [];
        for (
            let currentNode = this.head;
            currentNode !== null;
            currentNode = currentNode.next
        ) {
            result.unshift(currentNode.value);
        }

        for (const item of result) {
            yield item;
        }
    }
}

const a = new LinkedList();

a.push(12);
a.push(99);
a.unshift(1500);
a.push(37);

console.log('1500 = ', a.includes(1500));
console.log('12 = ', a.includes(12));
console.log('99 = ', a.includes(99));
console.log('100 = ', a.includes(100));
console.log('37 = ', a.includes(37));
console.log('remove 12 = ', a.remove(12));
console.log('remove 37 = ', a.remove(37));
console.log('12 = ', a.includes(12));
console.log('37 = ', a.includes(37));
a.unshift(1500);
a.push(37);
console.log('1500 = ', a.includes(1500));
console.log('37 = ', a.includes(37));

console.log('traverse');
for (const value of a.traverse()) {
    console.log(value);
}
console.log('traverse reverse');
for (const value of a.traverseReverse()) {
    console.log(value);
}
