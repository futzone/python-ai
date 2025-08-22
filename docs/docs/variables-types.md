# 📊 O'zgaruvchilar va Ma'lumot Turlari

O'zgaruvchilar - bu ma'lumotlarni saqlash uchun ishlatiladigan konteynerlardir. Python'da turli xil ma'lumot turlari mavjud.

## 🎯 Maqsadlar

Ushbu darsdan keyin siz:
- ✅ Turli ma'lumot turlarini bilasiz
- ✅ O'zgaruvchilarni to'g'ri nomlashni o'rganasiz
- ✅ Type conversion qilishni bilasiz
- ✅ Ma'lumot turini tekshirishni o'rganasiz

## 📝 O'zgaruvchi Nomlash Qoidalari

### ✅ To'g'ri Nomlar
```python
# Harflar bilan boshlash
ism = "Ali"
yosh = 25

# Pastki chiziq bilan
ism_familiya = "Ali Karimov"
max_ball = 100

# Raqamlar (lekin boshida emas)
student1 = "Fatima"
kurs2 = "Python"

# CamelCase (odatda klasslar uchun)
TalabaIsmi = "Muhammad"
```

### ❌ Noto'g'ri Nomlar
```python
# Raqam bilan boshlash - XATO!
# 1ism = "Ali"

# Bo'sh joy - XATO!
# ism familiya = "Ali Karimov"

# Maxsus belgilar - XATO!
# ism-familiya = "Ali"
# ism@email = "test"
```

## 🔢 Sonlar (Numbers)

### Butun Sonlar (int)
```python
# Musbat sonlar
yosh = 25
ball = 95

# Manfiy sonlar
harorat = -10
qarz = -1000

# Katta sonlar
aholi_soni = 35000000
yorug_lik_tezligi = 299792458

print(type(yosh))  # <class 'int'>
```

### O'nlik Sonlar (float)
```python
# Oddiy o'nlik sonlar
pi = 3.14159
narx = 15.99

# Ilmiy yozuv
katta_son = 1.5e6      # 1500000.0
kichik_son = 1.5e-3    # 0.0015

print(type(pi))  # <class 'float'>
```

### Murakkab Sonlar (complex)
```python
# Murakkab sonlar
z1 = 3 + 4j
z2 = complex(5, -2)

print(z1.real)  # 3.0
print(z1.imag)  # 4.0
```

## 📝 Matnlar (Strings)

### Asosiy String Operatsiyalari
```python
# String yaratish
ism = "Aziza"
familiya = 'Karimova'
manzil = """Toshkent shahri,
Mirobod tumani,
Navoi ko'chasi"""

# String birlashtirish
to_liq_ism = ism + " " + familiya
print(to_liq_ism)  # Aziza Karimova

# String takrorlash
chiziq = "-" * 20
print(chiziq)  # --------------------
```

### String Metodlari
```python
matn = "Python Dasturlash"

# Katta va kichik harflar
print(matn.upper())      # PYTHON DASTURLASH
print(matn.lower())      # python dasturlash
print(matn.title())      # Python Dasturlash
print(matn.capitalize()) # Python dasturlash

# Bo'shliqlarni tozalash
matn_bosh = "  Salom Dunyo  "
print(matn_bosh.strip())  # "Salom Dunyo"

# Qidiruv
print(matn.find("Python"))    # 0
print(matn.count("a"))        # 3
print("Python" in matn)       # True

# Almashtirish
yangi_matn = matn.replace("Python", "Java")
print(yangi_matn)  # Java Dasturlash
```

### String Formatlash
```python
ism = "Ahmad"
yosh = 28
ball = 95.5

# f-string (tavsiya etiladi)
xabar1 = f"Mening ismim {ism}, {yosh} yoshdaman"
xabar2 = f"Balling: {ball:.1f}%"

# format() metodi
xabar3 = "Ism: {}, Yosh: {}".format(ism, yosh)

# % formatting (eski usul)
xabar4 = "Ism: %s, Yosh: %d" % (ism, yosh)

print(xabar1)  # Mening ismim Ahmad, 28 yoshdaman
print(xabar2)  # Balling: 95.5%
```

## ✅ Mantiqiy Qiymatlar (Boolean)

```python
# Boolean qiymatlar
rost = True
yolg_on = False

# Boolean operatsiyalar
natija1 = True and False   # False
natija2 = True or False    # True
natija3 = not True         # False

# Taqqoslash natijasi boolean
yosh = 18
katta_yosh_mi = yosh >= 18  # True

# Truthy va Falsy qiymatlar
print(bool(0))         # False
print(bool(""))        # False
print(bool([]))        # False
print(bool(None))      # False

print(bool(1))         # True
print(bool("Salom"))   # True
print(bool([1, 2]))    # True
```

## 🔄 Ma'lumot Turini O'zgartirish

### String dan Songa
```python
# String dan int ga
yosh_str = "25"
yosh_int = int(yosh_str)
print(type(yosh_int))  # <class 'int'>

# String dan float ga
narx_str = "15.99"
narx_float = float(narx_str)
print(type(narx_float))  # <class 'float'>

# Xato holat
try:
    noto_g_ri = int("abc")  # ValueError!
except ValueError:
    print("String ni songa aylantrib bo'lmadi!")
```

### Son dan String ga
```python
son = 42
son_str = str(son)
print(type(son_str))  # <class 'str'>

# Formatlanган string
ball = 95.67
ball_str = f"{ball:.1f}%"
print(ball_str)  # "95.7%"
```

### Boolean Konversiya
```python
print(bool(1))      # True
print(bool(0))      # False
print(bool(-1))     # True
print(bool(""))     # False
print(bool("Hi"))   # True
```

## 🔍 Ma'lumot Turini Tekshirish

```python
# type() funksiyasi
son = 42
print(type(son))           # <class 'int'>
print(type(son).__name__)  # int

# isinstance() funksiyasi
print(isinstance(son, int))     # True
print(isinstance(son, str))     # False

# Bir necha tur bilan tekshirish
matn = "Salom"
print(isinstance(matn, (int, str, float)))  # True
```

## 💡 Amaliy Misollar

### Misol 1: Ma'lumot Turi Analizatori
```python
def tur_aniqlash(qiymat):
    """Qiymatning turini aniqlaydi va ma'lumot beradi"""
    tur = type(qiymat).__name__
    
    if isinstance(qiymat, bool):
        return f"'{qiymat}' - Boolean (Mantiqiy qiymat)"
    elif isinstance(qiymat, int):
        return f"'{qiymat}' - Integer (Butun son)"
    elif isinstance(qiymat, float):
        return f"'{qiymat}' - Float (O'nlik son)"
    elif isinstance(qiymat, str):
        return f"'{qiymat}' - String (Matn), uzunligi: {len(qiymat)}"
    else:
        return f"'{qiymat}' - {tur}"

# Test
test_qiymatlar = [42, 3.14, "Salom", True, None]
for qiymat in test_qiymatlar:
    print(tur_aniqlash(qiymat))
```

### Misol 2: Smart Calculator
```python
def smart_calculator():
    """Aqlli kalkulyator - turli formatdagi ma'lumotlarni qabul qiladi"""
    
    print("=== Aqlli Kalkulyator ===")
    
    # Birinchi son
    son1_str = input("Birinchi sonni kiriting: ")
    try:
        if '.' in son1_str:
            son1 = float(son1_str)
        else:
            son1 = int(son1_str)
    except ValueError:
        print("Noto'g'ri format!")
        return
    
    # Ikkinchi son
    son2_str = input("Ikkinchi sonni kiriting: ")
    try:
        if '.' in son2_str:
            son2 = float(son2_str)
        else:
            son2 = int(son2_str)
    except ValueError:
        print("Noto'g'ri format!")
        return
    
    # Natijalar
    print(f"\nNatijalar:")
    print(f"{son1} + {son2} = {son1 + son2}")
    print(f"{son1} - {son2} = {son1 - son2}")
    print(f"{son1} * {son2} = {son1 * son2}")
    
    if son2 != 0:
        print(f"{son1} / {son2} = {son1 / son2}")
    else:
        print("Nolga bo'lish mumkin emas!")

# Ishga tushirish
# smart_calculator()
```

### Misol 3: Ma'lumot Validator
```python
def malumot_tekshirish():
    """Foydalanuvchi ma'lumotlarini tekshiradi"""
    
    print("=== Ma'lumot Tekshirish ===")
    
    # Ism
    while True:
        ism = input("Ismingizni kiriting: ").strip()
        if ism and ism.isalpha():
            break
        print("Ism faqat harflardan iborat bo'lishi kerak!")
    
    # Yosh
    while True:
        yosh_str = input("Yoshingizni kiriting: ").strip()
        try:
            yosh = int(yosh_str)
            if 0 < yosh < 120:
                break
            else:
                print("Yosh 1-120 orasida bo'lishi kerak!")
        except ValueError:
            print("Yosh son bo'lishi kerak!")
    
    # Email
    while True:
        email = input("Email manzilingizni kiriting: ").strip()
        if '@' in email and '.' in email:
            break
        print("To'g'ri email formatini kiriting!")
    
    # Natija
    print(f"\n--- Tasdiqlangan Ma'lumotlar ---")
    print(f"Ism: {ism} ({type(ism).__name__})")
    print(f"Yosh: {yosh} ({type(yosh).__name__})")
    print(f"Email: {email} ({type(email).__name__})")

# Ishga tushirish
# malumot_tekshirish()
```

## 📋 Xulosa

Bu darsda o'rgandik:
- ✅ Turli ma'lumot turlari: int, float, string, boolean
- ✅ O'zgaruvchi nomlash qoidalari
- ✅ String bilan ishlash metodlari
- ✅ Ma'lumot turini o'zgartirish
- ✅ Type checking va validation

## 🎯 Keyingi Dars

Keyingi darsda **Operatorlar** haqida o'rganamiz:
- Arifmetik operatorlar
- Taqqoslash operatorlari
- Mantiqiy operatorlar
- Assignment operatorlar

---

**Eslatma**: Kod yozishda doimo o'zgaruvchilaringizga ma'noli nomlar bering va to'g'ri ma'lumot turini tanlang!