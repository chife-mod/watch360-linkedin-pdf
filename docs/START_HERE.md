# Watch360 Initialization Protocol

## Welcome, AI Agent!
If you are starting a new session on this project, you MUST read and acknowledge these rules before processing any user requests. This guarantees speed, simplicity, and zero data-mapping errors.

## The "Zero Error" Data Sync Rule
Our primary goal is 100% data fidelity between the source of truth (Google Sheets / Excel) and the React components rendering the presentation slides (`SlideV2*.tsx`).

**NEVER attempt to do the following:**
- ❌ Do NOT read raw CSV or TSV data visually via terminal commands (`cat`, `grep`). You will misread the commas and put Case Material data into Strap Material slides.
- ❌ Do NOT do "surgical" array edits (e.g., trying to swap line 14 with line 16).

**ALWAYS use the following workflow:**
1. **Request the File:** Ask the user to drop the latest `.csv` or `.xlsx` source file directly into the chat.
2. **True Programmatic Parsing:** Once you have the file, use a robust parser (e.g., Python's `csv` module or `pandas`) to extract the exact column strictly by its logical index and filter out empty cells. 
3. **Array Overwrite:** Take the isolated array of values from your parser and completely overwrite the `rows=[...]` constant inside the target `.tsx` slide file. Do not merge—replace wholesale.
4. **Top-10 Constraint:** Remember that components like `SimpleBarSlide` can only physically fit 10 rows on a 4:5 resolution slide. Automatically truncate data arrays to the Top 10 elements (unless instructed to split into a second slide like we do for Collections and REFs).

## Deployment Protocol
- ❌ **Do not auto-deploy.** No `git commit` or `npm run deploy` should be run without the user's explicit sign-off on the local visual changes.
- 1. Fix the file.
- 2. Ask the user to verify on `localhost`.
- 3. Only if the user says "OK", execute `git commit` and `npm run deploy` via `gh-pages`.

## Project Structure Context
- Slides components are in `src/components/slides/`.
- February 2026 slides are named `SlideV2Feb_*.tsx`.
- Slide order is strictly defined in `App.tsx` matching the column order in the source table.
