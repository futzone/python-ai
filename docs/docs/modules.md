# Python'da Modullar va Paketlar

## Modul Nima?

Modul - bu Python kodini saqlovchi `.py` fayli bo'lib, unda funksiyalar, sinflar, o'zgaruvchilar yoki boshqa kodlar bo'lishi mumkin. Modullar kodni alohida fayllarga ajratish va uni boshqa dasturlarda qayta ishlatish imkonini beradi.

Modullarning afzalliklari:
- **Tashkil qilish**: Kodni mantiqiy guruhlarga ajratadi.
- **Qayta ishlatish**: Bir modulni turli loyihalarda ishlatish mumkin.
- **Oson boshqarish**: Katta loyihalarda kodni boshqarishni soddalashtiradi.

Python'da modullar ikki turga bo'linadi:
1. **Standart modullar**: Python bilan birga keladigan modullar (masalan, `math`, `random`, `datetime`).
2. **Foydalanuvchi modullari**: O'zingiz yozgan `.py` fayllar.

### Modul Import Qilish

Modulni ishlatish uchun uni `import` kalit so'zi yordamida dasturga kiritish kerak. Quyidagi sintaksislar mavjud:

```python
# Butun modulni import qilish
import math

print(math.sqrt(16))  # Chiqish: 4.0
```

```python
# Moduldan faqat kerakli elementni import qilish
from math import sqrt

print(sqrt(16))  # Chiqish: 4.0
```

```python
# Modulga qisqa nom berish
import random as rnd

print(rnd.randint(1, 10))  # Chiqish: 1 dan 10 gacha tasodifiy son
```

```python
# Moduldagi barcha elementlarni import qilish (tavsiya etilmaydi)
from math import *

print(pi)  # Chiqish: 3.141592653589793
```

**Eslatma**: `from ... import *` dan foydalanish tavsiya etilmaydi, chunki u nomlarning to'qnashuviga olib kelishi mumkin.

### O'z Modulini Yaratish

O'z modulimizni yaratish uchun oddiygina `.py` fayl yaratamiz. Masalan, `mymodule.py` nomli fayl yarating va quyidagi kodni yozing:

```python
# mymodule.py
def salom_ayt(ism):
    return f"Salom, {ism}!"

PI = 3.14

class Mashina:
    def __init__(self, model):
        self.model = model
```

Endi bu modulni boshqa faylda ishlatish mumkin:

```python
# main.py
import mymodule

print(mymodule.salom_ayt("Ali"))  # Chiqish: Salom, Ali!
print(mymodule.PI)  # Chiqish: 3.14

mashina = mymodule.Mashina("BMW")
print(mashina.model)  # Chiqish: BMW
```

**Eslatma**: Modul fayli dastur bilan bir papkada bo'lishi kerak, aks holda yo'l (path) ko'rsatish talab qilinadi.

## Paket Nima?

Paket - bu bir nechta modullarni o'z ichiga olgan papka. Paket yaratish uchun papkada `__init__.py` fayli bo'lishi kerak (Python 3.3+ da bu fayl ixtiyoriy, lekin yaxshi amaliyot sifatida qoldiriladi).

### Paket Yaratish

1. `mypackage` nomli papka yarating.
2. Ichida `__init__.py` faylini yarating (bo'sh bo'lsa ham bo'ladi).
3. Papkaga modullar qo'shing, masalan, `matematika.py` va `salomlashuv.py`.

Misol tuzilmasi:

```
mypackage/
│── __init__.py
│── matematika.py
│── salomlashuv.py
```

`matematika.py`:

```python
def qoshish(a, b):
    return a + b
```

`salomlashuv.py`:

```python
def salom_ayt(ism):
    return f"Salom, {ism}!"
```

Endi paketni import qilish:

```python
from mypackage import matematika, salomlashuv

print(matematika.qoshish(5, 3))  # Chiqish: 8
print(salomlashuv.salom_ayt("Vali"))  # Chiqish: Salom, Vali!
```

Yoki aniq elementlarni import qilish:

```python
from mypackage.matematika import qoshish
from mypackage.salomlashuv import salom_ayt

print(qoshish(5, 3))  # Chiqish: 8
print(salom_ayt("Vali"))  # Chiqish: Salom, Vali!
```

## Standart Modullarga Misollar

Python'da ko'plab foydali standart modullar mavjud. Quyida eng mashhurlari:

1. **`math`**: Matematik operatsiyalar uchun.
   ```python
   import math
   print(math.factorial(5))  # Chiqish: 120
   print(math.cos(math.pi))  # Chiqish: -1.0
   ```

2. **`random`**: Tasodifiy sonlar va tanlovlar uchun.
   ```python
   import random
   print(random.choice(["olma", "banan", "uzum"]))  # Tasodifiy meva
   print(random.randint(1, 100))  # 1-100 oralig'ida tasodifiy son
   ```

3. **`datetime`**: Sana va vaqt bilan ishlash uchun.
   ```python
   from datetime import datetime
   hozir = datetime.now()
   print(hozir)  # Joriy sana va vaqt
   ```

4. **`os`**: Operatsion tizim bilan ishlash uchun.
   ```python
   import os
   print(os.getcwd())  # Joriy papka yo'lini chiqaradi
   ```

## Tashqi Modullar va Paketlar

Python'da foydalanuvchilar tomonidan yaratilgan tashqi modullar va paketlarni `pip` yordamida o'rnatish mumkin. Mashhur tashqi paketlarga misollar:

- `requests`: HTTP so'rovlar uchun.
- `numpy`: Ilmiy hisob-kitoblar uchun.
- `pandas`: Ma'lumotlar tahlili uchun.

O'rnatish misoli:

```bash
pip install requests
```

Foydalanish:

```python
import requests
response = requests.get("https://api.github.com")
print(response.status_code)  # Chiqish: 200 (agar muvaffaqiyatli bo'lsa)
```

## Modul va Paketlarni Yaratishda Maslahatlar

1. **Nomlash**: Modul nomlari kichik harflar bilan va `snake_case` uslubida bo'lishi kerak (masalan, `my_module.py`).
2. **Tuzilma**: Paketlarda mantiqiy tuzilma saqlang, masalan, funksiyalar bo'yicha guruhlang.
3. **Docstring**: Har bir modul va funksiyaga `"""Izoh"""` bilan izoh qo'shing.
4. **`__name__`**: Modulni to'g'ridan-to'g'ri ishga tushirish yoki import qilishni farqlash uchun `__name__` dan foydalaning:

   ```python
   # mymodule.py
   def salom():
       print("Salom, dunyo!")
   
   if __name__ == "__main__":
       salom()  # Faqat modul to'g'ridan-to'g'ri ishga tushganda bajariladi
   ```

5. **Yo'llar**: Agar modul yoki paket boshqa papkada bo'lsa, `sys.path` ga yo'l qo'shish mumkin:

   ```python
   import sys
   sys.path.append("/path/to/your/package")
   ```

## Amaliy Masalalar

1. **Misol 1**: `kalkulyator.py` nomli modul yarating va unda qo'shish, ayirish, ko'paytirish funksiyalarini ta'riflang.

   ```python
   # kalkulyator.py
   def qoshish(a, b):
       return a + b
   
   def ayirish(a, b):
       return a - b
   
   def kopaytirish(a, b):
       return a * b
   ```

   ```python
   # main.py
   from kalkulyator import qoshish, ayirish
   print(qoshish(5, 3))  # Chiqish: 8
   print(ayirish(5, 3))  # Chiqish: 2
   ```

2. **Misol 2**: `utils` nomli paket yar