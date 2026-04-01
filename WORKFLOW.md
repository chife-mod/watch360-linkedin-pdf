# Watch360 Monthly Report — Unified Workflow

> **Единственный документ-инструкция для AI-агента.**
> Покрывает полный цикл: Excel → PDF-слайды → Анимированное видео (Remotion).

---

## ЖЕЛЕЗНОЕ ПРАВИЛО №0 — НИЧЕГО НЕ ВЫДУМЫВАТЬ

PDF-слайды — **единственный источник истины** для Remotion.
Remotion-компонент = **1:1 копия** PDF-компонента + анимация.

| Что берём из PDF | Что добавляем в Remotion |
|---|---|
| JSX-структуру (`<div>`, `<p>`, `<img>`) | `<AbsoluteFill>`, `<Img>`, `<Series>` |
| CSS-значения из `v2.css` (fontSize, gap, height, colors) | `spring()`, `interpolate()` анимации |
| Данные (массивы `LINES`, `BRANDS`, `ROWS`) | `useCurrentFrame()` / `useVideoConfig()` |
| Позиции (top, left, width) | Ничего не менять |

**Запрещено:**
- Менять fontSize, gap, height, colors, padding, alignment
- «Улучшать» layout или «адаптировать» структуру
- Использовать свои значения вместо CSS-классов из `v2.css`

---

## Структура проекта

```
Watch360_LinkedIn_PDF_animations_remotion/
├── report-pdf/               ← PDF-слайды (Vite + React) — ИСТОЧНИК ИСТИНЫ
│   ├── src/components/slides/
│   │   ├── v2.css            ← ВСЕ стили (ЕДИНСТВЕННЫЙ справочник значений)
│   │   ├── SimpleBarSlide.tsx ← Переиспользуемый компонент простых баров
│   │   ├── SlideV2Feb_01.tsx  ← Cover
│   │   ├── SlideV2Feb_04.tsx  ← Brands (logo bars)
│   │   ├── SlideV2Feb_05.tsx  ← Case Material (простые бары)
│   │   └── ...
│   ├── public/assets/         ← Ассеты (logos/, watches/, images/)
│   ├── src/App.tsx            ← Порядок слайдов (массив REPORTS)
│   └── .agents/               ← Воркфлоу для PDF-части
│       ├── docs/00_START_HERE.md
│       └── workflows/
├── report-remotion/           ← Анимированное видео (Remotion)
│   ├── src/
│   │   ├── shared.tsx         ← SlideBackground, SlideHeader, SimpleBar, хелперы
│   │   ├── SimpleBarSlideAnimated.tsx ← Обёртка SimpleBarSlide + анимация
│   │   ├── Root.tsx           ← Регистрация всех Composition (по папкам)
│   │   ├── february/          ← Февральские слайды
│   │   │   ├── FebCover.tsx
│   │   │   ├── FebSlide04.tsx ... FebSlide15b.tsx
│   │   │   └── index.ts      ← Экспорт + FebFullVideo (Series)
│   │   └── [january/]        ← Январские слайды (НЕ ТРОГАТЬ)
│   └── public/assets/         ← Симлинк или копия ассетов из report-pdf
└── WORKFLOW.md                ← ЭТОТ ФАЙЛ
```

---

## ФАЗА 1 — Создание PDF-слайдов

### Вход: Excel-файл от пользователя

### Шаг 1.1 — Парсинг Excel

```bash
cd report-pdf
python3 .agents/scripts/verify_excel_v2.py path/to/file.xlsx
```

**Правила:**
- Данные ТОЛЬКО из Excel. Ничего не придумывать
- Парсить программно (openpyxl/pandas), НИКОГДА grep/sed/cat
- Строк ≤ 10 → все на слайд. Строк > 10 → Top 10
- Секция без данных → слайд НЕ создавать
- Ошибки валидации → остановиться, показать пользователю

### Шаг 1.2 — Скачать ассеты из MinIO

**ВАЖНО:** S3-порт закрыт. `aws s3`, `mc`, MinIO SDK — **не работают**.
Единственный способ — HTTP GET через Console REST API с cookie-авторизацией.

**Endpoint:**
```
GET https://sa.minio-admin.semanticforce.ai/api/v1/buckets/sf-ai/objects/download?prefix={base64_path}
Cookie: token={token}
```

- `prefix` — путь к файлу в **base64** (НЕ URL-encoded): `Buffer.from(path).toString('base64')`
- `token` — из файла `report-pdf/cookies.txt` (Netscape format, последнее поле)
- Креды для веб-логина: `report-pdf/.env.local` (`MINIO_USER`, `MINIO_PASS`)
- Токен протух (401/403) → залогиниться в браузере, заново экспортировать cookies

**Пути к файлам (bucket `sf-ai`):**

| Тип | Шаблон пути | Пример |
|-----|-------------|--------|
| Логотип бренда (SVG) | `objects-logos/ct_brand_{snake_case}.svg` | `objects-logos/ct_brand_gerald_genta.svg` |
| Логотип бренда (PNG) | `objects-logos/ct_brand_{snake_case}.png` | `objects-logos/ct_brand_gerald_genta.png` |
| Фото часов | `objects-watches/ct_product_line_{name}.png` | `objects-watches/ct_product_line_junghans_sport.png` |

**Порядок поиска:** `.svg` → `.png` → `logo: null` (текстовый fallback)
**Рабочий скрипт:** `report-pdf/.agents/scripts/download_missing.cjs` — адаптировать под нужные бренды.

**Не найдено в MinIO** → `logo: null` → текстовый fallback (нет пустых квадратов)

### Шаг 1.3 — Создать слайды

**Метод:** скопировать слайд предыдущего месяца, заменить данные.

```bash
cp src/components/slides/SlideV2Feb_05.tsx src/components/slides/SlideV2Mar_05.tsx
```

В новом файле:
- Заменить месяц в subtitle
- **Перезаписать ВЕСЬ массив данных целиком** (не точечные правки)
- Обновить импорты логотипов
- Зарегистрировать в `App.tsx` → массив `REPORTS`

### Шаг 1.4 — Утверждение

```bash
npm run dev  # → localhost:5173
```

Пользователь проверяет → правки → пока не скажет «ок».

### Шаг 1.5 — Деплой PDF

```bash
git add . && git commit -m "feat(slides): MAR 2026 report" && git push && npm run deploy
```

**Live:** https://chife-mod.github.io/watch360-linkedin-pdf/

---

## ФАЗА 2 — Создание Remotion-анимации

### Вход: Утверждённые PDF-слайды (Фаза 1 завершена)

### Шаг 2.1 — Синхронизация ассетов

```bash
# Скопировать все ассеты из PDF в Remotion
rsync -av report-pdf/public/assets/ report-remotion/public/assets/
```

### Шаг 2.2 — Конвертация слайдов (1:1 из PDF)

**Алгоритм для КАЖДОГО слайда:**

```
1. Открыть PDF-компонент: report-pdf/src/components/slides/SlideV2[Month]_XX.tsx
2. Открыть v2.css — выписать ВСЕ числовые значения используемых классов
3. Создать Remotion-компонент: report-remotion/src/[month]/[Month]SlideXX.tsx
4. Скопировать JSX 1:1, заменив:
   - className="..." → style={{ ... }} с ТОЧНЫМИ значениями из v2.css
   - <img src={...}> → <Img src={staticFile(...)} />
   - import from '/assets/...' → staticFile("assets/...")
5. Добавить ТОЛЬКО анимацию (spring/interpolate)
6. НЕ МЕНЯТЬ ни одно числовое значение
```

### Справочник v2.css → inline-стили

| CSS-класс | Inline-стиль (ТОЧНЫЕ значения) |
|---|---|
| `.v2-slide` | `width: 1080, height: 1350` |
| `.v2-top` | `position: absolute, top: 0, left: 0, width: 1080, height: 405, background: #F0EFEE` |
| `.v2-bottom` | `position: absolute, top: 405, left: 0, width: 1080, height: 945, background: #3A3935` |
| `.v2-header` | `position: absolute, top: 120, left: 100, right: 100, display: flex, alignItems: center, justifyContent: space-between` |
| `.v2-header__logo-symbol` | `height: 56` |
| `.v2-header__logo-wordmark` | `height: 30` |
| `.v2-header__url` | `fontSize: 26, letterSpacing: 3.12px, uppercase, color: #3A3935` |
| `.v2-title` | `position: absolute, top: 213, left: 100, width: 889, fontSize: 100, fontWeight: 400, lineHeight: 0.93, uppercase, color: #A98155` |
| `.v2-subtitle` | `top: 317, left: 100, width: 880, fontSize: 49, lineHeight: 1, uppercase, color: #3A3935` |
| `.v2-bars--simple` | `top: 454, left: 99, width: 880, flexDirection: column, gap: 21` |
| `.v2-bar-row--simple` | `width: 880, height: 56, flexDirection: column, gap: 12` |
| `.v2-bar-label-row--simple` | `display: flex, alignItems: center, justifyContent: space-between, height: 32` |
| `.v2-bar-label--simple` | `fontSize: 32, fontWeight: 400, lineHeight: 1, uppercase, color: #FFFFFF` |
| `.v2-bar-count--simple` | `fontSize: 32, color: #D49E64` |
| `.v2-bar-track--simple` | `height: 12, background: rgba(30,29,25,0.75), borderRadius: 500` |
| `.v2-bar-fill` | `background: #979797, borderRadius: 500` |
| `.v2-logo-box` | `width: 96, height: 96, background: #FFFFFF, borderRadius: 6, padding: 10` |
| `.v2-bar-content` | `marginLeft: 40, flexDirection: column, gap: 12` |
| `.v2-bar-label` | `fontSize: 48, uppercase, color: #FFFFFF` |
| `.v2-bar-count` | `fontSize: 48, color: #D49E64` |
| `.v2-bar-track` | `height: 16, borderRadius: 500` |
| `.v2-footnote` | `position: absolute, top: 1250, left: 100, fontSize: 24, color: rgba(255,255,255,0.5)` |
| Collection squares | `width: 136, height: 136, background: #FFFFFF, borderRadius: 6` |
| Collection container | `top: 445, left: 100, width: 880, gap: 20` |
| Collection outer row | `display: flex, alignItems: center, gap: 32, height: 136` |

### Типы слайдов и шаблоны

#### Тип A — Простые бары (SimpleBarSlide)
Слайды: 05, 06, 07, 08, 09, 11, 12, 14

Remotion: используй `SimpleBarSlideAnimated` — передай `title`, `subtitle`, `rows`.

```tsx
import { SimpleBarSlideAnimated } from "../SimpleBarSlideAnimated";

export function FebSlide06() {
    return (
        <SimpleBarSlideAnimated
            title="STRAP MATERIAL"
            subtitle="FEB 2026 NOVELTIES"
            rows={[
                { label: "Stainless Steel", count: 83 },
                // ... ТОЧНО из PDF
            ]}
        />
    );
}
```

#### Тип B — Бренды с логотипами (LogoBar)
Слайд: 04

Remotion: копируй JSX из PDF `SlideV2[Month]_04.tsx` → inline-стили.

#### Тип C — Collections (лого + фото + бар)
Слайды: 15, 15b

Remotion: копируй JSX из PDF `SlideV2[Month]_15.tsx`.
**Важно:** строки с длинными названиями (2+ строки текста):
- Внешний ряд: `alignItems: "center"` — выравнивание по центру карточки
- Блок с баром: `height: "100%", justifyContent: "flex-end", paddingBottom: 40` — бар прижат к низу
- Label-count ряд: `alignItems: "flex-end"` — число выравнивается по последней строке текста

#### Тип D — Refs in Media (лого + фото + название + ref)
Слайды: 10, 10b

Remotion: копируй JSX из PDF `SlideV2[Month]_10.tsx`.

#### Тип E — Cover
Слайд: 01

Remotion: особый, с анимированными счётчиками и watch-изображением.
`objectFit: "cover"`, `objectPosition: "center top"` для фото часов.

### Шаг 2.3 — Регистрация в Root.tsx

```tsx
// Root.tsx — Folder per month
<Folder name="February-2026">
    <Composition id="FebCover" component={FebCover} ... />
    <Composition id="FebSlide04" component={FebSlide04} ... />
    // ... каждый слайд отдельной Composition
    <Composition id="FebFullVideo" component={FebFullVideo}
        durationInFrames={SLIDE_DURATION * N_SLIDES} ... />
</Folder>
```

**FebFullVideo** — `<Series>` со всеми слайдами в порядке из `App.tsx` PDF-проекта.

### Шаг 2.4 — Проверка

```bash
cd report-remotion && npx tsc --noEmit  # 0 ошибок
npm run dev  # → localhost:7100
```

Открыть каждый слайд отдельно + `FebFullVideo` целиком.

---

## Дизайн-система (справочник)

| Параметр | Значение |
|---|---|
| Размер слайда | 1080 × 1350 px (4:5 portrait) |
| Шрифт | Lato Regular 400 — **везде, нигде Bold** |
| FPS | 30 |
| Длительность слайда | 5 сек = 150 frames |
| Заголовок | 100px `#A98155` (gold) |
| Cover заголовок | 108px (исключение) |
| Подзаголовок | 49px `#3A3935` (charcoal) |
| Sand panel | `#F0EFEE` h=405px |
| Dark panel | `#3A3935` h=945px |
| URL | www.watch360.ai, 26px, right |
| Logo bar rows | h=96, gap=14, logo 96×96 |
| Simple bar rows | h=56, gap=21, labels 32px |
| Logo bar labels | 48px |
| Collection squares | 136×136, gap=4 |
| Bar fills | `#979797` |
| Bar counts | `#D49E64` (gold accent) |
| Bar track | `rgba(30,29,25,0.75)`, h=12 (simple) / h=16 (logo) |
| Footnote | 24px `rgba(255,255,255,0.5)` top=1250 |

---

## Стандартная анимация Remotion

Все слайды используют одинаковый паттерн:

```tsx
// Title — fade up
const title = useFadeUp(frame, fps, 0.25, 120);

// Subtitle — fade up с задержкой
const subtitle = useFadeUp(frame, fps, 0.4);

// Row — staggered slide-in
const rowAnim = spring({
    frame, fps,
    delay: Math.round((0.5 + i * 0.08) * fps),
    config: { damping: 200 },
});

// Bar width — animated fill
const barW = useBarWidth(frame, fps, 0.6 + i * 0.08, (count / max) * 100);
```

**Shared-компоненты** (`shared.tsx`): `SlideBackground`, `SlideHeader`, `SimpleBar`, `useFadeUp`, `useBarWidth`.

---

## Чеклист выпуска нового месяца

### Фаза 1 (PDF)
- [ ] Excel получен и распарсен без ошибок
- [ ] Лого скачаны, fallback для отсутствующих
- [ ] Слайды созданы копированием предыдущего месяца
- [ ] Все titles — одна строка
- [ ] Пользователь утвердил на localhost:5173
- [ ] Деплой на GitHub Pages

### Фаза 2 (Remotion)
- [ ] Ассеты синхронизированы (`rsync`)
- [ ] Каждый слайд = 1:1 копия PDF + анимация
- [ ] Все значения из v2.css, ничего не придумано
- [ ] `npx tsc --noEmit` = 0 ошибок
- [ ] Визуальная проверка каждого слайда в Studio
- [ ] FebFullVideo (или FullVideo) проиграно целиком
- [ ] Предыдущие месяцы НЕ затронуты

---

## Критические ошибки, которые НЕ ДОПУСКАТЬ

| Ошибка | Почему плохо | Как правильно |
|---|---|---|
| Другой fontSize в Remotion | Визуальное расхождение с PDF | Брать ТОЧНОЕ значение из v2.css |
| `alignItems: flex-start` вместо `center` | Текст едет вверх от карточки | Копировать alignment из PDF JSX |
| `objectFit: fill` для изображений | Деформация/растяжение | `objectFit: cover` + `objectPosition` |
| Точечные правки в массивах данных | Синтаксические ошибки | Перезаписывать ВЕСЬ массив |
| Изменение январских слайдов | Сломать утверждённое | Работать ТОЛЬКО в папке нового месяца |
| CSV парсинг через grep/sed | Ломает структуру колонок | Только openpyxl/pandas |
