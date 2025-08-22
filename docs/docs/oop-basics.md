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

Inkapsulyatsiya - ma'lumotlarni sinf ichida yashirish va ularga faqat maxsus metodlar orqali kirish imkonini berish. Bu ma'lumotlarning xavfsizligini ta'minlaydi. Python'da inkapsulyatsiya `protected` va `private` xususiyatlar bilan amalga oshiriladi:

- **Protected**: Bir pastki chiziq (`_`) bilan boshlanadi, masalan `_ism`. Bu xususiyatni tashqaridan o'zgartirish tavsiya etilmaydi.
- **Private**: Ikki pastki chiziq (`__`) bilan boshlanadi, masalan `__ism`. Bu xususiyatga tashqaridan to'g'ridan-to'g'ri kirish mumkin emas.

Misol:

```python
class Talaba:
    def __init__(self, ism, yosh):
        self._ism = ism  # Protected
        self.__yosh = yosh  # Private
    
    def get_yosh(self):  # Getter metod
        return self.__yosh
    
    def set_yosh(self, yangi_yosh):  # Setter metod
        if yangi_yosh > 0:
            self.__yosh = yangi_yosh

talaba = Talaba("Ali", 20)
print(talaba._ism)  # Chiqish: Ali
# print(talaba.__yosh)  # Xato: __yosh private
print(talaba.get_yosh())  # Chiqish: 20
talaba.set_yosh(21)
print(talaba.get_yosh())  # Chiqish: 21
```

## Meros (Inheritance)

Meros sinflarga boshqa sinfning xususiyatlari va metodlarini olish imkonini beradi. Bu kodni qayta ishlatishni osonlashtiradi.

Misol: "Talaba" sinfidan "Magistr" sinfini meros qilib olish.

```python
class Talaba:
    def __init__(self, ism, yosh):
        self.ism = ism
        self.yosh = yosh
    
    def malumot(self):
        return f"Ism: {self.ism}, Yosh: {self.yosh}"

class Magistr(Talaba):  # Meros olish
    def __init__(self, ism, yosh, mutaxassislik):
        super().__init__(ism, yosh)  # Ota sinf konstruktori
        self.mutaxassislik = mutaxassislik
    
    def malumot(self):  # Metodni qayta ta'riflash (override)
        return f"{super().malumot()}, Mutaxassislik: {self.mutaxassislik}"

magistr = Magistr("Olim", 25, "Informatika")
print(magistr.malumot())  # Chiqish: Ism: Olim, Yosh: 25, Mutaxassislik: Informatika
```

- `super()`: Ota sinf metodlarini chaqirish uchun ishlatiladi.
- Metodni qayta ta'riflash (override): Bol sinf ota sinf metodini o'zgartirishi mumkin.

## Polimorfizm (Polymorphism)

Polimorfizm bir xil nomdagi metodlarning turli sinflarda turli xil tarzda ishlashini anglatadi. Yuqoridagi misolda `malumot` metodi `Talaba` va `Magistr` sinflarida turlicha ishlaydi.

Boshqa misol:

```python
class Hayvon:
    def ovoz(self):
        pass

class It(Hayvon):
    def ovoz(self):
        return "Vov-vov!"

class Mushuk(Hayvon):
    def ovoz(self):
        return "Myau!"

hayvonlar = [It(), Mushuk()]
for hayvon in hayvonlar:
    print(hayvon.ovoz())  # Chiqish: Vov-vov! \n Myau!
```

## Statik Metodlar va Sinf Metodlari

- **Statik Metodlar**: `self` parametriga ega emas va sinf bilan bog'lanmagan. `@staticmethod` dekoratori bilan ta'riflanadi.
- **Sinf Metodlari**: Sinf bilan bog'langan va `cls` parametrini oladi. `@classmethod` dekoratori bilan ta'riflanadi.

Misol:

```python
class Kalkulyator:
    @staticmethod
    def qoshish(a, b):
        return a + b
    
    @classmethod
    def info(cls):
        return "Bu Kalkulyator sinfi"

print(Kalkulyator.qoshish(5, 3))  # Chiqish: 8
print(Kalkulyator.info())  # Chiqish: Bu Kalkulyator sinfi
```

## Amaliy Masalalar

1. **Misol 1**: Mashina sinfini yarating, unda model, yil va tezlik xususiyatlari bo'lsin. Tezlikni oshirish va kamaytirish metodlarini qo'shing.

```python
class Mashina:
    def __init__(self, model, yil):
        self.model = model
        self.yil = yil
        self.tezlik = 0
    
    def tezlashtir(self, oshirish):
        self.tezlik += oshirish
        return self.tezlik
    
    def sekinlashtir(self, kamaytirish):
        self.tezlik = max(0, self.tezlik - kamaytirish)
        return self.tezlik

mashina = Mashina("BMW", 2020)
print(mashina.tezlashtir(50))  # Chiqish: 50
print(mashina.sekinlashtir(20))  # Chiqish: 30
```

2. **Misol 2**: "Kitob" sinfini yarating, unda nom, muallif va narx xususiyatlari bo'lsin. Narxga chegirma qo'llovchi metod qo'shing.

```python
class Kitob:
    def __init__(self, nom, muallif, narx):
        self.nom = nom
        self.muallif = muallif
        self.narx = narx
    
    def chegirma(self, foiz):
        self.narx = self.narx * (1 - foiz / 100)
        return self.narx

kitob = Kitob("Python", "Guido", 100)
print(kitob.chegirma(20))  # Chiqish: 80.0
```

## Maslahatlar

- Sinf nomlari odatda `CamelCase` uslubida yoziladi (masalan, `Talaba`, `Mashina`).
- Metod va atribut nomlari `snake_case` us