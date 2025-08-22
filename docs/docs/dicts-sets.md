# Python'da Lug'atlar va To'plamlar

## Lug'atlar (Dictionaries)

### Lug'at Nima?

Lug'at - bu **kalit-qiymat** juftliklarini saqlovchi ma'lumotlar tuzilmasi. Har bir kalit noyob bo'lib, unga mos qiymatni tezda topish imkonini beradi. Lug'atlar jingalak qavslar `{}` ichida ta'riflanadi.

Sintaksis:
```python
lugat = {"kalit1": qiymat1, "kalit2": qiymat2}
```

Misol:
```python
talaba = {"ism": "Ali", "yosh": 20, "kurs": 2}
print(talaba["ism"])  # Chiqish: Ali
```

**Xususiyatlari**:
- Kalitlar o'zgarmas (immutable) turdagi bo'lishi kerak (masalan, sonlar, satrlar, tuple'lar).
- Qiymatlar har qanday turdagi bo'lishi mumkin (son, satr, ro'yxat, boshqa lug'at va h.k.).
- Tartibsiz: Lug'at elementlari tartibda saqlanmaydi (Python 3.7+ dan boshlab tartib saqlanadi, lekin unga ishonmang).

### Lug'at bilan Amallar

1. **Qiymatni olish**:
   ```python
   print(talaba["yosh"])  # Chiqish: 20
   print(talaba.get("yosh"))  # Chiqish: 20 (xato bo'lsa None qaytaradi)
   ```

2. **Qiymatni o'zgartirish yoki qo'shish**:
   ```python
   talaba["yosh"] = 21  # O'zgartirish
   talaba["baho"] = 5  # Yangi juftlik qo'shish
   print(talaba)  # Chiqish: {'ism': 'Ali', 'yosh': 21, 'kurs': 2, 'baho': 5}
   ```

3. **Elementni o'chirish**:
   ```python
   del talaba["kurs"]
   print(talaba)  # Chiqish: {'ism': 'Ali', 'yosh': 21, 'baho': 5}
   ```

4. **Lug'at metodlari**:
   - `keys()`: Kalitlar ro'yxatini qaytaradi.
   - `values()`: Qiymatlar ro'yxatini qaytaradi.
   - `items()`: Kalit-qiymat juftliklarini tuple sifatida qaytaradi.
   ```python
   print(talaba.keys())  # Chiqish: dict_keys(['ism', 'yosh', 'baho'])
   print(talaba.values())  # Chiqish: dict_values(['Ali', 21, 5])
   print(talaba.items())  # Chiqish: dict_items([('ism', 'Ali'), ('yosh', 21), ('baho', 5)])
   ```

5. **Lug'at bo'ylab yurish**:
   ```python
   for kalit, qiymat in talaba.items():
       print(f"{kalit}: {qiymat}")
   # Chiqish:
   # ism: Ali
   # yosh: 21
   # baho: 5
   ```

## To'plamlar (Sets)

### To'plam Nima?

To'plam - bu noyob elementlardan iborat tartibsiz ma'lumotlar to'plami. To'plamlar takrorlanuvchi elementlarni saqlamaydi va matematik to'plam operatsiyalari (birlashma, ayirma, kesishma) uchun juda qulay.

Sintaksis:
```python
to'plam = {element1, element2, element3}
```
Yoki:
```python
to'plam = set([element1, element2, element3])
```

Misol:
```python
sonlar = {1, 2, 3, 3, 4}  # Takrorlanuvchi elementlar olib tashlanadi
print(sonlar)  # Chiqish: {1, 2, 3, 4}
```

**Xususiyatlari**:
- Elementlar o'zgarmas (immutable) bo'lishi kerak (masalan, sonlar, satrlar, tuple'lar).
- Tartibsiz: Elementlarning joylashuvi muhim emas.
- Takrorlanmaydi: Har bir element faqat bir marta bo'ladi.

### To'plamlar bilan Amallar

1. **Element qo'shish**:
   ```python
   sonlar.add(5)
   print(sonlar)  # Chiqish: {1, 2, 3, 4, 5}
   ```

2. **Elementni o'chirish**:
   ```python
   sonlar.remove(3)  # Agar element bo'lmasa, xato chiqaradi
   print(sonlar)  # Chiqish: {1, 2, 4, 5}
   sonlar.discard(10)  # Xato chiqarmaydi, agar element bo'lmasa
   ```

3. **To'plamlar bilan matematik operatsiyalar**:
   ```python
   a = {1, 2, 3}
   b = {2, 3, 4}
   
   print(a.union(b))  # Birlashma: {1, 2, 3, 4}
   print(a.intersection(b))  # Kesishma: {2, 3}
   print(a.difference(b))  # Ayirma: {1}
   print(a.symmetric_difference(b))  # Simmetrik ayirma: {1, 4}
   ```

4. **To'plam bo'ylab yurish**:
   ```python
   for son in sonlar:
       print(son)
   # Chiqish: 1, 2, 4, 5 (tartib tasodifiy bo'lishi mumkin)
   ```

## Lug'atlar va To'plamlarning Farqlari

| Xususiyat          | Lug'at (Dictionary)                     | To'plam (Set)                     |
|---------------------|-----------------------------------------|-----------------------------------|
| Tuzilishi          | Kalit-qiymat juftliklari               | Faqat noyob elementlar            |
| Element turi       | Kalit: immutable, Qiymat: har qanday   | Immutable elementlar              |
| Takrorlanish       | Kalitlar takrorlanmaydi                | Elementlar takrorlanmaydi        |
| Operatsiyalar      | Kalit orqali kirish, o'zgartirish      | To'plam operatsiyalari (union, etc.) |

## Amaliy Misollar

### Misol 1: Talabalar ro'yxati (Lug'at)

Talabalar ma'lumotlarini lug'atda saqlash va ularning baholarini hisoblash.

```python
talabalar = {
    "Ali": [90, 85, 88],
    "Vali": [78, 82, 80],
    "Olim": [95, 92, 90]
}

def orta_baho(ism):
    baholar = talabalar.get(ism, [])
    if baholar:
        return sum(baholar) / len(baholar)
    return 0

print(orta_baho("Ali"))  # Chiqish: 87.66666666666667
print(orta_baho("Noma'lum"))  # Chiqish: 0
```

### Misol 2: Takrorlanuvchi so'zlarni topish (To'plam)

Matndagi noyob so'zlarni topish.

```python
matn = "bu bir matn bu matn misol uchun"
sozlar = matn.split()
noyob_sozlar = set(sozlar)
print(noyob_sozlar)  # Chiqish: {'bu', 'bir', 'matn', 'misol', 'uchun'}
print(len(noyob_sozlar))  # Chiqish: 5
```

### Misol 3: Umumiy elementlarni topish (To'plam)

Ikkita ro'yxatning umumiy elementlarini topish.

```python
guruh1 = {"Ali", "Vali", "Olim"}
guruh2 = {"Vali", "Olim", "Sardor"}
umumiy = guruh1.intersection(guruh2)
print(umumiy)  # Chiqish: {'Vali', 'Olim'}
```

## Maslahatlar

1. **Lug'atlar**:
   - Kalit sifatida satrlar yoki sonlardan foydalaning, chunki ular o'zgarmas va tushunarli.
   - `get()` metodidan foydalaning, chunki u xatosiz qiymat qaytaradi.
   - Katta lug'atlarda kalitlarning mavjudligini `in` operatori bilan tekshiring:
     ```python
     if "ism" in talaba:
         print(talaba["ism"])
     ```

2. **To'plamlar**:
   - Takrorlanuvchi ma'lumotlarni olib tashlash uchun to'plamlardan f