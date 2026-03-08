import os

SRC = r"C:\Users\RUSLAN\Desktop\privatepaycheck\src"

FIXES = [
    ("вЂ\x93", "\u2014"),
    ("вЂ\x94", "\u2013"),
    ("вЂ\x99", "\u2019"),
    ("вЂ\x9c", "\u201c"),
    ("вЂ\x9d", "\u201d"),
    ("вЂ\xa6", "\u2026"),
    ("\xd0\x92\xc2\xa9", "\u00a9"),
    ("В©", "\u00a9"),
    ("В®", "\u00ae"),
    ("В·", "\u00b7"),
    ("в†\x92", "\u2192"),
    ("в†\x90", "\u2190"),
    ("в†\x91", "\u2191"),
    ("в†\x93", "\u2193"),
    ("вњ\x85", "\u2705"),
    ("вњ\x93", "\u2713"),
    ("вњ\xa8", "\u2728"),
    ("рџ\x92\xb0", "\U0001f4b0"),
    ("рџ\x94\x9d", "\U0001f4dd"),
    ("рџ\x92\xbc", "\U0001f4bc"),
    ("рџ\x94\x92", "\U0001f512"),
    ("рџ\x94\x8a", "\U0001f4ca"),
    ("рџ\x94\x85", "\U0001f4c5"),
    ("рџ\x92\xb5", "\U0001f4b5"),
    ("рџ\x8e\xaf", "\U0001f3af"),
    ("рџ\x92\xa1", "\U0001f4a1"),
    ("рџ\x91\x8b", "\U0001f44b"),
    ("рџ\x92\xaf", "\U0001f4af"),
]

def run():
    total_files = 0
    fixed_files = 0
    for root, dirs, files in os.walk(SRC):
        for fname in files:
            if fname.endswith(".tsx"):
                total_files += 1
                path = os.path.join(root, fname)
                try:
                    text = open(path, encoding="utf-8", errors="replace").read()
                    n = 0
                    for broken, correct in FIXES:
                        n += text.count(broken)
                        text = text.replace(broken, correct)
                    if n > 0:
                        open(path, "w", encoding="utf-8").write(text)
                        print(f"  Fixed {n:>3} symbols: {path}")
                        fixed_files += 1
                except Exception as e:
                    print(f"  ERROR: {path}: {e}")
    print(f"\nDone. Checked: {total_files}, Fixed: {fixed_files}")

run()
