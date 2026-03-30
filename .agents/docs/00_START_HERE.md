---
description: How to create a new monthly Watch360 LinkedIn PDF report
---

# New Monthly Report Workflow

**Target time: ~30 min. API only.**

---

## 🚨 ФИЛОСОФИЯ "ZERO-ERROR" (ПОЧЕМУ АГЕНТЫ ОШИБАЮТСЯ И КАК ЭТОГО ИЗБЕЖАТЬ)

1. **ЗАПРЕЩЕНО ПАРСИТЬ CSV ЧЕРЕЗ GREP/CAT.** Текстовый поиск ломает структуру колонок (данные съезжают). **Единственный верный способ** — попросить пользователя скинуть `.xlsx` файл в чат и прочитать его через Python-скрипт (`pandas` или `openpyxl`). 
2. **ЗАПРЕЩЕНА "ХИРУРГИЧЕСКАЯ" КОРРЕКТИРОВКА ДАННЫХ.** Самая частая причина поломок кода — попытка агента заменить одну строку в массиве `rows=[...]`. Это ведет к синтаксическим ошибкам, пропущенным запятым и потере индексов. **Если данные ошибочны, агент обязан перегенерировать и заменить ВЕСЬ массив `rows` целиком.**
3. **КОНФИКТЫ MINIO.** Стандартный S3 API-порт на сервере MinIO закрыт. Поэтому попытки скачать файлы через `minio` SDK или curl по S3-протоколу приведут к ошибкам соединения. **Единственный верный способ** — использовать Web Console API (логин через jwt-cookie и скачивание по base64-префиксу).

---

## ⚠️ ГЛАВНОЕ ПРАВИЛО: ТОЛЬКО ДАННЫЕ ИЗ ТАБЛИЦЫ

**Весь текст, все заголовки, все названия, все цифры — берутся ТОЛЬКО из Google Sheet.**
Ничего не придумывать, не переименовывать, не добавлять от себя.

- Заголовок слайда = точный текст из заголовка колонки в таблице (первая строка)
- Названия строк = точно как в таблице
- Цифры = точно как в таблице
- Если чего-то нет в таблице — этого нет на слайде
- Если что-то непонятно или отсутствует — **спросить у пользователя**, не придумывать самостоятельно

> Пример нарушения: назвать слайд "PRODUCT LINES" вместо "COLLECTION" (реальный заголовок из таблицы). Это недопустимо.

**Ключи и ссылки хранятся в `.env.local` (не синкается с GitHub):**
- `GOOGLE_SHEET_URL` — ссылка на исходную таблицу с данными
- `MINIO_BASE` / `MINIO_USER` / `MINIO_PASS` / `MINIO_BUCKET` — доступ к логотипам

---

## Step 1 — Get data (THE "ZERO ERROR" EXCEL WORKFLOW)

**Для 100% точности данных мы больше не используем `curl` и `grep` для парсинга CSV! Текстовый поиск приводит к смещению колонок.**

Ask the user for the actual Excel/CSV file right here in the chat:
1. **Request the File:** "Пожалуйста, скиньте мне актуальный Excel (.xlsx) или CSV файл прямо сюда в чат."
2. **Programmatic Parsing:** When the user drops the file, write a robust Python or Node.js script (using e.g., Python's `csv` module) to extract the exact column strictly by its index. Filter out empty cells.
3. **Array Overwrite:** Take the isolated array from your script and completely overwrite the `rows=[...]` constant inside the target `.tsx` slide file. Do not use `grep` or `sed` to do surgical line edits—replace the array wholesale.
4. **Top-10 Constraint:** If a slide component physically fits only 10 rows (like `SimpleBarSlide`), truncate the data strictly to the Top 10 elements.

**Note / Skip rules (check each column's bottom cell manually or scripturally):**

| Cell value | Action |
|---|---|
| `Note` (or contains note text) | Include the note text as a footnote on that slide, left-aligned at `left: 100px`. |
| `skip` (red square) | **Remove this slide entirely** from `App.tsx` REPORTS array. |
| Empty | Process normally |
---

## Step 2 — Get logos from MinIO (API)

**Naming pattern:** `objects-logos/ct_brand_[brand_name_lowercase_underscored].svg`
**Watches pattern:** `objects-watches/ct_product_line_[line_name].png` 
*(Внимание: иногда часы по ошибке лежат в папке `objects-logos`! Спрашивайте у пользователя наличие)*

**⚠️ ВАЖНО: Порт S3 закрыт! Скачивать можно ТОЛЬКО через внутренний API веб-консоли MinIO!**

```javascript
// Пример: download_minio.cjs (использует Web API вместо S3)
const fs = require('fs');
const https = require('https');
const b64 = (str) => Buffer.from(str).toString('base64');

// 1. Получаем токен авторизации (через POST /api/v1/login с accessKey и secretKey из .env.local)
// 2. Делаем запрос на скачивание (путь должен быть в base64):
const remotePath = 'objects-logos/ct_brand_cartier.svg';
const url = 'https://sa.minio-admin.semanticforce.ai/api/v1/buckets/sf-ai/objects/download?prefix=' + b64(remotePath);

https.get(url, { headers: { 'Cookie': 'token='+token } }, (res) => {
    if (res.statusCode === 200) {
        res.pipe(fs.createWriteStream('public/assets/logos/cartier.svg'));
    }
});
```

**⚠️ MinIO rules:**
- Read-only. Never delete, move or modify anything.
- Credentials are stored in `.env.local` (gitignored). Read them from there.

---

## Step 3 — Create slide components

**Pattern:** copy the closest January equivalent and adapt data.

```
src/components/slides/SlideV2[Mar/Apr/...]_01.tsx  ← Cover
src/components/slides/SlideV2[Mar/Apr/...]_04.tsx  ← Top N Brands (logo bars)
src/components/slides/SlideV2[Mar/Apr/...]_05.tsx  ← Case Material (SimpleBarSlide)
... etc.
```

**Rules:**
- Title = **ONE line only** (no `\n`). If too long → shorten: "WATCH FUNCTIONS" → "FUNCTIONS"
- Use `SimpleBarSlide` for all non-logo bar slides
- Do NOT override `subtitleTop` or `barsTop` unless truly unavoidable
- Logo boxes: white square background `#FFFFFF`, `border-radius: 6px`, `padding: 10px`

---

## Step 4 — Register in App.tsx

```tsx
// In REPORTS array:
{
    id: 'mar-2026',
    label: 'MAR 2026',
    slides: [
        <SlideV2Mar_01 />,  // Cover
        <SlideV2Mar_04 />,  // Top N Brands
        // ... only slides with data
    ],
},
```

---

## Step 5 — Push to GitHub and deploy

```bash
# Stage and commit changes
git add src/components/slides/ src/App.tsx public/assets/logos/
git commit -m "feat(slides): [month] report slides"

# Push source to main
git push

# Build and deploy to GitHub Pages
npm run deploy  # runs build + gh-pages -d dist automatically
```

**Live URL:** https://chife-mod.github.io/watch360-linkedin-pdf/

---


## Checklist

- [ ] No credentials in any `.tsx`, `.ts`, `.css`, `.md` files
- [ ] No Figma tokens in committed files
- [ ] All slide titles fit in 1 line
- [ ] Slides without data → not added to REPORTS array
- [ ] Deployed and tested at GH Pages URL

---

## ⚡ TOKEN EFFICIENCY — ОБЯЗАТЕЛЬНО

**Каждый выпуск = новая сессия.** Не продолжать старый тред — история тянет токены на каждый запрос.

### Читать файлы точечно — не целиком

```bash
# ❌ Дорого
cat src/components/slides/SlideV2Feb_05.tsx

# ✅ Дёшево — только нужные строки
grep -n "count:\|label:\|title=\|subtitle=" src/components/slides/SlideV2Feb_05.tsx
grep -n "v2-logo-box" src/components/slides/v2.css
```

### Таблицу — только нужные колонки

```bash
# Не делать полный дамп всех 14 групп
# Сразу указывать конкретные col-индексы нужных слайдов
```

### Копировать ближайший слайд, не писать с нуля

```bash
cp src/components/slides/SlideV2Feb_05.tsx src/components/slides/SlideV2Mar_05.tsx
sed -i '' 's/FEB 2026/MAR 2026/g' src/components/slides/SlideV2Mar_05.tsx
# Затем multi_replace только изменённых данных
```

### Правило: нет лого/ЦТ → текст, не пустой квадрат

Если `ct_brand_*` или `ct_product_line_*` не найдено в MinIO → `logo: null` → рендерить название бренда текстом.
Детали: `.agents/workflows/logo-fallback-rule.md`
