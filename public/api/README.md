# Meeraji Hospital — PHP Backend (NO DATABASE!)

File-based storage. Koi MySQL nahi chahiye. Sab kuch JSON files + uploads folder me save hota hai.

## GoDaddy Upload Steps

1. **Build React app** locally → `npm run build` (dist/ folder banega)
2. **Upload to GoDaddy** `public_html/`:
   - `dist/` ke andar ki saari files → `public_html/`
   - Pura `public/api/` folder → `public_html/api/`
3. **Permissions** (cPanel File Manager → Right-click → Permissions):
   - `public_html/api/uploads/` → **755**
   - `public_html/api/data/` → **755**
   - `data/posts.json`, `data/gallery.json` → **644**
4. **Admin login**: `admin` / `meeraji@2026`
   (badalne ke liye `api/config.php` me `ADMIN_USER` / `ADMIN_PASS` edit karo)

## Folder Structure on Server

```
public_html/
├── index.html
├── assets/...
└── api/
    ├── config.php
    ├── login.php
    ├── posts.php
    ├── gallery.php
    ├── data/        (JSON storage — web access blocked)
    │   ├── posts.json
    │   └── gallery.json
    └── uploads/     (uploaded images)
```

## API

- `GET/POST/DELETE /api/posts.php`
- `GET/POST/DELETE /api/gallery.php`
- `POST/DELETE/GET /api/login.php`

## Test Locally

```bash
cd public/api && php -S localhost:8000
```