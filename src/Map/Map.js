class MapStructure {
    constructor() {
        this._collection = {}
        this._count = 0
    }

    set(key, value) {
        this._collection[key] = value
        this._count++
    }

    has(key) {
        return (key in this._collection)
    }

    get(key) {
        return this.has(key) ? this._collection[key] : null
    }

    delete(key) {
        if(this.has(key)) {
            delete this._collection[key]
            this._count--
            return true
        }
        return false
    }

    getValues() {
        let values = []
        for(let key in this._collection) {
            values.push(this._collection[key])
        }
        return values.length !== 0 ? values : null
    }

    clear() {
        this._collection = {}
        this._count = 0
    }

    size() {
        return this._count
    }
}

const map = new MapStructure()
map.set("hello", "hello")
map.set("hi", "hi")
map.set("bro", "bro")
console.log(map.getValues())

console.log("get(hi) == ", map.get("hi"))

const foo = () => "yoo"
console.log("set(foo, foo)")
map.set(foo, "foo")
console.log(map.getValues())

console.log("delete(foo)")
map.delete(foo)
console.log(map.getValues())

console.log("clear()")
map.clear()
console.log(map.getValues())
