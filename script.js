function mincost(arr)
{ 
//write your code here
// return the min cost
	function heapify(arr, n, i) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] < arr[smallest]) {
            smallest = left;
        }

        if (right < n && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
            heapify(arr, n, smallest);
        }
  
}
	function buildMinHeap(arr) {
        let n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    // Function to extract the minimum element from the heap
    function extractMin(arr) {
        let n = arr.length;
        if (n === 0) {
            return null;
        }
        let root = arr[0];
        if (n > 1) {
            arr[0] = arr[n - 1];
            heapify(arr, n - 1, 0);
        }
        arr.pop();
        return root;
    }

    // Function to insert a new element into the heap
    function insertMinHeap(arr, key) {
        arr.push(key);
        let i = arr.length - 1;
        while (i !== 0 && arr[Math.floor((i - 1) / 2)] > arr[i]) {
            [arr[i], arr[Math.floor((i - 1) / 2)]] = [arr[Math.floor((i - 1) / 2)], arr[i]];
            i = Math.floor((i - 1) / 2);
        }
    }

    // Main function to calculate minimum cost
    buildMinHeap(arr);

    let totalCost = 0;

    while (arr.length > 1) {
        let first = extractMin(arr);
        let second = extractMin(arr);

        let cost = first + second;
        totalCost += cost;

        insertMinHeap(arr, cost);
    }

    return totalCost;
}

module.exports=mincost;
