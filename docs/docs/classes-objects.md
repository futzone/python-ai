# Python'da Sinflar va Obyektlar

## Sinf (Class) Nima?

Sinf - bu obyektlar uchun shablon yoki loyiha. U obyektning xususiyatlari (ma'lumotlari) va xatti-harakatlarini (funksiyalarini) ta'riflaydi. Masalan, "Mashina" sinfi mashinaning modelini, rangini va tezligini saqlashi mumkin, shuningdek, mashinaning tezlashtirish yoki to'xtash kabi harakatlarini belgilaydi.

Sinfni ta'riflash uchun `class` kalit so'zi ishlatiladi. Quyidagi umumiy sintaksis:

```python
class SinfNomi:
    def __init__(self, parametr1, parametr2):
        self.xususiyat1 = parametr1  # Xususiyat (attribute)
        self.xususiyat2 = parametr2
    
    def metod(self):  # Metod (funksiya)
        return f"Bu metod: {self.xususiyat1}"
```

- `class`: Sinfni ta'riflash uchun ishlatiladi.
- `SinfNomi`: Sinfning nomi, odatda `CamelCase` uslubida yoziladi (masalan, `Mashina`, `Talaba`).
- `__init__`: Konstruktor metodi, obyekt yaratilganda avtomatik chaqiriladi va xususiyatlarni boshlang'ich qiymatlar bilan o'rnatadi.
- `self`: Obyektning o'ziga ishora qiladi, har bir metodda birinchi parametr sifatida ishlatiladi.
- `xususiyat1`, `xususiyat2`: Sinfning ma'lumotlari (atributlari).
- `metod`: Sinf ichidagi funksiya, obyektning xatti-harakatlarini belgilaydi.

### Oddiy Misol

Quyida "Talaba" sinfini ta'riflaymiz:

```python
class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
    
    def malumot(self):
        return f"Ism: {self.ism}, Yosh: {self.yosh}"
```

Bu sinf talabanpurported: # Python'da Obyektga Yo'naltirilgan Dasturlash (OOP) Asoslari

## Kirish

Ushbu hujjat Python dasturlash tilida **Obyektga Yo'naltirilgan Dasturlash (OOP)** asoslarini o'quvchilar uchun tushunarli va batafsil tarzda yoritadi. Bu Python kursi uchun mo'ljallangan bo'lib, yangi boshlovchilar uchun oddiy tilda yozilgan va misollar bilan mustahkamlangan. OOP - bu dasturlarni modullar sifatida tashkil qilishning muhim usuli bo'lib, kodni qayta ishlatish, boshqarish va kengaytirishni osonlashtiradi.

Ushbu hujjatda quyidagi savollarga javob beramiz:
- OOP nima va nima uchun kerak?
- Sinflar va obyektlar qanday ishlaydi?
- Inkapsulyatsiya, meros (inheritance) va polimorfizm nima?
- Python'da OOP qanday qo'llaniladi?

Har bir bo'limni o'zingiz sinab ko'rish uchun Python muhitida (masalan, IDLE, Jupyter Notebook yoki repl.it) kodlarni yozib ko'ring.

# Python'da Obyektga Yo'naltirilgan Dasturlash (OOP) Asoslari

## OOP Nima?

Obyektga Yo'naltirilgan Dasturlash (OOP) - bu dasturlash paradigmasi bo'lib, unda ma'lumotlar va ular bilan bog'liq operatsiyalar **obyektlar** shaklida tashkil etiladi. Obyektlar real dunyo ob'ektlarini modellashtiradi (masalan, mashina, talaba, hayvon). OOP Python'da kodni tuzilgan, qayta ishlatiladigan va oson boshqariladigan qilish uchun ishlatiladi.

OOPning asosiy afzalliklari:
- **Modullilik**: Kodni alohida sinflarga ajratish oson boshqarish imkonini beradi.
- **Qayta ishlatish**: Bir sinfni turli loyihalarda ishlatish mumkin.
- **Kengaytirish**: Meros (inheritance) yordamida yangi funksiyalarni qo'shish oson.
- **Abstraksiya**: Murakkab jarayonlarni soddalashtiradi.

Python'da OOPning asosiy tushunchalari: sinflar, obyektlar, inkapsulyatsiya, meros va polimorfizm.

## Sinflar va Obyektlar

### Sinf (Class) Nima?

Sinf - bu obyektlar uchun shablon yoki loyiha. U obyektning xususiyatlari (ma'lumotlari) va xatti-harakatlarini (metodlarini) ta'riflaydi. Masalan, "Talaba" sinfi talabaning ismi, yoshi va baholarini saqlashi mumkin.

Sinfni ta'riflash uchun `class` keywordi ishlatiladi:

```python
class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism  # Xususiyat (attribute)
        self.yosh = yosh
    
    def malumot(self):  # Metod
        return f"Ism: {self.ism}, Yosh: {self.yosh}"
```

- `class`: Sinfni ta'riflash uchun ishlatiladi.
- `__init__`: Konstruktor metodi, obyekt yaratilganda avtomatik chaqiriladi.
- `self`: Obyektning o'ziga ishora qiladi, har bir metodda birinchi parametr sifatida ishlatiladi.
- `ism`, `yosh`: Obyektning xususiyatlari (atributlari).

### Obyekt (Object) Nima?

Obyekt - bu sinfning namunasi (instance). Sinf shablon bo'lsa, obyekt uning haqiqiy ko'rinishi. Masalan, "Talaba" sinfidan "Ali" yoki "Vali" nomli talaba obyektlari yaratiladi.

```python
# Obyekt yaratish
talaba1 = Talaba("Ali", 20)
talaba2 = Talaba("Vali", 22)

# Metodni chaqirish
print(talaba1.malumot())  # Chiqish: Ism: Ali, Yosh: 20
print(talaba2.malumot())  # Chiqish: Ism: Vali, Yosh: 22
```

## Inkapsulyatsiya (Encapsulation)

Inkapsulyatsiya - ma'lumotlarni sinf ichida yashirish va ularga faqat maxsus metodlar orqali kirish imkonini berish. Bu ma'lumotlarning xavfsizligini ta'minlaydi