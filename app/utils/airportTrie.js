'use strict';

export class TrieNode {
  constructor(char='') {
    this.value = char;
    this.children = {};
    this.location = '';
    this.coordinates = [];
    this.nameCompleted = false;
  }

  completesName() {
    return this.nameCompleted;
  }

  getData(word) {
    let airportName = word;
    let location = this.location;
    let coordinates = this.coordinates;
    return { airportName, location, coordinates };
  }

  hasChildren() {
    if (Object.keys(this.children).length) return true;
    return false;
  }
}

export class AirportTrie {
  constructor() {
    this.root = new TrieNode();
  }

  insertAirportData(data) {
    const self = this;
    data.forEach(d => self.insert(d.airportName, d.location, d.coordinates));
  }

  insert(name, location, coordinates) {
    let node = this.root;

    for (let i = 0; i < name.length; i++) {
      let currentChar = name[i];
      if (node.children[currentChar]) node = node.children[currentChar];
      else {
        let newNode = new TrieNode(currentChar);
        node.children[currentChar] = newNode;
        node = newNode;
      }
    }

    node.nameCompleted = true;
    node.coordinates = coordinates;
    node.location = location;
  }

  find(string) {
    let node = this.root;

    for (let i = 0; i < string.length; i++) {
      let currChar = string[i];
      if (node.children[currChar]) {
        node = node.children[currChar];
        continue;
      } else {
        return false;
      }
    }

    return true;
  }

  getNode(string) {
    if (!this.find(string)) return;
    let node = this.root;

    for (let i = 0; i < string.length; i++) {
      let currentChar = string[i];
      node = node.children[currentChar];
    }
    return node;
  }

  getAllSuffixes(node, suffix='', suffixes=[]) {
    if (!node) return;
    let allSuffixes = suffixes;

    for (let n in node.children) {
      let child = node.children[n];
      let currSuffix = suffix;
      currSuffix += child.value;
      if (child.completesName()) {
        const data = child.getData(currSuffix);
        allSuffixes.push(data);
      }
      this.getAllSuffixes(child, currSuffix, allSuffixes);
    }

    return allSuffixes;
  }

  autocomplete(string) {
    let startingNode = this.getNode(string);
    let suffixesPlusData = this.getAllSuffixes(startingNode, string);
    return suffixesPlusData.map(spd => {
      return `${spd.airportName}, ${spd.location}`;
    });
  }

}