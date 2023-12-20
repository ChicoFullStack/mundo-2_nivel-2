

// --> Função swap <--//

var listaNomes = ["João", "Maria", "Beltrano", "Fabio", "Junio"]

const swap = (arr,a ,b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
    return arr;
}


// --> Função shuffle <--//

const shuffler = (array) => {
    let shuffledArray = [];
    let usedIndex = [];

    let i = 0;
    while (i < array.length) {
        let randomNumber = Math.floor(Math.random() * array.length);
        if (!usedIndex.includes(randomNumber)) {
            shuffledArray.push(array[randomNumber]);
            usedIndex.push(randomNumber);
            i++
        }
    }

    return shuffledArray;
}


// --> Função bubble_sort_1 <--//

const bubblesort_1 = (itens) => {
    let swap;
    let last = itens.length - 1;
    do {
        swap = false;
        for (let i = 0; i < last; i++) {
            if (itens[i] > itens[i + 1]) {
                [itens[i], itens[i + 1]] = [itens[i + 1], itens[i]];
                swap = true;
            }
        }
        last--;
    }while (swap)
 
    return itens;
}

const bubblesort_2 = (arr) => {
    for (i=0; i<(arr.length-1); i++){
        for (j=0; j<((arr.length-1)-i); j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
  
    return arr
}


// --> Função bubble_sort <--//
const BubbleSort = (arr) => {
  for(i=0; i<(arr.length-1); i++){
    for(j=0; j<((arr.length-1)-i); j++){
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}


// --> Função Selection_Sort <--//

const selection_sort = (vetor) => {
  let len = vetor.length;
  let menor;
  for (let i = 0; i < len - 1; i++) {
      menor = i;
      for (let j = i + 1; j < len; j++) {
          if (vetor[j] < vetor[menor]) {
              menor = j;
          } 
      }
      if (i !== menor) {
          swapSort(vetor, i, menor);
      } else {}
  }
  return vetor
}

const swapSort = (vetor, x, y) => {
  var temp = vetor[x];
  vetor[x] = vetor[y];
  vetor[y] = temp;
  
}

// --> Função Quick_Sort <--//

const quickSort = (array) => {

    if (array.length <= 1) return array;

    const  pivot = array[0];

    const left =[];
    const right =[];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }

    return quickSort(left). concat(pivot , quickSort(right));
    
}














