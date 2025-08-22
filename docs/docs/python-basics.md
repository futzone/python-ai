# 🐍 Python Dasturlash Tiliga Kirish

Xush kelibsiz! Bu qo'llanma sizni Python dasturlash olamiga olib kiradi. Bu yerda siz noldan boshlab, dasturlashning eng asosiy tushunchalarini o'rganasiz, o'z birinchi dasturlaringizni yozasiz va mustaqil ravishda kichik loyihalar yaratish darajasiga chiqasiz. Olg'a!

## 1-Qism: Nima Uchun Python va Ishga Tushirish

### Python Nima?

**Python** — bu yuqori darajali, o'qilishi oson va juda kuchli dasturlash tili. Uning sodda sintaksisi (yozish qoidalari) ingliz tiliga yaqin bo'lgani uchun uni o'rganish boshqa tillarga qaraganda ancha oson.

**Nima uchun bunchalik mashhur?**
*   **Oson o'rganish**: Yangi boshlovchilar uchun eng yaxshi tanlov.
*   **Ko'p qirrali**: Veb-saytlar, sun'iy intellekt, ma'lumotlar tahlili, o'yinlar, avtomatlashtirish va boshqa ko'plab sohalarda qo'llaniladi.
*   **Katta hamjamiyat**: Muammoga duch kelsangiz, internetda yordam topish juda oson.
*   **Katta kutubxonalar to'plami**: Boshqalar tomonidan yozilgan tayyor kodlar (kutubxonalar) yordamida murakkab vazifalarni oson hal qilish mumkin (masalan, `Numpy`, `Pandas`, `TensorFlow`).

### Ishchi Muhitni Sozlash

1.  **Python'ni o'rnatish**: [python.org](https://www.python.org/downloads/) rasmiy saytidan eng so'nggi versiyani yuklab oling. O'rnatish paytida **"Add Python to PATH"** degan katakchani belgilashni unutmang!
2.  **Kod muharririni (Code Editor) o'rnatish**: Dastlabki kodlaringizni bloknotda ham yozsangiz bo'ladi, lekin maxsus muharrirlar ishingizni ancha osonlashtiradi. Eng mashhuri — **Visual Studio Code** ([code.visualstudio.com](https://code.visualstudio.com/)). Uni o'rnating va `Python` nomli kengaytmani (extension) o'rnating.

### Birinchi Dastur: "Salom, Dunyo!"

Har bir dasturchi o'z sayohatini shu dasturdan boshlaydi. `salom.py` nomli fayl yarating va uning ichiga quyidagi bir qator kodni yozing:

```python
print("Salom, Dunyo!")
```

Endi terminalda (VS Code ichidagi terminalda) quyidagi buyruqni yozib, dasturni ishga tushiring:
`python salom.py`

Ekranda `Salom, Dunyo!` yozuvi paydo bo'lsa, tabriklayman, siz birinchi dasturingizni yozdingiz!

## 2-Qism: Python Asoslari

### O'zgaruvchilar va Ma'lumot Turlari

**O'zgaruvchi** — bu ma'lumotni saqlash uchun mo'ljallangan "nomlangan quti".

```python
ism = "Anvar"  # O'zgaruvchiga nom berdik va unga "Anvar" qiymatini joyladik
yosh = 25      # yosh nomli o'zgaruvchiga 25 sonini joyladik
```

Asosiy ma'lumot turlari:
*   **String (`str`)**: Matnli ma'lumotlar. Qo'shtirnoq (`"..."`) yoki birtirnoq (`'...'`) ichida yoziladi. Masalan, `"Salom"`.
*   **Integer (`int`)**: Butun sonlar. Masalan, `10`, `-50`.
*   **Float (`float`)**: O'nlik kasr sonlar. Masalan, `3.14`, `99.9`.
*   **Boolean (`bool`)**: Mantiqiy qiymatlar. Faqat ikkita qiymat qabul qiladi: `True` (rost) va `False` (yolg'on).

```python
matn = "Python"
son = 10
kasr_son = 4.5
rostmi = True

# type() funksiyasi o'zgaruvchining turini ko'rsatadi
print(type(matn))      # <class 'str'>
print(type(son))       # <class 'int'>
print(type(kasr_son))  # <class 'float'>
print(type(rostmi))    # <class 'bool'>
```

### Foydalanuvchidan Ma'lumot Olish

`input()` funksiyasi yordamida foydalanuvchidan ma'lumot kiritishni so'rash mumkin.

**Diqqat!** `input()` har doim matn (`str`) qaytaradi. Agar son bilan ishlash kerak bo'lsa, uni songa o'girish (`int()` yoki `float()`) kerak.

```python
ism = input("Ismingizni kiriting: ")
yosh_str = input("Yoshingizni kiriting: ")
yosh_int = int(yosh_str) # Matnni butun songa o'giramiz

print(f"Salom, {ism}! Siz {yosh_int} yoshdasiz.")
print(f"Siz 10 yildan keyin {yosh_int + 10} yoshda bo'lasiz.")
```

### Shart Operatorlari: `if`, `elif`, `else`

Bu operatorlar dastur oqimini ma'lum bir shartga qarab boshqarish imkonini beradi.

**Muhim!** Pythonda bloklar (masalan, `if` ning ichidagi kod) bo'sh joy (**indentation** yoki otstup) orqali ajratiladi. Odatda bu 4 ta probelga teng.

```python
yosh = int(input("Yoshingizni kiriting: "))

if yosh < 18:
    print("Siz kinoga kira olmaysiz.")
elif yosh >= 18 and yosh < 60: # and - "va" degani, ikkala shart ham rost bo'lishi kerak
    print("Marhamat, chiptangiz 10000 so'm.")
else: # Yuqoridagi shartlarning hech biri bajarilmasa
    print("Siz uchun 50% chegirma bor.")
```

### Sikllar: `for` va `while`

Sikllar biror amalni qayta-qayta bajarish uchun ishlatiladi.

#### `for` Sikli
`for` sikli biror to'plamdagi har bir element uchun takrorlanadi. `range()` funksiyasi bilan birga ko'p ishlatiladi.

```python
# 1 dan 5 gacha sonlarni chiqarish (6 kirmaydi)
for son in range(1, 6):
    print(son)

mevalar = ["olma", "anor", "banan"]
for meva in mevalar:
    print(meva.capitalize()) # Har bir mevani bosh harf bilan chiqaradi
```

#### `while` Sikli
`while` sikli ma'lum bir shart `True` bo'lib turgan muddat davomida ishlaydi.

**Diqqat!** `while` siklida shartni o'zgartiradigan qator bo'lishi shart, aks holda cheksiz sikl yuzaga keladi va dastur qotib qoladi.

```python
son = 1
while son <= 5:
    print(son)
    son = son + 1  # Yoki qisqacha: son += 1

print("Sikl tugadi.")
```

### Funksiyalar

**Funksiya** — bu ma'lum bir vazifani bajarish uchun mo'ljallangan, nomlangan kod bloki. Ular kodni qayta ishlatish (DRY - Don't Repeat Yourself) va tartibga solish uchun juda muhim.

*   `def` kalit so'zi yordamida yaratiladi.
*   Parametrlar (argumentlar) qabul qilishi mumkin.
*   `return` kalit so'zi yordamida qiymat qaytarishi mumkin.

```python
# Oddiy funksiya
def salom_ber():
    print("Assalomu alaykum!")

# Parametr oladigan funksiya
def ism_bilan_salom_ber(ism):
    print(f"Assalomu alaykum, {ism}!")

# Qiymat qaytaradigan funksiya
def yigindi(a, b):
    return a + b

# Funksiyalarni chaqirish
salom_ber()
ism_bilan_salom_ber("Ali")

natija = yigindi(10, 20)
print(f"10 va 20 ning yig'indisi: {natija}")
```

## 3-Qism: Ma'lumot Tuzilmalari

### Ro'yxatlar (`list`)
Ro'yxat — bu o'zgaruvchan, tartiblangan elementlar to'plami. Kvadrat qavs `[]` yordamida yaratiladi.

```python
mevalar = ["olma", "banan", "gilos"]
print(mevalar[0])  # Birinchi element (indekslar 0 dan boshlanadi) -> 'olma'

mevalar.append("anor") # Ro'yxat oxiriga element qo'shish
print(mevalar)     # ['olma', 'banan', 'gilos', 'anor']

mevalar[1] = "shaftoli" # Elementni o'zgartirish
print(mevalar)     # ['olma', 'shaftoli', 'gilos', 'anor']

mevalar.pop() # Oxirgi elementni o'chirish
print(mevalar) # ['olma', 'shaftoli', 'gilos']
```

### Lug'atlar (`dict`)
Lug'at — bu `{kalit: qiymat}` juftliklaridan iborat to'plam. Har bir kalit unikal bo'lishi kerak. Jingalak qavs `{}` yordamida yaratiladi.

```python
talaba = {
    "ism": "Vali",
    "yosh": 20,
    "fakultet": "Kompyuter injiniringi"
}

# Qiymatni kalit orqali olish
print(talaba["ism"]) # -> 'Vali'

# Yangi juftlik qo'shish
talaba["kurs"] = 3
print(talaba)

# Qiymatni o'zgartirish
talaba["yosh"] = 21
print(talaba["yosh"])
```

### Boshqa ma'lumot tuzilmalari

*   **Tuple (`tuple`)**: Ro'yxatga o'xshaydi, lekin o'zgarmas (immutable). Yaratilgandan keyin elementlarini o'zgartirib bo'lmaydi. Oddiy qavs `()` yordamida yaratiladi. `(1, 2, 3)`
*   **Set (`set`)**: Faqat unikal (takrorlanmaydigan) elementlardan iborat tartiblanmagan to'plam. `set()` funksiyasi yoki `{1, 2, 3}` yordamida yaratiladi. Ro'yxatdan takrorlanuvchi elementlarni olib tashlash uchun juda qulay.

## 4-Qism: Fayllar Bilan Ishlash

Siz dasturda yaratilgan ma'lumotlarni faylga yozib qo'yishingiz va keyinroq ularni qayta o'qib olishingiz mumkin.

**Eng yaxshi usul `with` operatoridan foydalanish**, chunki u faylni ish tugagach avtomatik yopadi.

```python
# 1. Faylga yozish ('w' - write rejimi, fayl mavjud bo'lmasa, yaratadi)
with open("mening_faylim.txt", "w") as fayl:
    fayl.write("Bu mening birinchi yozuvim.\n")
    fayl.write("Python - bu ajoyib til!\n")

# 2. Fayldan o'qish ('r' - read rejimi)
with open("mening_faylim.txt", "r") as fayl:
    matn = fayl.read()
    print("Fayl ichidagi ma'lumot:")
    print(matn)

# 3. Fayl oxiriga qo'shish ('a' - append rejimi)
with open("mening_faylim.txt", "a") as fayl:
    fayl.write("Bu yangi qo'shilgan qator.\n")
```

## 5-Qism: Kichik Loyihalar Bilan Mustahkamlash

Nazariyani mustahkamlashning eng yaxshi yo'li — amaliyot!

### Loyiha 1: Oddiy Kalkulyator
Foydalanuvchidan ikkita son va amalni (`+`, `-`, `*`, `/`) so'rab, natijani hisoblaydigan dastur.

```python
# YECHIM UCHUN YO'NALISH
# 1. input() orqali birinchi sonni oling va float() ga o'tkazing.
# 2. input() orqali amalni oling.
# 3. input() orqali ikkinchi sonni oling va float() ga o'tkazing.
# 4. if/elif/else yordamida amalni tekshiring:
#    - agar amal '+' bo'lsa, qo'shing.
#    - agar amal '-' bo'lsa, ayiring.
#    - va hokazo...
# 5. Natijani print() qiling.
# 6. Agar 0 ga bo'lishga harakat qilinsa, xatolik haqida xabar bering.
```

### Loyiha 2: "Son Topish" O'yini
Kompyuter 1 dan 50 gacha tasodifiy son o'ylaydi, siz esa uni topishga harakat qilasiz.

```python
# YECHIM UCHUN YO'NALISH
import random # Tasodifiy sonlar uchun modul

tasodifiy_son = random.randint(1, 50)
print("Men 1 dan 50 gacha son o'yladim. Uni topa olasizmi?")

while True:
    taxmin = int(input("Taxminingizni kiriting: "))
    
    if taxmin < tasodifiy_son:
        print("Men o'ylagan son bundan kattaroq.")
    elif taxmin > tasodifiy_son:
        print("Men o'ylagan son bundan kichikroq.")
    else:
        print("Tabriklayman, topdingiz!")
        break # Siklni to'xtatish
```

### Loyiha 3: Telefon Daftarchasi (Konsolda)
Kontaktlarni qo'shish, ko'rish va faylga saqlash imkonini beruvchi dastur. Bu loyiha lug'at, funksiya va fayllar bilan ishlashni birlashtiradi.

```python
# YECHIM UCHUN YO'NALISH
# 1. Kontaktlarni saqlash uchun bo'sh lug'at yarating. masalan, telefon_daftar = {}
# 2. while True: bilan cheksiz sikl yarating.
# 3. Foydalanuvchiga menyu chiqaring: 1-Qo'shish, 2-Ko'rish, 3-Chiqish.
# 4. input() orqali tanlovni oling.
# 5. if/elif/else yordamida tanlovni tekshiring:
#    - Agar '1' bo'lsa, ism va telefon raqamini so'rang va lug'atga qo'shing.
#    - Agar '2' bo'lsa, for sikli yordamida lug'atdagi barcha kontaktlarni chiqaring.
#    - Agar '3' bo'lsa, break bilan sikldan chiqing.
# 6. (Qo'shimcha) Dastur tugashidan oldin lug'atdagi ma'lumotlarni faylga saqlang
#    va dastur boshlanishida fayldan o'qib oling.
```
