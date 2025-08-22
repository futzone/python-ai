# Lists va Tuples (Python)

Python’da **list** va **tuple** ma’lumot turlari **ko‘p elementlarni saqlash** uchun ishlatiladi. Ular ko‘p jihatdan o‘xshash, ammo ba’zi farqlarga ega.

---

## 1. List (`ro‘yxat`)

- **O‘zgaruvchan** (mutable) — ya’ni elementlarni qo‘shish, o‘chirish, o‘zgartirish mumkin.
- **[]** kvadrat qavslar ichida yaratiladi.

### Misol:
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])     # apple
fruits[1] = "orange"
print(fruits)        # ['apple', 'orange', 'cherry']
````

### Asosiy metodlar:

```python
numbers = [1, 2, 3]
numbers.append(4)       # oxiriga element qo‘shish
numbers.insert(1, 10)   # index=1 joyga element qo‘shish
numbers.remove(2)       # qiymatni o‘chirish
numbers.pop()           # oxirgi elementni olib tashlash
numbers.sort()          # saralash
numbers.reverse()       # teskari qilish
```

---

## 2. Tuple (`kortej`)

* **O‘zgarmas** (immutable) — yaratilgandan keyin elementlar o‘zgartirilmaydi.
* **()** qavs ichida yaratiladi.

### Misol:

```python
point = (3, 4)
print(point[0])    # 3
# point[0] = 10    ❌ Xato — tuple o‘zgarmaydi
```

### Maxsus foydalanish:

* Tuple ko‘pincha **o‘zgarmas ma’lumot** saqlash uchun ishlatiladi.
* Tuple **dict kaliti** sifatida ishlatilishi mumkin (list bo‘la olmaydi).

---

## 3. List va Tuple farqlari

| Xususiyat   | List             | Tuple           |
| ----------- | ---------------- | --------------- |
| Qavslar     | `[]`             | `()`            |
| O‘zgarishi  | ✅ Ha             | ❌ Yo‘q          |
| Tezligi     | Sekinroq         | Tezroq          |
| Hajm        | Kattaroq         | Kichikroq       |
| Foydalanish | Dinamik ma’lumot | Doimiy ma’lumot |

---

## 4. List va Tuple o‘rtasida o‘zgartirish

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)   # list → tuple
print(my_tuple)

new_list = list(my_tuple)   # tuple → list
print(new_list)
```

---

## 5. Amaliy misollar

### 5.1. List comprehension

```python
squares = [x**2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

### 5.2. Tuple unpacking

```python
x, y, z = (10, 20, 30)
print(x, y, z)  # 10 20 30
```

### 5.3. Tuple elementlari bilan ishlash

```python
coordinates = (12.4, 56.7)
latitude, longitude = coordinates
print("Latitude:", latitude)
print("Longitude:", longitude)
```

---

## 6. Mashqlar

1. 5 ta elementli list yarating va oxiriga yangi element qo‘shing.
2. Listdagi elementlarni teskari tartibda chiqaring.
3. Tuple yarating va uni listga aylantiring.
4. Foydalanuvchidan 3 ta son kiriting va tuple qilib saqlang.
5. List comprehension yordamida 1 dan 20 gacha toq sonlar ro‘yxatini yarating.
6. Tuple unpacking orqali `(100, 200, 300)` qiymatlarini uchta o‘zgaruvchiga ajrating.
