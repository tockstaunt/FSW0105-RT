// Players really dislike true randomness, so it is generally modeled with a
// 'grab bag' approach. In this style every value within a range is generated
// and inserted into a collection and then randomized. When a new value is
// requested it is taken off the array. Typically every value is inserted 2-3
// times to allow for seemingly 'random' runs of the same number.

// The DieBag constructor function creates a grab bag of 3x values for a die with
// a number of faces specified in the constructor

/* function DieBag(numberOfFaces) {
    this.values = [];

    for (var iterationCount = 0; iterationCount < 3; iterationCount++) {
        for (var faceCount = 0; faceCount < numberOfFaces; faceCount++) {
            this.values.push(faceCount + 1);
        }
    }
}

DieBag.prototype.drawValue = function() {
    return this.values.shift();
};

DieBag.prototype.shuffle = function() {
    for (var i = 0; i < this.values.length; i++) {
        var temp = this.values[i];
        var swapIndex = Math.floor(Math.random() * this.values.length);
        this.values[i] = this.values[swapIndex];
        this.values[swapIndex]= temp;
    }
};

DieBag.prototype.itemsRemaining = function() {
    return this.values.length;
}

var bag = new DieBag(10);
bag.shuffle();

while (bag.itemsRemaining()) {
    console.log(bag.drawValue());
} */