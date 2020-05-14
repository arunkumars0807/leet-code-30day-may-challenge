/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.head = {
        children: {},
        completeWord: false,
    };
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const length = word.length;
    let crawler = this;
    for (var index in word) {
        if (word.hasOwnProperty(index)) {
            let character = word[index];
            if (crawler.head.children[character] === undefined) {
                crawler.head.children[character] = new Trie();
            }
            crawler = crawler.head.children[character];
        }
    }
    crawler.head.completeWord = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let crawler = this;
    for (var index in word) {
        if (word.hasOwnProperty(index)) {
            let character = word[index];
            if (crawler.head.children[character]) {
                crawler = crawler.head.children[character];   
            } else {
                return false;
            }
        }
    }
    return crawler.head.completeWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let crawler = this;
    const word = prefix;
    for (var index in word) {
        if (word.hasOwnProperty(index)) {
            let character = word[index];
            if (crawler.head.children[character]) {
                crawler = crawler.head.children[character];   
            } else {
                return false;
            }
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
