# Python Error Handling

Python dasturlash tilida xatoliklar (errors) va istisnolar (exceptions) ko‘p uchraydi. Ulardan to‘g‘ri foydalanish dastur barqarorligini oshiradi.  

---

## 1. Error va Exception farqi
- **Error** – sintaksis yoki tuzilishdagi xato (masalan, `SyntaxError`).
- **Exception** – bajarilish vaqtida sodir bo‘ladigan xatolik (masalan, `ZeroDivisionError`, `ValueError`).

---

## 2. Asosiy try/except ishlatish
```python
try:
    x = int(input("Son kiriting: "))
    print(10 / x)
except:
    print("Xatolik yuz berdi!")
````

---

## 3. Maxsus Exception turlari

```python
try:
    num = int("abc")  # ValueError
except ValueError:
    print("Son kiritilmadi!")
```

```python
try:
    result = 10 / 0  # ZeroDivisionError
except ZeroDivisionError:
    print("Nolga bo‘lish mumkin emas!")
```

---

## 4. Bir nechta except

```python
try:
    x = int("abc")
    y = 10 / x
except ValueError:
    print("Noto‘g‘ri son kiritildi.")
except ZeroDivisionError:
    print("Nolga bo‘lish mumkin emas.")
```

---

## 5. `else` va `finally` bloklari

```python
try:
    x = int(input("Son: "))
    result = 10 / x
except ZeroDivisionError:
    print("Nolga bo‘lib bo‘lmaydi.")
else:
    print("Natija:", result)
finally:
    print("Dastur tugadi.")
```

* `else` → faqat xatolik bo‘lmaganda ishlaydi.
* `finally` → doim ishlaydi (fayl yopish, resurslarni bo‘shatish uchun foydali).

---

## 6. Exception obyektidan foydalanish

```python
try:
    x = 10 / 0
except Exception as e:
    print("Xatolik turi:", type(e).__name__)
    print("Xabar:", e)
```

---

## 7. O‘z xatoligingizni yaratish (`raise`)

```python
def check_age(age):
    if age < 18:
        raise ValueError("Yosh 18 dan katta bo‘lishi kerak!")
    return "Kirish mumkin."

try:
    print(check_age(16))
except ValueError as e:
    print("Xato:", e)
```

---

## 8. Custom Exception klasslari

```python
class NegativeNumberError(Exception):
    pass

def factorial(n):
    if n < 0:
        raise NegativeNumberError("Manfiy son uchun factorial aniqlanmagan!")
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

try:
    print(factorial(-5))
except NegativeNumberError as e:
    print("Xato:", e)
```

---

## 9. Eng ko‘p ishlatiladigan Exception turlari

* `ValueError`
* `TypeError`
* `ZeroDivisionError`
* `IndexError`
* `KeyError`
* `FileNotFoundError`
* `ImportError`

---

## 10. Amaliy Masalalar

1. Foydalanuvchi kiritgan sonni 10 ga bo‘lib, `ZeroDivisionError`ni tuting.
2. Ro‘yxatdan noto‘g‘ri indeks olishda `IndexError`ni boshqaring.
3. Fayl ochishda `FileNotFoundError`ni boshqaring.
4. O‘z xatolik klassingizni yozing va undan foydalaning.
5. Exception obyektidan xato nomi va xabarini chop eting.

---

✅ **Xulosa**: Error handling — bu dasturingizni ishonchli va professional qilishning muhim qismi.


