class Helper {
    constructor(items) {
        this.items = items;
    }

    getTotalItems() {
        return this.items.reduce((sum, val) => {
            return sum + val.cantidad;
        }, 0);
    }
}

module.exports = Helper;
