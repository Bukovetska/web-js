const Library = {
    bubble: function(arr, start = true) {
      let comparison = 0;
      let swaps = 0;
      let isUndefined = false;
      const array = [];
  
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          isUndefined = true;
          array[i] = null;
        } else {
          array[i] = arr[i];
        }
      }
  
      const n = array.length;
  
      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          comparison++;
  
          if (array[j] !== null && array[j + 1] !== null) {
            let swapIt = start ? (array[j] > array[j + 1]) : (array[j] < array[j + 1]);
            if (swapIt) {
              swaps++;
              [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
          } else if (array[j] === null && array[j + 1] !== null && start) {
            swaps++;
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          } else if (array[j] !== null && array[j + 1] === null && !start) {
            swaps++;
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
          }
        }
      }
  
      console.log(`Сортування обміну: Порівняння=${comparison}, Обмін=${swaps}, Undefined-елементи=${isUndefined}`);
      console.log(array.join(", "));
      return array;
    },
  
    selection: function(arr, start = true) {
      let comparison = 0;
      let swaps = 0;
      let isUndefined = false;
      const array = [];
  
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === undefined) {
              isUndefined = true;
              array[i] = null;
          } else {
              array[i] = arr[i];
          }
      }
  
      const n = array.length;
      for (let i = 0; i < n - 1; i++) {
          let minIndex = i;
  
          for (let j = i + 1; j < n; j++) {
              comparison++;
              const current = array[j];
              const minVal = array[minIndex];
  
              if (current !== null && minVal !== null) {
                  if (start ? (current < minVal) : (current > minVal)) {
                      minIndex = j;
                  }
              } else if (minVal === null && current !== null && start) {
                  minIndex = j;
              } else if (minVal !== null && current === null && !start) {
                  minIndex = j;
              }
          }
  
          if (minIndex !== i) {
              swaps++;
              [array[i], array[minIndex]] = [array[minIndex], array[i]];
          }
      }
  
      console.log(`Сортування мінімальних елементів: Порівняння=${comparison}, Обмін=${swaps}, Undefined-елементи=${isUndefined}`);
      console.log(array.join(", "));
      return array;
  },
  
    insertion: function(arr, start = true) {
      let comparison = 0;
      let moves = 0;
      let isUndefined = false;
      const array = [];

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          isUndefined = true;
          array[i] = null;
        } else {
          array[i] = arr[i];
        }
      }
  
      const n = array.length;
  
      for (let i = 1; i < n; i++) {
        let key = array[i];
        let j = i - 1;
  
        while (j >= 0) {
          comparison++;
          let moveIt = false;
      
          if (key === null) {
              moveIt = !start && array[j] !== null; 
          } else if (array[j] === null) {
              moveIt = start; 
          } else {
              moveIt = start ? (array[j] > key) : (array[j] < key);
          }
      
          if (moveIt) {
              moves++;
              array[j + 1] = array[j];
              j--;
          } else {
              break;
          }
      }
        array[j + 1] = key;
      }
  
      console.log(`Сортування вставок: Порівняння=${comparison}, Переміщення=${moves}, Undefined-елементи=${isUndefined}`);
      console.log(array.join(", "));
      return array;
    },
  
    shell: function(arr, start = true) {
      let comparison = 0;
      let moves = 0;
      let isUndefined = false;
      const array = [];
  
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
          isUndefined = true;
          array[i] = null;
        } else {
          array[i] = arr[i];
        }
      }
  
      const n = array.length;
      for (let distance = Math.floor(n / 2); distance > 0; distance = Math.floor(distance / 2)) {
        for (let i = distance; i < n; i++) {
          let temp = array[i];
          let j = i;
  
          while (j >= distance) {
            comparison++;
            let shiftIt = false;
        
            const left = array[j - distance];
            const right = temp; 
        
            if (right === null) {
                shiftIt = !start && left !== null; 
            } else if (left === null) {
                shiftIt = start; 
            } else {
                shiftIt = start ? (left > right) : (left < right);
            }
        
            if (shiftIt) {
                moves++;
                array[j] = left;
                j -= distance;
            } else {
                break;
            }
        }
        array[j] = temp;
        }
      }
      console.log(`Сортування Шелла: Порівняння=${comparison}, Переміщення=${moves}, Undefined-елементи=${isUndefined}`);
      console.log(array.join(", "));
      return array;
    },
  
    quick: function(arr, start = true) {
      let comparison = 0;
      let swaps = 0;
      let isUndefined = false;
      const array = [];
  
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === undefined) {
              isUndefined = true;
              array[i] = null;
          } else {
              array[i] = arr[i];
          }
      }
  
      function forSort(arr, low, high) {
          if (low < high) {
              let pi = partition(arr, low, high, start);
              forSort(arr, low, pi - 1);
              forSort(arr, pi + 1, high);
          }
      }
  
      function partition(arr, low, high, start) {
          let pivot = arr[high];
          let i = low - 1;
  
          for (let j = low; j < high; j++) {
              comparison++;
  
              let swapIt = false;
              if (arr[j] === null && pivot !== null) {
                  swapIt = !start; 
              } else if (arr[j] !== null && pivot === null) {
                  swapIt = start; 
              } else if (arr[j] !== null && pivot !== null) {
                  swapIt = start ? (arr[j] < pivot) : (arr[j] > pivot);
              }
  
              if (swapIt) {
                  i++;
                  swaps++;
                  [arr[i], arr[j]] = [arr[j], arr[i]];
              }
          }
          swaps++;
          [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
          return i + 1;
      }  
      forSort(array, 0, array.length - 1);

      console.log(`Сортування Хоара(швидке сортування): Порівняння=${comparison}, Обмін=${swaps}, Undefined-елементи=${isUndefined}`);
      console.log(array.join(", "));
      return array;
  }
  };
  
  let dense = [
    73, 28, 96, 54, 31, 14, 80, 92, 20, 66, 7, 61, 34, 49, 15, 100, 78, 4, 11, 42,
    25, 99, 70, 88, 29, 85, 90, 55, 53, 39, 36, 59, 21, 40, 84, 24, 63, 2, 5, 45,
    95, 16, 68, 38, 35, 89, 44, 97, 67, 98, 9, 64, 87, 32, 50, 1, 46, 37, 6, 33,
    93, 23, 8, 18, 13, 56, 47, 57, 94, 48, 12, 22, 86, 58, 3, 60, 71, 26, 17, 41,
    10, 83, 75, 77, 74, 27, 19, 76, 51, 30, 43, 62, 81, 82, 91, 65, 79, 52, 72, 69
  ];  
  console.log("Початковий масив:", dense.join(", "));
  console.log("\nСортування за зростанням:");
  Library.bubble([...dense], true); 
  Library.selection([...dense], true); 
  Library.insertion([...dense], true); 
  Library.shell([...dense], true); 
  Library.quick([...dense], true); 
  console.log("\nСортування за спаданням:");
  Library.bubble([...dense], false); 
  Library.selection([...dense], false); 
  Library.insertion([...dense], false); 
  Library.shell([...dense], false); 
  Library.quick([...dense], false); 
  
  let sparse = [
    73, 28, , 54, 31, 14, 80, , 20, 66, 7, 61, , 49, 15, , 78, 4, 11, 42,
    25, 99, 70, 88, 29, 85, , 55, 53, 39, , 59, 21, , 84, 24, , 2, 5, 45,
    95, , 68, , 35, 89, 44, 97, , 98, 9, 64, 87, , 50, 1, 46, 37, 6, 33,
    93, , 8, 18, 13, 56, 47, , , , 12, 22, 86, , 3, 60, , 26, 17, 41,
    10, 83, 75, 77, , , 19, 76, 51, 30, , 62, 81, , 91, 65, , 52, 72, 69
  ];
  
  console.log("\nПочатковий масив:",sparse.join(", "));
  console.log("\nСортування за зростанням:");
  Library.bubble([...sparse], true); 
  Library.selection([...sparse], true);
  Library.insertion([...sparse], true); 
  Library.shell([...sparse], true); 
  Library.quick([...sparse], true); 
  console.log("\nСортування за спаданням:");
  Library.bubble([...sparse], false); 
  Library.selection([...sparse], false); 
  Library.insertion([...sparse], false); 
  Library.shell([...sparse], false); 
  Library.quick([...sparse], false);