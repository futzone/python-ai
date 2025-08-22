# 💻 Vazifalar va Amaliy Mashqlar

Bu bo'limda turli darajadagi vazifalar va loyihalar bilan tanishishingiz mumkin. Har bir vazifa sizning bilimingizni mustahkamlash va amaliy ko'nikmalar olish uchun mo'ljallangan.

## 🎯 Vazifalar Tuzulishi

Har bir vazifa quyidagi qismlardan iborat:
- **Vazifa tavsifi** - Nima qilish kerakligi
- **Kirish ma'lumotlari** - Qanday ma'lumotlar berilishi
- **Chiqish natijalari** - Qanday natija kutilishi
- **Maslahatlar** - Yechim uchun ko'rsatmalar
- **Namunaviy yechim** - To'liq kod yechimi

## 📊 Daraja Bo'yicha Vazifalar

### 🟢 Boshlang'ich Daraja
**Maqsad**: Python sintaksisi va asosiy tushunchalarni o'rganish

- ✅ **Python Asoslari** - 25 vazifa
- ✅ **O'zgaruvchilar** - 15 vazifa  
- ✅ **Operatorlar** - 20 vazifa
- ✅ **Shart operatorlari** - 18 vazifa
- ✅ **Tsikllar** - 22 vazifa

### 🟡 O'rta Daraja
**Maqsad**: Murakkab tuzilmalar va OOP ni o'rganish

- ✅ **Funksiyalar** - 20 vazifa
- ✅ **Listlar va Tuplelar** - 25 vazifa
- ✅ **Lug'atlar** - 18 vazifa
- ✅ **OOP** - 15 vazifa
- ✅ **Fayl bilan ishlash** - 12 vazifa

### 🔴 Ilg'or Daraja
**Maqsad**: Professional darajadagi dasturlash

- ✅ **Algoritmlar** - 30 vazifa
- ✅ **Ma'lumotlar Strukturasi** - 25 vazifa
- ✅ **Machine Learning** - 20 vazifa
- ✅ **Web Development** - 15 vazifa
- ✅ **API bilan ishlash** - 10 vazifa

## 🏆 Loyihalar

### 🎮 Mini Loyihalar (1-2 kun)
1. **Kalkulyator** - Asosiy matematik amallar
2. **Parol Generator** - Xavfsiz parol yaratuvchi
3. **To'do List** - Vazifalar ro'yxati
4. **Harorat Konvertori** - Harorat birliklari o'zgartirish
5. **Quiz O'yini** - Savollar va javoblar

### 🚀 Katta Loyihalar (1-2 hafta)
1. **Kutubxona Tizimi** - Kitoblarni boshqarish
2. **Onlayn Magazin** - E-commerce platformasi
3. **Chat Bot** - AI yordamchisi
4. **Ma'lumot Tahlili** - Data Science loyihasi
5. **Web Scraper** - Veb-saytlardan ma'lumot yig'ish

---

## 🟢 Boshlang'ich Vazifalar

### Vazifa #1: Salom Dunyo!
**Daraja**: Juda oson  
**Vaqt**: 5 daqiqa

**Tavsif**: 
Foydalanuvchidan ismini so'rang va unga salomlashing.

**Kirish**:
```
Ismingizni kiriting: Ali
```

**Chiqish**:
```
Salom, Ali! Python dunyosiga xush kelibsiz!
```

**Yechim**:
```python
ism = input("Ismingizni kiriting: ")
print(f"Salom, {ism}! Python dunyosiga xush kelibsiz!")
```

---

### Vazifa #2: Yosh Hisoblagichi
**Daraja**: Oson  
**Vaqt**: 10 daqiqa

**Tavsif**: 
Foydalanuvchining tug'ilgan yilini kiritib, uni necha yoshligini aniqlang.

**Kirish**:
```
Tug'ilgan yilingizni kiriting: 1995
```

**Chiqish**:
```
Siz 2024 yilda 29 yoshdasiz
```

**Maslahat**: Joriy yilni 2024 deb hisoblang.

**Yechim**:
```python
tugulgan_yil = int(input("Tug'ilgan yilingizni kiriting: "))
joriy_yil = 2024
yosh = joriy_yil - tugulgan_yil

print(f"Siz {joriy_yil} yilda {yosh} yoshdasiz")
```

---

### Vazifa #3: Oddiy Kalkulyator
**Daraja**: Oson  
**Vaqt**: 15 daqiqa

**Tavsif**: 
Ikki son va amal belgisini kiritib, natijani hisoblang.

**Kirish**:
```
Birinchi sonni kiriting: 10
Ikkinchi sonni kiriting: 5
Amalni kiriting (+, -, *, /): +
```

**Chiqish**:
```
10 + 5 = 15
```

**Yechim**:
```python
son1 = float(input("Birinchi sonni kiriting: "))
son2 = float(input("Ikkinchi sonni kiriting: "))
amal = input("Amalni kiriting (+, -, *, /): ")

if amal == '+':
    natija = son1 + son2
elif amal == '-':
    natija = son1 - son2
elif amal == '*':
    natija = son1 * son2
elif amal == '/':
    if son2 != 0:
        natija = son1 / son2
    else:
        print("Nolga bo'lish mumkin emas!")
        exit()
else:
    print("Noto'g'ri amal!")
    exit()

print(f"{son1} {amal} {son2} = {natija}")
```

---

### Vazifa #4: Juft yoki Toq
**Daraja**: Oson  
**Vaqt**: 8 daqiqa

**Tavsif**: 
Kiritilgan son juft yoki toqligini aniqlang.

**Kirish**:
```
Sonni kiriting: 7
```

**Chiqish**:
```
7 - toq son
```

**Yechim**:
```python
son = int(input("Sonni kiriting: "))

if son % 2 == 0:
    print(f"{son} - juft son")
else:
    print(f"{son} - toq son")
```

---

### Vazifa #5: Eng Katta Son
**Daraja**: Oson  
**Vaqt**: 12 daqiqa

**Tavsif**: 
Uchta son ichidan eng kattasini toping.

**Kirish**:
```
Birinchi son: 15
Ikkinchi son: 8
Uchinchi son: 23
```

**Chiqish**:
```
Eng katta son: 23
```

**Yechim**:
```python
son1 = int(input("Birinchi son: "))
son2 = int(input("Ikkinchi son: "))
son3 = int(input("Uchinchi son: "))

eng_katta = max(son1, son2, son3)
print(f"Eng katta son: {eng_katta}")

# Yoki if-elif bilan:
# if son1 >= son2 and son1 >= son3:
#     eng_katta = son1
# elif son2 >= son1 and son2 >= son3:
#     eng_katta = son2
# else:
#     eng_katta = son3
```

---

## 🟡 O'rta Daraja Vazifalar

### Vazifa #10: Palindrom Tekshiruvchi
**Daraja**: O'rta  
**Vaqt**: 20 daqiqa

**Tavsif**: 
Kiritilgan so'z palindrom (teskari o'qilganda ham bir xil) ekanligini tekshiring.

**Kirish**:
```
So'zni kiriting: radar
```

**Chiqish**:
```
"radar" palindromdir
```

**Yechim**:
```python
soz = input("So'zni kiriting: ").lower()

if soz == soz[::-1]:
    print(f'"{soz}" palindromdir')
else:
    print(f'"{soz}" palindrom emas')
```

---

### Vazifa #15: Fibonacci Ketma-ketligi
**Daraja**: O'rta  
**Vaqt**: 25 daqiqa

**Tavsif**: 
N ta Fibonacci sonini chiqaring.

**Kirish**:
```
Nechta Fibonacci soni kerak? 8
```

**Chiqish**:
```
Fibonacci ketma-ketligi: 0, 1, 1, 2, 3, 5, 8, 13
```

**Yechim**:
```python
n = int(input("Nechta Fibonacci soni kerak? "))

if n <= 0:
    print("Musbat son kiriting!")
elif n == 1:
    print("Fibonacci ketma-ketligi: 0")
else:
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    
    print(f"Fibonacci ketma-ketligi: {', '.join(map(str, fib))}")
```

---

## 🎮 Mini Loyiha: Raqamlarni Topish O'yini

**Daraja**: O'rta  
**Vaqt**: 45 daqiqa

**Tavsif**: 
Kompyuter 1-100 orasida son o'ylaydi, foydalanuvchi topishga harakat qiladi.

```python
import random

def raqam_topish_oyini():
    print("=== Raqamlarni Topish O'yini ===")
    print("Men 1 dan 100 gacha son o'yladim. Topa olasizmi?")
    
    # Tasodifiy son yaratish
    yashirin_son = random.randint(1, 100)
    urinishlar = 0
    max_urinish = 7
    
    while urinishlar < max_urinish:
        try:
            taxmin = int(input(f"\nTaxminingiz ({max_urinish - urinishlar} urinish qoldi): "))
            urinishlar += 1
            
            if taxmin == yashirin_son:
                print(f"🎉 Tabriklayman! {urinishlar} urinishda topdingiz!")
                print(f"O'ylangan son: {yashirin_son}")
                break
            elif taxmin < yashirin_son:
                print("📈 Kattaroq son o'ylang!")
            else:
                print("📉 Kichikroq son o'ylang!")
                
        except ValueError:
            print("❌ Iltimos, faqat son kiriting!")
            urinishlar -= 1
    
    else:
        print(f"\n😔 Urinishlar tugadi! O'ylangan son: {yashirin_son}")
    
    # Qayta o'ynash
    qayta = input("\nQayta o'ynaysizmi? (ha/yo'q): ").lower()
    if qayta in ['ha', 'yes', 'y']:
        raqam_topish_oyini()
    else:
        print("O'yin tugadi! Rahmat!")

# O'yinni boshlash
raqam_topish_oyini()
```

---

## 📈 Progress Tracking

Vazifalaringizni bajarishda quyidagi jadvaldan foydalaning:

| Daraja | Umumiy Vazifalar | Bajarilgan | Foiz |
|--------|-----------------|------------|------|
| 🟢 Boshlang'ich | 100 | 0 | 0% |
| 🟡 O'rta | 90 | 0 | 0% |
| 🔴 Ilg'or | 100 | 0 | 0% |
| **Jami** | **290** | **0** | **0%** |

---

## 🎯 Keyingi Qadamlar

1. **Boshlang'ich** - [Python Asoslari Vazifalar](/tasks/beginner)
2. **O'rta** - [OOP va Ma'lumot Strukturalari](/tasks/intermediate)  
3. **Ilg'or** - [Algoritmlar va Loyihalar](/tasks/advanced)

**Maslahat**: Har kuni kamida 2-3 ta vazifa bajarishga harakat qiling!