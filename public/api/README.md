# Meeraji Hospital - PHP Backend Setup (GoDaddy)

## Step 1: Upload files
Upload the entire `api/` folder to your GoDaddy `public_html/` directory.

```
public_html/
├── index.html
├── assets/...
└── api/
    ├── config.php
    ├── login.php
    ├── posts.php
    ├── gallery.php
    ├── install.sql
    ├── .htaccess
    └── uploads/   (chmod 755)
```

## Step 2: Create MySQL Database
1. GoDaddy cPanel → **MySQL Databases**
2. Create database (e.g. `abc1234_meeraji`)
3. Create user + password, add user with **All Privileges**

## Step 3: Import schema
cPanel → **phpMyAdmin** → your database → **SQL** tab → paste `install.sql` → Go

## Step 4: Edit `config.php`
Update these 4 lines:
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'abc1234_meeraji');
define('DB_USER', 'abc1234_admin');
define('DB_PASS', 'YourPassword');
```
Also change `ADMIN_USER` / `ADMIN_PASS`.

## Step 5: Permissions
Set `api/uploads/` to **755** via File Manager.

## Step 6: Test
Open `https://yoursite.com/api/posts.php` — should return `[]`.

## API Endpoints
| Endpoint | Method | Auth | Body |
|---|---|---|---|
| `/api/login.php` | POST | - | `{username, password}` |
| `/api/login.php` | DELETE | - | logout |
| `/api/posts.php` | GET | - | list |
| `/api/posts.php` | POST | Admin | `{title, content, image, author}` |
| `/api/posts.php?id=X` | DELETE | Admin | - |
| `/api/gallery.php` | GET | - | list |
| `/api/gallery.php` | POST | Admin | `{image, caption, category}` |
| `/api/gallery.php?id=X` | DELETE | Admin | - |

Images = base64 data URL (`data:image/jpeg;base64,...`).