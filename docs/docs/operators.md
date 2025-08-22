# 🐍 Python Operatorlari: To'liq Qo'llanma

Dasturlashda **operatorlar** — bu qiymatlar va o'zgaruvchilar ustida turli amallarni (matematik, mantiqiy, solishtirish va hokazo) bajarish uchun ishlatiladigan maxsus belgilar yoki kalit so'zlardir. Python operatorlarga juda boy, va ularni to'g'ri tushunish samarali kod yozishning kalitidir.

Ushbu qo'llanmada biz Pythonning barcha asosiy operator turlarini batafsil ko'rib chiqamiz.

## 1. Arifmetik Operatorlar

Bu operatorlar oddiy matematik amallarni bajarish uchun ishlatiladi.

| Operator | Nomlanishi         | Misol               | Natija          | Izoh                                                                     |
|:--------:|--------------------|---------------------|-----------------|--------------------------------------------------------------------------|
| `+`      | Qo'shish           | `x + y` (5 + 2)     | `7`             | Sonlarni qo'shadi. Matnlarni birlashtiradi ("Salom" + " Dunyo").          |
| `-`      | Ayirish            | `x - y` (5 - 2)     | `3`             | Bir sondan ikkinchisini ayiradi.                                         |
| `*`      | Ko'paytirish       | `x * y` (5 * 2)     | `10`            | Sonlarni ko'paytiradi. Matnni takrorlaydi ("Ha" * 3 -> "HaHaHa").         |
| `/`      | Bo'lish           | `x / y` (5 / 2)     | `2.5`           | Oddiy bo'lish. Natija har doim `float` (o'nlik kasr) bo'ladi.           |
| `//`     | Butun bo'lish      | `x // y` (5 // 2)   | `2`             | Bo'linmaning butun qismini qaytaradi.                                      |
| `%`      | Qoldiqni topish    | `x % y` (5 % 2)     | `1`             | Bo'lishdan qolgan qoldiqni topadi. Juft/toqlikni tekshirishda ko'p ishlatiladi. |
| `**`     | Darajaga ko'tarish | `x ** y` (5 ** 2)   | `25`            | Bir sonni ikkinchisining darajasiga ko'taradi.                           |

### Misollar:

```python
x = 10
y = 3

print(f"{x} + {y} = {x + y}")      # Natija: 13
print(f"{x} / {y} = {x / y}")      # Natija: 3.333...
print(f"{x} // {y} = {x // y}")    # Natija: 3
print(f"{x} % {y} = {x % y}")      # Natija: 1
print(f"{x} ** {y} = {x ** y}")    # Natija: 1000

# Matnlar (string) bilan ishlash
ism = "Ali"
familya = "Valiyev"
print(ism + " " + familya) # Natija: Ali Valiyev

print("-" * 20)           # Natija: --------------------
```

## 2. Tayinlash Operatorlari (Assignment Operators)

Bu operatorlar o'zgaruvchilarga qiymat berish (tayinlash) uchun ishlatiladi.

| Operator | Misol        | Ekvivalenti        | Izoh                                                         |
|:--------:|--------------|--------------------|--------------------------------------------------------------|
| `=`      | `x = 5`      | `x = 5`            | Oddiy tayinlash.                                             |
| `+=`     | `x += 3`     | `x = x + 3`        | O'zgaruvchi qiymatiga qo'shib, natijani o'ziga qayta tayinlaydi. |
| `-=`     | `x -= 3`     | `x = x - 3`        | O'zgaruvchi qiymatidan ayirib, natijani o'ziga qayta tayinlaydi. |
| `*=`     | `x *= 3`     | `x = x * 3`        | Ko'paytiradi va natijani o'ziga qayta tayinlaydi.             |
| `/=`     | `x /= 3`     | `x = x / 3`        | Bo'ladi va natijani o'ziga qayta tayinlaydi.                 |
| `//=`    | `x //= 3`    | `x = x // 3`       | Butun bo'ladi va natijani o'ziga qayta tayinlaydi.           |
| `%=`     | `x %= 3`     | `x = x % 3`        | Qoldiqni topadi va natijani o'ziga qayta tayinlaydi.         |
| `**=`    | `x **= 3`    | `x = x ** 3`       | Darajaga ko'taradi va natijani o'ziga qayta tayinlaydi.      |

### Misollar:

```python
hisob = 100
print("Boshlang'ich hisob:", hisob)

hisob += 50 # hisob = hisob + 50
print("Qo'shilgandan keyin:", hisob) # Natija: 150

hisob -= 20 # hisob = hisob - 20
print("Ayirilgandan keyin:", hisob) # Natija: 130

hisob *= 2 # hisob = hisob * 2
print("Ko'paytirilgandan keyin:", hisob) # Natija: 260
```

## 3. Solishtirish Operatorlari (Comparison Operators)

Bu operatorlar ikkita qiymatni solishtirish uchun ishlatiladi va natija sifatida mantiqiy qiymat (`True` yoki `False`) qaytaradi. Ular `if` shartlarida juda ko'p qo'llaniladi.

| Operator | Nomlanishi             | Misol                | Natija          |
|:--------:|------------------------|----------------------|-----------------|
| `==`     | Tengmi?                | `x == y` (5 == 5)    | `True`          |
| `!=`     | Teng emasmi?           | `x != y` (5 != 3)    | `True`          |
| `>`      | Katta                    | `x > y`  (5 > 3)     | `True`          |
| `<`      | Kichik                   | `x < y`  (3 < 5)     | `True`          |
| `>=`     | Katta yoki teng        | `x >= y` (5 >= 5)    | `True`          |
| `<=`     | Kichik yoki teng       | `x <= y` (3 <= 5)    | `True`          |

### Misollar:

```python
a = 10
b = 20
c = 10

print(f"{a} == {c} -> {a == c}")    # Natija: True
print(f"{a} == {b} -> {a == b}")    # Natija: False
print(f"{a} != {b} -> {a != b}")    # Natija: True
print(f"{b} > {a} -> {b > a}")      # Natija: True
print(f"{a} >= {c} -> {a >= c}")    # Natija: True
```

**Muhim farq**: `x = 5` (tayinlash) va `x == 5` (solishtirish) butunlay boshqa-boshqa narsalar. Bu yangi boshlovchilar yo'l qo'yadigan eng keng tarqalgan xatolardan biridir.

## 4. Mantiqiy Operatorlar (Logical Operators)

Bu operatorlar mantiqiy shartlarni birlashtirish uchun ishlatiladi.

| Operator | Nomlanishi  | Misol                       | Izoh                                                    |
|:--------:|-------------|-----------------------------|---------------------------------------------------------|
| `and`    | Mantiqiy VA | `x > 5 and x < 10`          | Ikkala shart ham `True` bo'lsa, `True` qaytaradi.       |
| `or`     | Mantiqiy YOKI| `x > 5 or y < 2`            | Kamida bitta shart `True` bo'lsa, `True` qaytaradi.     |
| `not`    | Mantiqiy EMAS| `not(x > 5 and x < 10)`     | Natijani teskarisiga o'giradi (`True`ni `False`ga va aksincha). |

### Misollar:

```python
yosh = 25
daromad = 50000

# Kredit berish shartlari: yoshi 18 dan katta VA daromadi 30000 dan yuqori bo'lishi kerak.
if yosh > 18 and daromad > 30000:
    print("Sizga kredit berilishi mumkin.")
else:
    print("Kechirasiz, siz shartlarga to'g'ri kelmaysiz.")

# Dam olish kuni tekshiruvi: kun shanba YOKI yakshanba bo'lsa.
kun = "shanba"
if kun == "shanba" or kun == "yakshanba":
    print("Bugun dam olish kuni!")
else:
    print("Bugun ish kuni.")

# 'not' operatori
chiroq_yoqilgan = False
if not chiroq_yoqilgan:
    print("Chiroqni yoqing!") # Agar chiroq_yoqilgan False bo'lsa, not(False) -> True bo'ladi
```

## 5. A'zolik Operatorlari (Membership Operators)

Bu operatorlar biror element biror to'plam (masalan, ro'yxat, matn, lug'at) ichida mavjudligini tekshirish uchun ishlatiladi.

| Operator | Misol                  | Izoh                                                    |
|:--------:|------------------------|---------------------------------------------------------|
| `in`     | `x in y`               | Agar `x` elementi `y` to'plamida bo'lsa, `True` qaytaradi. |
| `not in` | `x not in y`           | Agar `x` elementi `y` to'plamida bo'lmasa, `True` qaytaradi.|

### Misollar:

```python
mevalar = ["olma", "banan", "anor"]

# 'in' operatori
if "banan" in mevalar:
    print("Ha, ro'yxatda banan bor.")

# 'not in' operatori
if "gilos" not in mevalar:
    print("Ro'yxatda gilos yo'q.")

# Matnlar bilan ishlash
matn = "Python dasturlash tili"
if "lash" in matn:
    print("Ha, 'lash' qismi matnda mavjud.")
```

## 6. Identifikatsiya Operatorlari (Identity Operators)

Bu operatorlar ikkita o'zgaruvchining xotiradagi bir xil ob'ektga ishora qilayotganini (ya'ni, bir xil ob'ekt ekanligini) tekshirish uchun ishlatiladi. Ular `==` dan farq qiladi. `==` qiymatlarni solishtiradi, `is` esa xotiradagi joylashuvni solishtiradi.

| Operator | Misol                  | Izoh                                                    |
|:--------:|------------------------|---------------------------------------------------------|
| `is`     | `x is y`               | Agar `x` va `y` xotirada bir xil ob'ekt bo'lsa, `True` qaytaradi. |
| `is not` | `x is not y`           | Agar `x` va `y` xotirada har xil ob'ekt bo'lsa, `True` qaytaradi. |

### Misollar:

```python
list1 = ["olma", "banan"]
list2 = ["olma", "banan"]
list3 = list1

print(f"list1 == list2 -> {list1 == list2}") # Qiymatlari bir xil -> True
print(f"list1 is list2 -> {list1 is list2}")   # Xotirada ikki xil ob'ekt -> False

print(f"list1 == list3 -> {list1 == list3}") # Qiymatlari bir xil -> True
print(f"list1 is list3 -> {list1 is list3}")   # Xotirada bitta ob'ektga ishora qilmoqda -> True

list3.append("gilos")
print("O'zgartirilgan list1:", list1) # list3 o'zgarsa, list1 ham o'zgaradi!
```

**Qachon ishlatiladi?** Ko'pincha `None` bilan solishtirish uchun ishlatiladi: `if my_variable is None:`. Bu `if my_variable == None:` dan ko'ra afzalroq hisoblanadi.

---

Ushbu operatorlarni yaxshilab o'zlashtirish, Python kodini to'g'ri va samarali yozish uchun mustahkam poydevor bo'lib xizmat qiladi. Ularni turli misollarda qo'llab, amaliyotda mustahkamlang!
