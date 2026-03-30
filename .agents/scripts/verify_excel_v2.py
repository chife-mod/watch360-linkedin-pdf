import pandas as pd

file_path = "W360 _ Monthly Novelties Pulse (1).xlsx"
xl = pd.ExcelFile(file_path)
sheet_name = [s for s in xl.sheet_names if 'Feb' in s or '215' in s][0]
df = xl.parse(sheet_name, header=None)

print(f"✅ Successfully read sheet: {sheet_name}")
print(f"Total Rows: {df.shape[0]}, Total Cols: {df.shape[1]}\n")

for start_col in range(df.shape[1]):
    header_val = str(df.iloc[0, start_col]).strip()
    
    # We only care about major slide headers
    if 'REFS IN MEDIA' in header_val.upper() or 'COLLECTIONS' in header_val.upper():
        print(f"=== Found Section: {header_val} @ Column {start_col} ===")
        
        # Typically, a slide section has a few sub-columns (Name, Count, SF_GUID, Photo URL/GUID, etc.)
        # Let's inspect the next 5 columns to see the structure
        sub_headers = []
        for c in range(start_col, min(start_col+5, df.shape[1])):
            sub_h = str(df.iloc[1, c]).replace('\n', ' ').strip()
            sub_headers.append(sub_h)
        print(f"Detected Sub-Headers: {sub_headers}")
        
        # Print top 15 rows for these columns
        for idx in range(2, 20):
            row_data = []
            for c in range(start_col, min(start_col+5, df.shape[1])):
                val = str(df.iloc[idx, c]).replace('\n', ' - ').strip()
                if val == 'nan': val = ''
                row_data.append(val)
            
            # Stop if row is completely empty
            if not any(row_data): continue
            print(f"Row {idx}: {row_data}")
            
            if 'NOTE' in row_data[0].upper():
                break # Reached the footnote
        print("\n")
