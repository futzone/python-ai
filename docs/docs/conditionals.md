# 🤔 Shart Operatorlari (If/Elif/Else)

Shart operatorlari dasturda qaror qabul qilish uchun ishlatiladi. Ular dasturning turli yo'nalishlarda ishlashini ta'minlaydi.

## 🎯 Maqsadlar

Ushbu darsdan keyin siz:
- ✅ If/elif/else strukturasini bilasiz
- ✅ Murakkab shartlar yozishni o'rganasiz
- ✅ Nested conditions ishlatishni bilasiz
- ✅ Ternary operator qo'llashni o'rganasiz

## 🔍 Oddiy If Sharti

### Asosiy Sintaksis
```python
# Oddiy if sharti
yosh = 18

if yosh >= 18:
    print("Siz kattasiz!")
    print("Haydovchilik guvohnomasi olishingiz mumkin")

print("Bu qator har doim chiqadi")
```

### Boolean Shartlar
```python
# Boolean o'zgaruvchi bilan
talaba = True

if talaba:
    print("Sizga talaba chegirmasi beriladi")

# Inkor (not) bilan
if not talaba:
    print("Talaba emas")
```

## ⚡ If-Else Strukturasi

### Ikki Tanlov
```python
yosh = int(input("Yoshingizni kiriting: "))

if yosh >= 18:
    print("Siz voyaga yetgansiz")
    print("Barcha huquqlaringiz bor")
else:
    print("Siz voyaga yetmagansiz")
    print("Ota-onangiz roziligi kerak")
```

### Juft-Toq Aniqlagich
```python
son = int(input("Son kiriting: "))

if son % 2 == 0:
    print(f"{son} - juft son")
else:
    print(f"{son} - toq son")

# Qo'shimcha ma'lumot
if son == 0:
    print("0 - neytral son")
elif son > 0:
    print("Musbat son")
else:
    print("Manfiy son")
```

## 🎭 If-Elif-Else Zanjiri

### Baholar Tizimi
```python
ball = int(input("Ballingizni kiriting (0-100): "))

if ball >= 90:
    baho = "A"
    izoh = "Ajoyib!"
elif ball >= 80:
    baho = "B" 
    izoh = "Yaxshi!"
elif ball >= 70:
    baho = "C"
    izoh = "Qoniqarli"
elif ball >= 60:
    baho = "D"
    izoh = "Yomon"
else:
    baho = "F"
    izoh = "Muvaffaqiyatsiz"

print(f"Bahoyingiz: {baho} - {izoh}")
```

### Faslni Aniqlash
```python
oy = int(input("Oy raqamini kiriting (1-12): "))

if oy in [12, 1, 2]:
    fasl = "Qish"
    harorat = "Sovuq"
elif oy in [3, 4, 5]:
    fasl = "Bahor"
    harorat = "Iliq"
elif oy in [6, 7, 8]:
    fasl = "Yoz"
    harorat = "Issiq"
elif oy in [9, 10, 11]:
    fasl = "Kuz"
    harorat = "Salqin"
else:
    fasl = "Noto'g'ri oy"
    harorat = "Noma'lum"

print(f"{oy}-oy: {fasl} - {harorat}")
```

## 🔗 Murakkab Shartlar

### Mantiqiy Operatorlar bilan
```python
yosh = int(input("Yoshingiz: "))
maosh = int(input("Oylik maoshingiz (ming so'm): "))
ish_staji = int(input("Ish stajingiz (yil): "))

# AND operatori
if yosh >= 21 and maosh >= 5000 and ish_staji >= 2:
    print("Kredit olishingiz mumkin!")
    
    # Kredit miqdorini aniqlash
    if maosh >= 10000:
        kredit = maosh * 60  # 5 yillik
    else:
        kredit = maosh * 36  # 3 yillik
        
    print(f"Maksimal kredit: {kredit:,} so'm")
else:
    print("Kredit shartlariga javob bermayapsiz")
    
    # Qaysi shart bajarilmaganini ko'rsatish
    if yosh < 21:
        print(f"- Yosh kamida 21 bo'lishi kerak (sizda {yosh})")
    if maosh < 5000:
        print(f"- Maosh kamida 5000 bo'lishi kerak (sizda {maosh})")
    if ish_staji < 2:
        print(f"- Ish staji kamida 2 yil bo'lishi kerak (sizda {ish_staji})")
```

### OR Operatori bilan
```python
transport = input("Transport turini kiriting (avtobus/metro/tram): ").lower()
yosh = int(input("Yoshingiz: "))
talaba_mi = input("Talabamisiz? (ha/yo'q): ").lower() == "ha"

# Chegirma shartlari
if yosh < 18 or yosh > 60 or talaba_mi:
    chegirma = 50  # 50% chegirma
    print("Sizga 50% chegirma beriladi!")
else:
    chegirma = 0
    print("Chegirma yo'q")

# Narxlarni hisoblash
narxlar = {"avtobus": 1500, "metro": 2000, "tram": 1200}
asosiy_narx = narxlar.get(transport, 0)

if asosiy_narx > 0:
    yakuniy_narx = asosiy_narx * (100 - chegirma) / 100
    print(f"{transport.title()} narxi: {yakuniy_narx} so'm")
else:
    print("Noto'g'ri transport turi!")
```

## 🪆 Nested Conditions (Ichma-ich Shartlar)

### Maktab Kabul Qilish Tizimi
```python
def maktab_kabul():
    print("=== Maktab Kabul Qilish Tizimi ===")
    
    # Asosiy ma'lumotlar
    yosh = int(input("Yoshingiz: "))
    
    if yosh >= 6:  # Maktab yoshi
        if yosh <= 7:
            sinf = 1
            print(f"Siz {sinf}-sinfga kira olasiz")
            
            # Qo'shimcha tekshirish
            harf_biladi = input("Harflarni bilasizmi? (ha/yo'q): ").lower() == "ha"
            son_biladi = input("1-10 gacha sanashni bilasizmi? (ha/yo'q): ").lower() == "ha"
            
            if harf_biladi and son_biladi:
                print("✅ Maktabga tayyorsiz!")
            else:
                print("⚠️ Tayyorgarlik kurslarga qatnashing")
                
        elif yosh <= 18:
            sinf = min(yosh - 5, 11)  # Maksimal 11-sinf
            print(f"Siz {sinf}-sinfga mos kelasiz")
            
            # Oldingi sinf bahi
            oldingi_baho = float(input("O'tgan yildagi o'rtacha bahoyingiz: "))
            
            if oldingi_baho >= 4.5:
                print("✅ A'lo o'quvchi! Stipendiya olasiz")
            elif oldingi_baho >= 3.5:
                print("✅ Yaxshi o'quvchi!")
            elif oldingi_baho >= 3.0:
                print("⚠️ O'rtacha natija. Ko'proq harakat qiling")
            else:
                print("❌ Qo'shimcha darslar kerak")
        else:
            print("Maktab yoshi o'tdi. Kollej yoki universitet ko'ring")
    else:
        print("Maktab uchun yoshingiz yetmaydi")
        print(f"{6 - yosh} yil kuting")

# Funktsiyani chaqirish
maktab_kabul()
```

## 🎯 Ternary Operator (Qisqa If)

### Asosiy Sintaksis
```python
# Oddiy usul
yosh = 20
if yosh >= 18:
    holat = "Katta"
else:
    holat = "Kichik"

# Ternary operator (qisqa usul)
holat = "Katta" if yosh >= 18 else "Kichik"
print(f"Siz {holat}siz")

# Yana bir misol
son = -5
mutlaq_qiymat = son if son > 0 else -son
print(f"{son} ning mutlaq qiymati: {mutlaq_qiymat}")
```

### Murakkab Ternary
```python
# Ichma-ich ternary
ball = 85
baho = "A" if ball >= 90 else "B" if ball >= 80 else "C" if ball >= 70 else "F"
print(f"Bahoyingiz: {baho}")

# Yaxshisi - oddiy if-elif ishlatish
if ball >= 90:
    baho = "A"
elif ball >= 80:
    baho = "B"
elif ball >= 70:
    baho = "C"
else:
    baho = "F"
```

## 💡 Amaliy Misollar

### Misol 1: ATM Tizimi
```python
def atm_tizimi():
    print("=== ATM Tizimi ===")
    
    # Foydalanuvchi ma'lumotlari
    balans = 1000000  # 1 million so'm
    pin = "1234"
    
    # PIN kodini tekshirish
    kiritilgan_pin = input("PIN kodni kiriting: ")
    
    if kiritilgan_pin == pin:
        print("✅ PIN to'g'ri!")
        
        while True:
            print("\n=== Menyu ===")
            print("1. Balansni ko'rish")
            print("2. Pul yechish")
            print("3. Pul qo'yish")
            print("4. Chiqish")
            
            tanlov = input("Tanlovingiz: ")
            
            if tanlov == "1":
                print(f"Joriy balans: {balans:,} so'm")
                
            elif tanlov == "2":
                summa = int(input("Yechimoqchi bo'lgan summa: "))
                
                if summa <= 0:
                    print("❌ Noto'g'ri summa!")
                elif summa > balans:
                    print("❌ Balansingizda yetarli mablag' yo'q!")
                    print(f"Joriy balans: {balans:,} so'm")
                else:
                    balans -= summa
                    print(f"✅ {summa:,} so'm yechildi")
                    print(f"Qolgan balans: {balans:,} so'm")
                    
            elif tanlov == "3":
                summa = int(input("Qo'ymoqchi bo'lgan summa: "))
                
                if summa <= 0:
                    print("❌ Noto'g'ri summa!")
                else:
                    balans += summa
                    print(f"✅ {summa:,} so'm qo'yildi")
                    print(f"Yangi balans: {balans:,} so'm")
                    
            elif tanlov == "4":
                print("Xayr! Kartangizni oling")
                break
                
            else:
                print("❌ Noto'g'ri tanlov!")
    else:
        print("❌ PIN noto'g'ri! Kartangiz bloklandi")

# ATM tizimini ishga tushirish
# atm_tizimi()
```

### Misol 2: Ob-havo Ma'shurchisi
```python
def ob_havo_mashvarchisi():
    print("=== Ob-havo Ma'shurchisi ===")
    
    harorat = int(input("Bugungi harorat (°C): "))
    yomgir_ehtimoli = int(input("Yomg'ir ehtimoli (%): "))
    shamol_tezligi = int(input("Shamol tezligi (km/h): "))
    
    # Kiyim maslahatlar
    print("\n🧥 Kiyim Maslahatlar:")
    
    if harorat < 0:
        kiyim = "Qalin kurtka, qo'lqop, sharf"
        faoliyat = "Uyda qoling yoki qisqa vaqt chiqing"
    elif harorat < 10:
        kiyim = "Issiq kurtka, sviter"
        faoliyat = "Issiq kiyining, erkaklar uchun normalь"
    elif harorat < 20:
        kiyim = "Yengil kurtka yoki sviter"
        faoliyat = "Yurish uchun yaxshi vaqt"
    elif harorat < 30:
        kiyim = "Ko'ylak, yengil kiyimlar"
        faoliyat = "Har qanday faoliyat uchun ideal"
    else:
        kiyim = "Yengil, havo o'tkazuvchi kiyimlar"
        faoliyat = "Issiq, soyada dam oling"
    
    print(f"Harorat {harorat}°C uchun: {kiyim}")
    
    # Yomg'ir maslahatlar
    print("\n☔ Yomg'ir Maslahatlar:")
    if yomgir_ehtimoli >= 70:
        print("Soyabon olib ketish majburiy!")
        faoliyat += ". Yomg'ir ehtimoli yuqori"
    elif yomgir_ehtimoli >= 30:
        print("Soyabon olib ketish tavsiya etiladi")
    else:
        print("Yomg'ir kutilmaydi, soyabon shart emas")
    
    # Shamol maslahatlar
    print("\n💨 Shamol Maslahatlar:")
    if shamol_tezligi >= 50:
        print("Kuchli shamol! Tashqariga chiqmang")
        faoliyat = "Uyda qoling"
    elif shamol_tezligi >= 25:
        print("O'rtacha shamol, ehtiyot bo'ling")
    else:
        print("Shamol normal")
    
    # Umumiy tavsiya
    print(f"\n🎯 Umumiy Tavsiya: {faoliyat}")
    
    # Ob-havo bahosi
    if harorat >= 15 and harorat <= 25 and yomgir_ehtimoli < 30 and shamol_tezligi < 25:
        print("🌟 Ajoyib ob-havo! Tashqarida vaqt o'tkazing")
    elif harorat < 0 or yomgir_ehtimoli > 70 or shamol_tezligi > 50:
        print("⚠️ Yomon ob-havo! Uyda qoling")
    else:
        print("🌤️ O'rtacha ob-havo")

# Ob-havo ma'shurchisini ishga tushirish
# ob_havo_mashvarchisi()
```

## 📊 Switch-Case Alternative

Python'da switch-case yo'q, lekin alternativalar bor:

### Dictionary bilan
```python
def hafta_kuni(kun_raqami):
    kunlar = {
        1: "Dushanba",
        2: "Seshanba", 
        3: "Chorshanba",
        4: "Payshanba",
        5: "Juma",
        6: "Shanba",
        7: "Yakshanba"
    }
    return kunlar.get(kun_raqami, "Noto'g'ri kun raqami")

# Test
for i in range(1, 9):
    print(f"{i}: {hafta_kuni(i)}")
```

### Match-Case (Python 3.10+)
```python
def baho_izoh(baho):
    match baho:
        case "A":
            return "Ajoyib!"
        case "B":
            return "Yaxshi!"
        case "C":
            return "Qoniqarli"
        case "D":
            return "Yomon"
        case "F":
            return "Muvaffaqiyatsiz"
        case _:
            return "Noma'lum baho"

# Test
baholar = ["A", "B", "C", "D", "F", "X"]
for baho in baholar:
    print(f"{baho}: {baho_izoh(baho)}")
```

## 📝 Xulosa

Bu darsda o'rgandik:
- ✅ If/elif/else strukturasi
- ✅ Mantiqiy operatorlar (and, or, not)
- ✅ Nested conditions
- ✅ Ternary operator
- ✅ Amaliy misollar

## 🎯 Keyingi Dars

Keyingi darsda **Tsikllar (Loops)** haqida o'rganamiz:
- For tsikllar
- While tsikllar
- Break va continue
- Nested loops

---

**Maslahat**: Shartli operatorlarda har doim edge case'larni (chegara holatlarni) tekshiring!