# 🐍 Python'da Vorislik (Inheritance): OOP'ning Ustuni

Ob'ektga yo'naltirilgan dasturlashda (OOP) vorislik — bu bir sinfning (class) boshqa bir sinfning xususiyatlari (atributlari) va harakatlarini (metodlarini) o'ziga meros qilib olish mexanizmidir. Bu tamoyil kodni qayta ishlatish, mantiqiy ierarxiya qurish va dasturni oson kengaytirish imkonini beradi.

Tasavvur qiling, "Talaba" bu "Shaxs"ning bir turi. Har bir talaba — bu shaxs, lekin har bir shaxs talaba emas. Demak, "Talaba" sinfi "Shaxs" sinfidan vorislik olishi mantiqan to'g'ri.

*   **Ota Klass (Parent Class / Superclass)**: O'z xususiyatlarini meros qilib beradigan asosiy klass. (Bizning misolda: `Shaxs`)
*   **Bola Klass (Child Class / Subclass)**: Boshqa klassdan meros oladigan klass. (Bizning misolda: `Talaba`)

## Nima Uchun Vorislik Kerak?

1.  **Kodning qayta ishlatilishi (DRY - Don't Repeat Yourself)**: Ota klassda yozilgan kodni bola klasslarda qayta yozish shart emas. Bu vaqtni tejaydi va xatoliklarni kamaytiradi.
2.  **Mantiqiy Ierarxiya**: Dasturdagi ob'ektlar o'rtasida "IS-A" ("...ning bir turi") munosabatini o'rnatishga yordam beradi. Masalan, `It` - bu `Hayvon`, `Spark` - bu `Mashina`. Bu dastur tuzilishini tushunarli qiladi.
3.  **Kengaytirish Imkoniyati**: Mavjud klassni o'zgartirmasdan, undan voris olib, yangi funksionallik qo'shish yoki mavjudini o'zgartirish mumkin.

## Vorislikning Sintaksisi va Asosiy Ishlashi

Vorislikni amalga oshirish uchun bola klassni e'lon qilishda qavs ichida ota klass nomi ko'rsatiladi.

Keling, `Shaxs` va `Talaba` misolini ko'rib chiqamiz.

```python
# 1. Ota Klass (Parent Class)
class Shaxs:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh

    def tanishtir(self):
        print(f"Assalomu alaykum, mening ismim {self.ism}. Yoshim {self.yosh} da.")

# 2. Bola Klass (Child Class)
class Talaba(Shaxs): # Shaxs klassidan vorislik olamiz
    pass # Hozircha bo'sh qoldiramiz

# Endi ob'ektlar yaratamiz
shaxs1 = Shaxs("Hasan", 30)
talaba1 = Talaba("Olim", 20)

shaxs1.tanishtir()
talaba1.tanishtir() # Talaba klassida bu metod yo'q, lekin u Ota klassdan meros bo'lib o'tdi!
```

Ko'rib turganingizdek, `Talaba` klassi bo'sh bo'lishiga qaramay, u `Shaxs` klassining `__init__` va `tanishtir` metodlariga to'liq ega bo'ldi.

## Metodlarni Qayta Yozish (Method Overriding)

Ba'zan bola klass ota klassdan meros olgan metodning ishlashini o'zgartirishi kerak bo'ladi. Bu jarayon **metodni qayta yozish (overriding)** deyiladi.

Masalan, `Talaba` o'zini tanishtirganda kursini ham aytishi kerak.

```python
class Shaxs:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh

    def tanishtir(self):
        print(f"Mening ismim {self.ism}. Yoshim {self.yosh} da.")

class Talaba(Shaxs):
    def __init__(self, ism, yosh, kurs):
        # Ota klassning __init__ metodini qanday chaqiramiz? (Bu muammoni keyinroq ko'ramiz)
        self.ism = ism
        self.yosh = yosh
        self.kurs = kurs

    # 'tanishtir' metodini qayta yozyapmiz (Overriding)
    def tanishtir(self):
        print(f"Men talabaman. Ismim {self.ism}, yoshim {self.yosh} da. {self.kurs}-kursda o'qiyman.")

talaba2 = Talaba("Zuhra", 19, 2)
talaba2.tanishtir() # Endi Talaba klassidagi maxsus 'tanishtir' metodi ishlaydi.
```

## `super()` Funksiyasi: Ota Klassga Murojaat

Yuqoridagi misolda muammo bor: `Talaba` klassining `__init__` metodida biz `self.ism = ism` va `self.yosh = yosh` kodlarini qayta yozdik. Bu DRY tamoyiliga zid.

**`super()`** funksiyasi bizga bola klass ichidan ota klassning metodlariga murojaat qilish imkonini beradi. Bu ota klassning logikasini kengaytirish va kod takrorlanishining oldini olish uchun juda muhim.

Keling, `Talaba` klassining `__init__` metodini `super()` yordamida to'g'ri yozamiz:

```python
class Shaxs:
    def __init__(self, ism, yosh):
        print("Shaxs __init__ ishga tushdi")
        self.ism = ism
        self.yosh = yosh

    def tanishtir(self):
        print(f"Mening ismim {self.ism}. Yoshim {self.yosh} da.")

class Talaba(Shaxs):
    def __init__(self, ism, yosh, kurs):
        print("Talaba __init__ ishga tushdi")
        # super() orqali Ota klassning __init__ metodini chaqiramiz
        # Bu 'self.ism = ism' va 'self.yosh = yosh' ishini bajaradi
        super().__init__(ism, yosh)
        
        # Endi faqat Talabaga xos bo'lgan atributni qo'shamiz
        self.kurs = kurs

    def tanishtir(self):
        # super() yordamida ota klass metodini chaqirib, unga qo'shimcha qo'shish
        super().tanishtir() 
        print(f"Men {self.kurs}-kurs talabasiman.")

talaba_togri = Talaba("Karim", 21, 4)
talaba_togri.tanishtir()
```
**Natija:**
```
Talaba __init__ ishga tushdi
Shaxs __init__ ishga tushdi
Mening ismim Karim. Yoshim 21 da.
Men 4-kurs talabasiman.
```

## Vorislik Turlari

1.  **Yagona Vorislik (Single Inheritance)**: Bitta bola klass faqat bitta ota klassdan meros oladi. (Yuqoridagi barcha misollarimiz).
2.  **Ko'p Darajali Vorislik (Multilevel Inheritance)**: Klasslar zanjir hosil qiladi (`A` -> `B` -> `C`). `C` klassi `B` dan, `B` esa `A` dan meros oladi. Demak, `C` klassi ham `A`, ham `B` ning xususiyatlariga ega bo'ladi.
3.  **Ko'p Sonli Vorislik (Multiple Inheritance)**: Bitta bola klass bir nechta ota klassdan bir vaqtning o'zida meros oladi. Bu kuchli vosita, lekin ehtiyotkorlik bilan ishlatish kerak, chunki u kodni murakkablashtirishi mumkin ("Diamond Problem" kabi muammolar).

### Ko'p sonli vorislikka misol:

```python
class Yuzuvchi:
    def suzish(self):
        print("Men suzyapman!")

class Uchuvchi:
    def uchish(self):
        print("Men uchayapman!")

# O'rdak ham suzadi, ham uchadi
class Ordak(Yuzuvchi, Uchuvchi):
    def sayrash(self):
        print("G'a-g'a-g'a!")

ordak = Ordak()
ordak.suzish() # Yuzuvchi klassidan
ordak.uchish() # Uchuvchi klassidan
ordak.sayrash() # O'zining metodi
```

---

Vorislik — OOPning poydevori. U yordamida siz kattaroq, tartibli va qayta ishlatishga qulay dasturlar qurishingiz mumkin. Bu tamoyilni yaxshilab tushunish sizni dasturchi sifatida keyingi bosqichga olib chiqadi.
