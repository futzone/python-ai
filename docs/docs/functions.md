# Python'da Funksiyalar

## Kirish

Salom! Ushbu hujjat Python dasturlash tilida **funksiyalar** mavzusini batafsil va tushunarli tarzda yoritib beradi. Bu Python kursi uchun o'quvchilar uchun mo'ljallangan, shuning uchun har bir qismni oddiy til bilan izohlayman va misollar bilan ta'minlayman. Funksiyalar - bu dastur kodini takrorlanuvchi qismlarga ajratish va qayta ishlatish imkonini beruvchi muhim element. Ular kodni toza, o'qilishi oson va samarali qiladi.

Agar siz yangi boshlovchi bo'lsangiz, funksiyalar haqida quyidagi savollarga javob topasiz:
- Funksiya nima?
- Qanday ta'riflanadi?
- Parametrlar va argumentlar qanday ishlaydi?
- Funksiyalar qiymatni qaytarishi mumkinmi?
- Va yana ko'p narsalar!

Kodni sinab ko'rish uchun Python interpretatorini (masalan, IDLE yoki online repl.it) ishlatishingiz mumkin. Har bir misolni o'zingiz yozib, ishlatib ko'ring!

## Funksiya Nima?

Funksiya - bu ma'lum bir vazifani bajaruvchi kod bloki. U takrorlanuvchi kodni bir joyga to'plash imkonini beradi. Masalan, agar siz bir necha joyda ikkita sonni qo'shish kerak bo'lsa, har safar yangi kod yozish o'rniga, bir funksiya yaratib, uni chaqirishingiz mumkin.

Funksiyalarning afzalliklari:
- **Kodni qayta ishlatish**: Bir funksiyani ko'p joyda chaqirish mumkin.
- **O'qilishlik**: Kodni modullariga ajratadi.
- **Sinov qilish oson**: Alohida funksiyalarni alohida sinab ko'rish mumkin.
- **Xatolarni kamaytirish**: Takrorlanuvchi kodda xato bo'lsa, faqat bitta joyda tuzatish kifoya.

Python'da funksiyalar `def` keywordi bilan ta'riflanadi.

## Funksiyani Ta'riflash

Funksiyani ta'riflash uchun quyidagi sintaksisdan foydalaning:

```python
def funksiya_nomi(parametrlar):
    # Funksiya ichidagi kod
    # ...
    return qiymat  # Ixtiyoriy: qiymatni qaytarish
```

- `def`: Funksiya ta'rifini boshlaydi.
- `funksiya_nomi`: Funksiyaning nomi (katta-kichik harflar, sonlar va pastki chiziqdan iborat bo'lishi mumkin, lekin son bilan boshlanmasligi kerak).
- `parametrlar`: Funksiyaga beriladigan qiymatlar (ixtiyoriy).
- `:`: Funksiya tanasini boshlaydi.
- Indentatsiya (bo'sh joylar): Funksiya ichidagi kod 4 bo'sh joy bilan indentatsiya qilinadi.
- `return`: Funksiyadan qiymatni qaytaradi (ixtiyoriy; agar bo'lmasa, `None` qaytaradi).

### Oddiy Misol

Quyidagi funksiya "Salom, dunyo!" deb chiqaradi:

```python
def salom_ayt():
    print("Salom, dunyo!")

# Funksiyani chaqirish
salom_ayt()  # Chiqish: Salom, dunyo!
```

Izoh: Funksiyani ta'riflagandan keyin uni **chaqirish** kerak, aks holda u ishlamaydi. Chaqirish `funksiya_nomi()` shaklida bo'ladi.

## Parametrlar va Argumentlar

Funksiyalar ma'lumotlarni qabul qilishi mumkin. **Parametrlar** - funksiya ta'rifida ko'rsatilgan o'zgaruvchilar. **Argumentlar** - funksiyani chaqirganda beriladigan haqiqiy qiymatlar.

### Oddiy Parametrlar

```python
def qoshish(a, b):  # a va b - parametrlar
    natija = a + b
    print(natija)

# Chaqirish
qoshish(5, 3)  # 5 va 3 - argumentlar. Chiqish: 8
```

Agar parametrlar soni mos kelmasa, xato chiqadi (masalan, `qoshish(5)` - xato).

### Default (Standart) Parametrlar

Parametrga standart qiymat berish mumkin. Agar argument berilmasa, standart qiymat ishlatiladi.

```python
def salom_ayt(ism="Mehmon"):  # ism - default parametr
    print(f"Salom, {ism}!")

salom_ayt("Ali")  # Chiqish: Salom, Ali!
salom_ayt()       # Chiqish: Salom, Mehmon!
```

Izoh: Default parametrlar funksiya ta'rifida oxirgi o'rinda bo'lishi kerak.

### Keyword Argumentlar

Argumentlarni parametr nomlari bilan berish mumkin. Bu tartibni o'zgartirish imkonini beradi.

```python
def malumot(ism, yosh):
    print(f"{ism} {yosh} yoshda.")

malumot(ism="Vali", yosh=25)  # Chiqish: Vali 25 yoshda.
malumot(yosh=30, ism="Olim")  # Chiqish: Olim 30 yoshda.
```

## Qiymatni Qaytarish (Return)

Funksiya natijani qaytarishi mumkin. `return` keywordi bilan qiymatni qaytaradi. Agar `return` bo'lmasa, `None` qaytaradi.

```python
def kvadrat(son):
    return son ** 2  # Kvadratni qaytaradi

natija = kvadrat(4)  # natija = 16
print(natija)        # Chiqish: 16
```

Bir nechta qiymatni qaytarish mumkin (tuple sifatida):

```python
def min_max(raqamlar):
    return min(raqamlar), max(raqamlar)

kichik, katta = min_max([1, 5, 3])  # kichik=1, katta=5
```

## O'zgaruvchilar Doirasi (Scope)

Funksiya ichidagi o'zgaruvchilar **lokal** (faqat funksiya ichida mavjud). Tashqaridagi o'zgaruvchilar **global** (hamma joyda mavjud).

```python
x = 10  # Global o'zgaruvchi

def funksiya():
    y = 20  # Lokal o'zgaruvchi
    print(x)  # Globalni o'qishi mumkin: 10
    # print(y) - bu tashqarida xato beradi

funksiya()
print(x)  # 10
# print(y) - xato: y mavjud emas
```

Global o'zgaruvchini o'zgartirish uchun `global` keywordi:

```python
x = 10

def oshir():
    global x
    x += 1

oshir()
print(x)  # 11
```

## *args va **kwargs (Moslashuvchan Parametrlar)

Agar parametrlar soni noma'lum bo'lsa:

- `*args`: Tuple sifatida cheksiz argumentlarni qabul qiladi.
- `**kwargs`: Dictionary sifatida keyword argumentlarni qabul qiladi.

```python
def yigindi(*raqamlar):  # *args
    return sum(raqamlar)

print(yigindi(1, 2, 3))  # 6
print(yigindi(4, 5))     # 9
```

```python
def malumot(**info):  # **kwargs
    for kalit, qiymat in info.items():
        print(f"{kalit}: {qiymat}")

malumot(ism="Ali", yosh=25)  # Chiqish: ism: Ali \n yosh: 25
```

## Lambda Funksiyalari (Anonim Funksiyalar)

Lambda - qisqa, nomsiz funksiyalar. `lambda` keywordi bilan ta'riflanadi. Ko'pincha filter, map kabi funksiyalar bilan ishlatiladi.

Sintaksis: `lambda parametrlar: ifoda`

```python
kvadrat = lambda x: x ** 2
print(kvadrat(5))  # 25
```

Misol: Ro'yxatni saralash:

```python
odamlar = [("Ali", 25), ("Vali", 20), ("Olim", 30)]
saralangan = sorted(odamlar, key=lambda odam: odam[1])  # Yosh bo'yicha saralash
print(saralangan)  # [('Vali', 20), ('Ali', 25), ('Olim', 30)]
```

## Funksiyalar Ichida Funksiyalar (Nested Functions)

Funksiya ichida boshqa funksiya ta'riflash mumkin. Ichki funksiya faqat tashqi funksiya ichida mavjud.

```python
def tashqi():
    def ichki():
        print("Ichki funksiya")
    ichki()  # Ichki chaqiriladi

tashqi()  # Chiqish: Ichki funksiya
# ichki() - xato: mavjud emas
```

## Dekoratorlar (Decorators)

Dekoratorlar - funksiyani o'zgartiruvchi funksiyalar. `@` belgisi bilan ishlatiladi. Batafsilroq kurslarda o'rganiladi, lekin oddiy misol:

```python
def decorator(funk):
    def wrapper():
        print("Boshlanish")
        funk()
        print("Tugash")
    return wrapper

@decorator
def salom():
    print("Salom!")

salom()  
# Chiqish:
# Boshlanish
# Salom!
# Tugash
```

## Amaliy Masalalar va Maslahatlar

1. **Misol 1**: Foydalanuvchi ism va familiyasini qabul qilib, to'liq ismni qaytaruvchi funksiya yozing.

   ```python
   def toliq_ism(ism, familiya):
       return f"{ism} {familiya}"

   print(toliq_ism("Ali", "Valiyev"))  # Ali Valiyev
   ```

2. **Misol 2**: Ro'yxatdagi juft sonlarni topuvchi funksiya.

   ```python
   def juftlar(royxat):
       return [son for son in royxat if son % 2 == 0]

   print(juftlar([1, 2, 3, 4]))  # [2, 4]
   ```

Maslahatlar:
- Funksiya nomlari mazmunli bo'lsin (masalan, `qoshish` emas, `ikkita_sonni_qoshish`).
- Docstring qo'shing: Funksiya ta'rifidan keyin `"""Izoh"""` bilan izoh yozing.
- Xatolarni boshqarish uchun `try-except` ishlatish mumkin (keyingi mavzularda).
- Funksiyalarni modul sifatida saqlang va import qiling.

## Xulosa

Funksiyalar Python'da dasturlashning asosiy qismi. Ular bilan ishlagan holda, sizning kodingiz professionalroq bo'ladi. Har bir bo'limni o'zingiz sinab ko'ring va savollaringiz bo'lsa, qo'shimcha misollar so'rang!