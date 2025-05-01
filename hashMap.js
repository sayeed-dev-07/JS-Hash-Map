export default class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.arr = new Array(this.capacity);

    }
    #hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }
    set(key, value) {

        let hashCode = this.#hash(key) % this.capacity;
        if (!this.arr[hashCode]) {
            this.arr[hashCode] = new Map()
        }
        this.arr[hashCode].set(key, value)
    }
    get(key) {
        let hashCode = this.#hash(key) % this.capacity
        let bucket = this.arr[hashCode];
        if (bucket && bucket.has(key)) {
            return bucket.get(key)
        } else {
            return null;
        }


    }
    has(key) {
        let hashCode = this.#hash(key) % this.capacity
        let bucket = this.arr[hashCode];
        if (bucket && bucket.has(key)) {
            return true
        } else {
            return false;
        }
    }
    remove(key) {
        let hashCode = this.#hash(key) % this.capacity
        let bucket = this.arr[hashCode];
        if (bucket && bucket.has(key)) {
            bucket.delete(key)
            console.log(true);
            return
        }
        console.log(false);
        return;

    }
    length() {
        let count = 0
        for (let i = 0; i < this.arr.length; i++) {
            let element = this.arr[i]
            if (typeof element !== 'undefined') {
                let size = element.size;
                count += size;
            }

        }
        return count;
    }
    clear() {
        for (let i = 0; i < this.arr.length; i++) {
            let element = this.arr[i];
            if (typeof element !== 'undefined') {
                element.clear();
                delete this.arr[i];
            }

        }
    }
    keys() {
        let keysArr = []
        for (let i = 0; i < this.arr.length; i++) {
            const element = this.arr[i];
            if (typeof element !== 'undefined') {
                for (const key of element.keys()) {
                    keysArr.push(key)
                }
            }

        }
        return keysArr;
    }
    values() {
        let valuesArr = []
        for (let i = 0; i < this.arr.length; i++) {
            const element = this.arr[i];
            if (typeof element !== 'undefined') {
                for (const value of element.values()) {
                    valuesArr.push(value);
                }
            }
        }
        return valuesArr;
    }
    entries() {
        let pairsArr = [];
        for (let i = 0; i < this.arr.length; i++) {
            const element = this.arr[i];
            if (typeof element !== 'undefined') {
                for (const [key, value] of element.entries()) {
                    pairsArr.push([key, value])
                }
            }
        }
        return pairsArr;
    }

}
