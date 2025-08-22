# Python'da Qidiruv va Saralash Algoritmlari

## Qidiruv Algoritmlari

Qidiruv algoritmlari ma'lumotlar to'plamida (masalan, ro'yxatda) kerakli elementni topish uchun ishlatiladi. Python'da eng keng tarqalgan ikkita qidiruv algoritmi: **Linear Search** va **Binary Search**.

### 1. Linear Search (Chiziqli Qidiruv)

Linear Search ro'yxatni birin-ketin tekshirib, kerakli elementni topadi. Bu eng oddiy algoritm, lekin katta ro'yxatlarda sekin ishlaydi.

**Sintaksis va Ishlash**:
- Har bir elementni solishtiradi.
- Element topilsa, uning indeksini qaytaradi, aks holda `-1` yoki `None` qaytaradi.

```python
def linear_search(royxat, element):
    for i in range(len(royxat)):
        if royxat[i] == element:
            return i
    return -1

sonlar = [4, 2, 7, 1, 9, 5]
topilgan = linear_search(sonlar, 7)
print(topilgan)  # Chiqish: 2 (7 soni 2-indeksda)
print(linear_search(sonlar, 3))  # Chiqish: -1 (3 ro'yxatda yo'q)
```

**Afzalliklari**:
- Oddiy va tushunarli.
- Ro'yxat saralangan bo'lishi shart emas.

**Kamchiliklari**:
- Katta ro'yxatlarda sekin (O(n) vaqt murakkabligi).

### 2. Binary Search (Ikkilik Qidiruv)

Binary Search faqat **saralangan** ro'yxatlarda ishlaydi. U ro'yxatni ikkiga bo'lib, qidiruvni faqat kerakli qismda davom ettiradi, shuning uchun ancha tezroq.

**Sintaksis va Ishlash**:
- Ro'yxatning o'rtasini topadi.
- Agar o'rta element kerakli element bo'lsa, uni qaytaradi.
- Agar kerakli element o'rta elementdan kichik yoki katta bo'lsa, qidiruvni mos ravishda ro'yxatning chap yoki o'ng yarmida davom ettiradi.

```python
def binary_search(royxat, element):
    chap = 0
    ong = len(royxat) - 1
    
    while chap <= ong:
        orta = (chap + ong) // 2
        if royxat[orta] == element:
            return orta
        elif royxat[orta] < element:
            chap = orta + 1
        else:
            ong = orta - 1
    return -1

saralangan_sonlar = [1, 2, 4, 5, 7, 9]
print(binary_search(saralangan_sonlar, 5))  # Chiqish: 3 (5 soni 3-indeksda)
print(binary_search(saralangan_sonlar, 3))  # Chiqish: -1 (3 ro'yxatda yo'q)
```

**Afzalliklari**:
- Juda tez (O(log n) vaqt murakkabligi).
- Katta ro'yxatlarda samarali.

**Kamchiliklari**:
- Ro'yxat saralangan bo'lishi kerak.
- Ko'proq kod talab qiladi.

## Saralash Algoritmlari

Saralash algoritmlari ro'yxatni tartibga soladi (masalan, o'sish yoki kamayish tartibida). Python'da eng keng tarqalgan saralash algoritmlari: **Bubble Sort**, **Selection Sort** va **Pythonning o'rnatilgan sort() metodi**.

### 1. Bubble Sort (Pufakcha Saralash)

Bubble Sort ro'yxatni birin-ketin solishtirib, qo'shni elementlarni almashtiradi, agar ular noto'g'ri tartibda bo'lsa.

**Ishlash**:
- Har bir iteratsiyada eng katta (yoki eng kichik) element ro'yxat oxiriga (yoki boshiga) ko'chiriladi.
- Bu jarayon ro'yxat to'liq saralanguncha takrorlanadi.

```python
def bubble_sort(royxat):
    n = len(royxat)
    for i in range(n):
        for j in range(0, n - i - 1):
            if royxat[j] > royxat[j + 1]:
                royxat[j], royxat[j + 1] = royxat[j + 1], royxat[j]
    return royxat

sonlar = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(sonlar))  # Chiqish: [11, 12, 22, 25, 34, 64, 90]
```

**Afzalliklari**:
- Oddiy va tushunarli.
- Kichik ro'yxatlar uchun mos.

**Kamchiliklari**:
- Sekin (O(n²) vaqt murakkabligi).
- Katta ro'yxatlarda samarasiz.

### 2. Selection Sort (Tanlab Saralash)

Selection Sort har bir iteratsiyada ro'yxatdagi eng kichik elementni topadi va uni ro'yxat boshiga qo'yadi.

**Ishlash**:
- Ro'yxatning saralanmagan qismida eng kichik elementni topadi.
- Uni saralanmagan qismning birinchi elementi bilan almashtiradi.
- Bu jarayon ro'yxat to'liq saralanguncha davom etadi.

```python
def selection_sort(royxat):
    for i in range(len(royxat)):
        min_idx = i
        for j in range(i + 1, len(royxat)):
            if royxat[j] < royxat[min_idx]:
                min_idx = j
        royxat[i], royxat[min_idx] = royxat[min_idx], royxat[i]
    return royxat

sonlar = [64, 34, 25, 12, 22, 11, 90]
print(selection_sort(sonlar))  # Chiqish: [11, 12, 22, 25, 34, 64, 90]
```

**Afzalliklari**:
- Oddiy va tushunarli.
- Kam almashtirish amallari.

**Kamchiliklari**:
- Sekin (O(n²) vaqt murakkabligi).
- Katta ro'yxatlarda samarasiz.

### 3. Pythonning O'rnatilgan Saralash Metodi

Python'da `sort()` metodi va `sorted()` funksiyasi TimSort algoritmidan foydalanadi, bu juda samarali (O(n log n)).

```python
sonlar = [64, 34, 25, 12, 22, 11, 90]
sonlar.sort()  # Ro'yxatni o'zgartiradi
print(sonlar)  # Chiqish: [11, 12, 22, 25, 34, 64, 90]

# sorted() yangi ro'yxat qaytaradi
sonlar = [64, 34, 25, 12, 22, 11, 90]
yangi = sorted(sonlar)
print(yangi)  # Chiqish: [11, 12, 22, 25, 34, 64, 90]
print(sonlar)  # Chiqish: [64, 34, 25, 12, 22, 11, 90] (o'zgarmadi)
```

**Afzalliklari**:
- Juda tez va samarali.
- Qo'shimcha kod yozish shart emas.

**Kamchiliklari**:
- Algoritm ichki tuzilishini tushunish qiyinroq.

## Amaliy Misollar

### Misol 1: Talabalar ro'yxatini saralash

Talabalarni yoshi bo'yicha saralash.

```python
talabalar = [
    {"ism": "Ali", "yosh": 20},
    {"ism": "Vali", "yosh": 22},
    {"ism": "Olim", "yosh": 19}
]

saralangan = sorted(talabalar, key=lambda x: x["yosh"])
print(saralangan)
# Chiqish: [{'ism': 'Olim', 'yosh': 19}, {'ism': 'Ali', 'yosh': 20}, {'ism': 'Vali', 'yosh': 22}]
```

### Misol 2: Ro'yxatda elementni qidirish

Linear search yordamida ro'yxatda so'zni topish.

```python
sozlar = ["olma", "banan", "uzum", "anor"]
def linear_search_soz(royxat, soz):
    for i, item in enumerate(royxat):
        if item == soz:
            return i
    return -1

print(linear_search_soz(sozlar, "banan"))  # Chiqish: 1
print(linear_search_soz(sozlar, "gilos"))  # Chiqish: -1
```

### Misol 3: Binary Search bilan saralangan ro'yxatda qidiruv

```python
saralangan_sonlar = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(saralangan_sonlar, 7))  # Chiqish: 3
print(binary_search(saralangan_sonlar, 4))  # Chiqish: -1
```

## Maslahatlar

1. **Qidiruv uchun**:
   - Kichik ro'yxatlar uchun linear search yetarli.
   - Katta va saralangan ro'yxatlar uchun binary search ishlatish yaxshiroq.
   - Python'da `in` operatori kichik ro'yxatlar uchun linear search sifatida ishlaydi:
     ```python
     if 7 in sonlar:
         print("Topildi!")
     ```

2. **Saralash uchun**:
   - O'rnatilgan `sort()` yoki `sorted()` metodlaridan foydalaning, chunki ular optimallashtirilgan.
   - Agar algoritmni o'rganmoqchi bo'lsangiz, bubble sort yoki selection sortni sinab ko'ring.
   - Murakkab saralash uchun `key` parametri foydali:
     ```python
     sozlar = ["olma", "banan", "uzum"]
     print(sorted(sozlar, key=len))  # Uzunlik bo'yicha saralash: ['olma', 'uzum', 'banan']
     ```

3. **Xatolarni boshqarish**:
   ```python
   try:
       indeks = linear_search(sonlar, 10)
       if indeks == -1:
           print("Element topilmadi!")
   except Exception as e:
       print(f"Xato: {e}")
   ```

4. **Docstring**:
   ```python
   def linear_search(royxat, element):
       """Ro'yxatda elementni chiziqli qidiruv orqali topadi."""
       for i in range(len(royxat)):
           if royxat[i] == element:
               return i
       return -1
   ```

## Xulosa

Qidiruv va saralash algoritmlari Python'da ma'lumotlarni samarali boshqarish uchun zarur. Linear search va binary search qidiruv uchun, bubble sort, selection sort va o'rnatilgan `sort()` metodlari esa saralash uchun ishlatiladi. Ushbu hujjatdagi misollarni sinab ko'ring, o'z algoritmlaringizni yozing va savollaringiz bo'lsa, qo'shimcha ma'lumot so'rang!

Muvaffaqiyat tilayman! 🚀