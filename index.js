// Hash table function

function hashStringToInt(string, tableSize) {
  let hash = 17;
  for (let i = 0; i < string.length; i++) {
    hash = (13 * hash * string.charCodeAt(i)) % tableSize;
  }
  return hash;
}

class HashTable {
  table = new Array(57);

  setItem = (key, value) => {
    const index = hashStringToInt(key, this.table.length);
    if (this.table[index]) {
      this.table.push([key, value]);
    } else {
      this.table[index] = [[key, value]];
    }
  };

  getItem = (key) => {
    const index = hashStringToInt(key, this.table.length);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].find((x) => x[0] === key)[1];
  };
}

const myTable = new HashTable();
myTable.setItem("firstName", "Neel");
myTable.setItem("lastName", "Manjanath");
myTable.setItem("age", "16");
myTable.setItem("dob", "30/8/07");


console.log(myTable.getItem("firstName"));
console.log(myTable.getItem("lastName"));
console.log(myTable.getItem("age"));
console.log(myTable.getItem("dob"));
