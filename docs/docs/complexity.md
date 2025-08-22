# Algorithmic Complexity (Murakkablik)

Kompyuter fanida **complexity** — algoritmning tezligi va resurs talabini o‘lchash tushunchasi. U ikkita asosiy turga bo‘linadi:

1. **Time Complexity** (Vaqt murakkabligi)  
   - Algoritm qancha **bosqich** (operation) bajarishini ko‘rsatadi.  
   - Asosiy maqsad: algoritm tezligini baholash.  

2. **Space Complexity** (Xotira murakkabligi)  
   - Algoritm bajarilishi uchun kerak bo‘ladigan **xotira hajmini** ko‘rsatadi.  
   - Asosiy maqsad: xotira samaradorligini baholash.  

---

## Big O Notatsiya
Algoritmlarni baholash uchun odatda **Big O** ishlatiladi. Bu eng yomon holatdagi murakkablikni bildiradi.

### Asosiy murakkablik turlari:
- **O(1)** – doimiy vaqt (constant time)  
- **O(log n)** – logarifmik vaqt  
- **O(n)** – chiziqli vaqt  
- **O(n log n)** – log-chiziqli vaqt  
- **O(n²)** – kvadratik vaqt  
- **O(2ⁿ)** – eksponensial vaqt  

---

## Misollar

### 1. O(1) – Constant Time
```python
def get_first_element(arr):
    return arr[0]   # doimiy vaqt, n ga bog‘liq emas
````

### 2. O(n) – Linear Time

```python
def print_all(arr):
    for item in arr:   # barcha elementlarni bosib chiqish
        print(item)
```

### 3. O(n²) – Quadratic Time

```python
def print_pairs(arr):
    for i in arr:
        for j in arr:  # ichma-ich loop
            print(i, j)
```

### 4. O(log n) – Logarithmic Time (Binary Search)

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

---

## Jadval: Amaliy tezlik solishtirishi

| N    | O(1) | O(log n) | O(n) | O(n log n) | O(n²)     |
| ---- | ---- | -------- | ---- | ---------- | --------- |
| 10   | 1    | 3        | 10   | 33         | 100       |
| 100  | 1    | 7        | 100  | 664        | 10,000    |
| 1000 | 1    | 10       | 1000 | 9965       | 1,000,000 |

---

## Xulosa

* Har bir algoritmning **tezlik** va **xotira** nuqtai nazaridan samaradorligini baholash muhim.
* Har doim **O(n²)** yoki undan yomon algoritmlardan saqlanish kerak, ayniqsa katta ma’lumotlarda.
* **Binary Search, HashMap** kabi samarali usullar tezkor ishlashga yordam beradi.
