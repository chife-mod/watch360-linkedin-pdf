import pandas as pd
import sys

file_path = "W360 _ Monthly Novelties Pulse (1).xlsx"
try:
    xl = pd.ExcelFile(file_path)
    sheet_name = [s for s in xl.sheet_names if 'Feb' in s or '215' in s][0]
    df = xl.parse(sheet_name, header=None)
except Exception as e:
    print(f"Error reading Excel: {e}")
    sys.exit(1)

slides = {}
current_slide = None

for col_idx in range(df.shape[1]):
    col = df.iloc[:, col_idx].dropna().tolist()
    if not col: continue
    
    header = str(col[0]).strip()
    if 'REFS IN MEDIA' in header.upper() or 'COLLECTIONS' in header.upper():
        print(f"--- Found Slide Column: {header} ---")
        for i, val in enumerate(col[1:]):
            print(f"Row {i+1}: {val}")
        print()

print("Finished parsing.")
