# 🔄 Tsikllar (Loops)

Tsikllar - bu bir xil amalni bir necha marta takrorlash uchun ishlatiladigan dasturlash tuzilmalaridir. Python'da ikki asosiy tsikl turi mavjud: `for` va `while`.

## 🎯 Maqsadlar

Ushbu darsdan keyin siz:
- ✅ For va while tsikllarini bilasiz
- ✅ Range() funksiyasini ishlatishni o'rganasiz
- ✅ Break va continue operatorlarini qo'llashni bilasiz
- ✅ Nested loops (ichma-ich tsikllar) yozishni o'rganasiz

## 🔁 For Tsikli

### Asosiy Sintaksis
```python
# Oddiy for tsikli
for i in range(5):
    print(f"Bu {i+1}-marta takrorlanmoqda")

# Natija:
# Bu 1-marta takrorlanmoqda
# Bu 2-marta takrorlanmoqda
# Bu 3-marta takrorlanmoqda
# Bu 4-marta takrorlanmoqda
# Bu 5-marta takrorlanmoqda
```

### Range() Funksiyasi
```python
# range(stop) - 0 dan stop-1 gacha
for i in range(5):
    print(i, end=" ")  # 0 1 2 3 4

print()

# range(start, stop) - start dan stop-1 gacha
for i in range(2, 8):
    print(i, end=" ")  # 2 3 4 5 6 7

print()

# range(start, stop, step) - qadam bilan
for i in range(0, 10, 2):
    print(i, end=" ")  # 0 2 4 6 8

print()

# Teskari tartib
for i in range(10, 0, -1):
    print(i, end=" ")  # 10 9 8 7 6 5 4 3 2 1
```

### Listlar bilan For Tsikli
```python
# Mevalar ro'yxati
mevalar = ["olma", "banan", "uzum", "nok", "shaftoli"]

# Elementlarni chiqarish
print("Mevalar ro'yxati:")
for meva in mevalar:
    print(f"- {meva}")

# Index bilan ishlash
print("\nIndex bilan:")
for i in range(len(mevalar)):
    print(f"{i+1}. {mevalar[i]}")

# enumerate() funksiyasi - yaxshiroq usul
print("\nenumerate() bilan:")
for index, meva in enumerate(mevalar, 1):
    print(f"{index}. {meva}")
```

## ⏳ While Tsikli

### Asosiy Sintaksis
```python
# Oddiy while tsikli
son = 1
while son <= 5:
    print(f"Son: {son}")
    son += 1  # son = son + 1

print("Tsikl tugadi!")
```

### Foydalanuvchi Kiritishi bilan
```python
# Foydalanuvchi "chiqish" demaguncha davom etish
while True:
    javob = input("Ismingizni kiriting ('chiqish' yozing chiqish uchun): ")
    
    if javob.lower() == "chiqish":
        print("Xayr!")
        break
    else:
        print(f"Salom, {javob}!")
```

### Shartli While
```python
# Tasodifiy son topish o'yini
import random

yashirin_son = random.randint(1, 10)
taxmin = 0
urinishlar = 0

print("Men 1-10 orasida son o'yladim. Toping!")

while taxmin != yashirin_son:
    taxmin = int(input("Taxminingiz: "))
    urinishlar += 1
    
    if taxmin < yashirin_son:
        print("Kattaroq son!")
    elif taxmin > yashirin_son:
        print("Kichikroq son!")
    else:
        print(f"To'g'ri! {urinishlar} urinishda topdingiz!")
```

## ⚡ Break va Continue

### Break - Tsikldan Chiqish
```python
# Birinchi juft sonni topish
sonlar = [1, 3, 7, 8, 9, 12, 15]

print("Birinchi juft son:")
for son in sonlar:
    if son % 2 == 0:
        print(f"Topildi: {son}")
        break  # Tsikldan chiqish
    print(f"Tekshirildi: {son}")
```

### Continue - Keyingi Iteratsiyaga O'tish
```python
# Faqat toq sonlarni chiqarish
print("1 dan 10 gacha toq sonlar:")
for i in range(1, 11):
    if i % 2 == 0:  # Agar juft bo'lsa
        continue    # Keyingi iteratsiyaga o'tish
    print(i, end=" ")

print()
```

### Break va Continue Birgalikda
```python
# Menu tizimi
def menu_tizimi():
    while True:
        print("\n=== Menyu ===")
        print("1. Salom")
        print("2. Vaqt")
        print("3. Hesablash")
        print("4. Chiqish")
        
        tanlov = input("Tanlovingiz: ")
        
        if tanlov == "1":
            print("Salom, Python o'quvchisi!")
            
        elif tanlov == "2":
            import datetime
            hozir = datetime.datetime.now()
            print(f"Hozirgi vaqt: {hozir.strftime('%H:%M:%S')}")
            
        elif tanlov == "3":
            try:
                a = float(input("Birinchi son: "))
                b = float(input("Ikkinchi son: "))
                print(f"Yig'indi: {a + b}")
            except ValueError:
                print("❌ Noto'g'ri format!")
                continue  # Menyuga qaytish
                
        elif tanlov == "4":
            print("Dastur tugadi!")
            break  # Tsikldan chiqish
            
        else:
            print("❌ Noto'g'ri tanlov!")
            continue  # Menyuga qaytish

# menu_tizimi()
```

## 🪆 Nested Loops (Ichma-ich Tsikllar)

### Ko'paytirish Jadvalim 
```python
# Ko'paytirish jadvali
print("Ko'paytirish jadvali:")
print("-" * 40)

for i in range(1, 6):  # 1 dan 5 gacha
    for j in range(1, 6):  # 1 dan 5 gacha
        natija = i * j
        print(f"{natija:3}", end=" ")  # 3 ta joy egallash
    print()  # Qator tugagach yangi qator
```

### Yulduzchalar bilan Shakl
```python
# Uchburchak shakli
print("Uchburchak:")
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

print()

# Teskari uchburchak
print("Teskari uchburchak:")
for i in range(5, 0, -1):
    for j in range(i):
        print("*", end="")
    print()

print()

# Romb shakli
print("Romb:")
n = 5
# Yuqori qism
for i in range(n):
    # Bo'shliqlar
    for j in range(n - i - 1):
        print(" ", end="")
    # Yulduzchalar
    for j in range(2 * i + 1):
        print("*", end="")
    print()

# Pastki qism
for i in range(n - 2, -1, -1):
    # Bo'shliqlar
    for j in range(n - i - 1):
        print(" ", end="")
    # Yulduzchalar
    for j in range(2 * i + 1):
        print("*", end="")
    print()
```

### Matritsalar bilan Ishlash
```python
# 3x3 matritsa yaratish
print("3x3 Matritsa:")
matritsa = []

for i in range(3):
    qator = []
    for j in range(3):
        qiymat = i * 3 + j + 1  # 1 dan 9 gacha
        qator.append(qiymat)
    matritsa.append(qator)

# Matritsani chiqarish
for qator in matritsa:
    for element in qator:
        print(f"{element:3}", end=" ")
    print()

# Yoki qisqaroq:
print("\nQisqa usul:")
for i in range(3):
    for j in range(3):
        print(f"{matritsa[i][j]:3}", end=" ")
    print()
```

## 🎯 Amaliy Misollar

### Misol 1: Faktorial Hisoblash
```python
def faktorial(n):
    """n! ni hisoblaydi"""
    if n < 0:
        return "Manfiy sonning faktoriali yo'q"
    
    natija = 1
    for i in range(1, n + 1):
        natija *= i
        print(f"{i}! = {natija}")
    
    return natija

# Test
son = int(input("Faktorial hisoblamoqchi bo'lgan son: "))
print(f"\nYakuniy natija: {son}! = {faktorial(son)}")
```

### Misol 2: Fibonacci Ketma-ketligi
```python
def fibonacci(n):
    """Birinchi n ta fibonacci sonini qaytaradi"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    fib_list = [0, 1]
    
    for i in range(2, n):
        keyingi = fib_list[i-1] + fib_list[i-2]
        fib_list.append(keyingi)
    
    return fib_list

# Test
nechta = int(input("Nechta Fibonacci soni kerak? "))
fibonacci_sonlar = fibonacci(nechta)

print(f"Birinchi {nechta} ta Fibonacci soni:")
for i, son in enumerate(fibonacci_sonlar):
    print(f"F({i}) = {son}")
```

### Misol 3: Tub Sonlar Topuvchi
```python
def tub_son_mi(n):
    """Sonning tub ekanligini tekshiradi"""
    if n < 2:
        return False
    
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def tub_sonlar_topish(start, end):
    """Berilgan oraliqda tub sonlarni topadi"""
    tub_sonlar = []
    
    for son in range(start, end + 1):
        if tub_son_mi(son):
            tub_sonlar.append(son)
    
    return tub_sonlar

# Test
boshi = int(input("Boshlang'ich son: "))
oxiri = int(input("Oxirgi son: "))

tub_sonlar = tub_sonlar_topish(boshi, oxiri)

print(f"\n{boshi} dan {oxiri} gacha tub sonlar:")
print(f"Jami: {len(tub_sonlar)} ta")

# Qatorlar bo'yicha chiqarish
for i, son in enumerate(tub_sonlar):
    print(f"{son:4}", end=" ")
    if (i + 1) % 10 == 0:  # Har 10 tadan keyin yangi qator
        print()

if len(tub_sonlar) % 10 != 0:
    print()  # Oxirgi qator uchun
```

### Misol 4: Parol Kuchini Tekshiruvchi
```python
def parol_kuchini_tekshir(parol):
    """Parol kuchini baholaydi"""
    
    # Kriteriyalar
    uzunlik_yetarli = len(parol) >= 8
    katta_harf_bor = False
    kichik_harf_bor = False
    raqam_bor = False
    maxsus_belgi_bor = False
    
    maxsus_belgilar = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    
    # Har bir belgini tekshirish
    for belgi in parol:
        if belgi.isupper():
            katta_harf_bor = True
        elif belgi.islower():
            kichik_harf_bor = True
        elif belgi.isdigit():
            raqam_bor = True
        elif belgi in maxsus_belgilar:
            maxsus_belgi_bor = True
    
    # Ball hisoblash
    ball = 0
    ball += uzunlik_yetarli * 2  # Uzunlik eng muhim
    ball += katta_harf_bor
    ball += kichik_harf_bor
    ball += raqam_bor
    ball += maxsus_belgi_bor
    
    # Natija
    print(f"Parol tahlili: '{parol}'")
    print(f"Uzunlik yetarli (8+): {'✅' if uzunlik_yetarli else '❌'}")
    print(f"Katta harf bor: {'✅' if katta_harf_bor else '❌'}")
    print(f"Kichik harf bor: {'✅' if kichik_harf_bor else '❌'}")
    print(f"Raqam bor: {'✅' if raqam_bor else '❌'}")
    print(f"Maxsus belgi bor: {'✅' if maxsus_belgi_bor else '❌'}")
    
    if ball >= 5:
        return "🟢 Kuchli parol"
    elif ball >= 3:
        return "🟡 O'rtacha parol"
    else:
        return "🔴 Zaif parol"

# Test
while True:
    parol = input("\nParol kiriting (yoki 'chiqish'): ")
    if parol.lower() == 'chiqish':
        break
    
    kuch = parol_kuchini_tekshir(parol)
    print(f"Natija: {kuch}\n" + "-"*40)
```

## 🎮 Tsikllar bilan O'yinlar

### O'yin 1: Son Topish
```python
import random

def son_topish_oyini():
    print("=== Son Topish O'yini ===")
    
    # Qiyinlik darajasini tanlash
    print("Qiyinlik darajasini tanlang:")
    print("1. Oson (1-50, 10 urinish)")
    print("2. O'rta (1-100, 7 urinish)")
    print("3. Qiyin (1-200, 5 urinish)")
    
    while True:
        tanlov = input("Tanlovingiz (1-3): ")
        
        if tanlov == "1":
            max_son, max_urinish = 50, 10
            break
        elif tanlov == "2":
            max_son, max_urinish = 100, 7
            break
        elif tanlov == "3":
            max_son, max_urinish = 200, 5
            break
        else:
            print("❌ 1, 2 yoki 3 ni tanlang!")
    
    yashirin_son = random.randint(1, max_son)
    urinishlar = 0
    
    print(f"\nMen 1 dan {max_son} gacha son o'yladim.")
    print(f"Sizda {max_urinish} ta urinish bor!")
    
    while urinishlar < max_urinish:
        try:
            taxmin = int(input(f"\nTaxminingiz ({max_urinish - urinishlar} urinish qoldi): "))
            urinishlar += 1
            
            if taxmin == yashirin_son:
                print(f"🎉 Tabriklayman! {urinishlar} urinishda topdingiz!")
                print(f"O'ylangan son: {yashirin_son}")
                return True
            elif taxmin < yashirin_son:
                print("📈 Kattaroq son!")
            else:
                print("📉 Kichikroq son!")
                
        except ValueError:
            print("❌ Faqat son kiriting!")
            urinishlar -= 1  # Noto'g'ri kiritish uchun urinish kamaytirmaydi
    
    print(f"\n😔 Urinishlar tugadi! O'ylangan son: {yashirin_son}")
    return False

# O'yinni bir necha marta o'ynash
def ko_p_marta_o_ynash():
    g_alaba = 0
    o_yinlar = 0
    
    while True:
        o_yinlar += 1
        print(f"\n{'='*20} {o_yinlar}-O'yin {'='*20}")
        
        if son_topish_oyini():
            g_alaba += 1
        
        print(f"\nStatistika: {g_alaba}/{o_yinlar} g'alaba")
        
        yana = input("\nYana o'ynaysizmi? (ha/yo'q): ").lower()
        if yana not in ['ha', 'y', 'yes']:
            break
    
    print(f"\nYakuniy natija: {g_alaba}/{o_yinlar} o'yin yutdingiz!")
    print("Rahmat o'ynganingiz uchun! 🎮")

# ko_p_marta_o_ynash()
```

## 📊 Performance va Optimizatsiya

### Tsikl Samaradorligi
```python
import time

# Yomon usul - list ichida qidirish
def yomon_usul(n):
    sonlar = list(range(n))
    topilgan = []
    
    start_time = time.time()
    
    for i in range(n):
        if i in sonlar:  # Bu O(n) vaqt oladi
            topilgan.append(i)
    
    end_time = time.time()
    return end_time - start_time

# Yaxshi usul - set ishlatish
def yaxshi_usul(n):
    sonlar = set(range(n))  # Set - O(1) qidiruv
    topilgan = []
    
    start_time = time.time()
    
    for i in range(n):
        if i in sonlar:  # Bu O(1) vaqt oladi
            topilgan.append(i)
    
    end_time = time.time()
    return end_time - start_time

# Test
n = 10000
yomon_vaqt = yomon_usul(n)
yaxshi_vaqt = yaxshi_usul(n)

print(f"List bilan: {yomon_vaqt:.4f} sekund")
print(f"Set bilan: {yaxshi_vaqt:.4f} sekund")
print(f"Tezlik farqi: {yomon_vaqt/yaxshi_vaqt:.1f} marta")
```

## 📝 Xulosa

Bu darsda o'rgandik:
- ✅ For va while tsiklari
- ✅ Range() funksiyasi
- ✅ Break va continue operatorlari
- ✅ Nested loops
- ✅ Amaliy misollar va o'yinlar

## 🎯 Keyingi Dars

Keyingi darsda **Funksiyalar** haqida o'rganamiz:
- Funksiya yaratish va chaqirish
- Parametrlar va argumentlar
- Return qiymati
- Lambda funksiyalar

---

**Maslahat**: Tsikllar bilan ishlaganda har doim infinite loop (cheksiz tsikl)dan saqlaning!