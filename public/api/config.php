<?php
// ============================================
// GoDaddy MySQL Database Configuration
// ============================================
// IMPORTANT: Update these 4 values from your GoDaddy cPanel → MySQL Databases

define('DB_HOST', 'localhost');           // Usually 'localhost' on GoDaddy
define('DB_NAME', 'your_db_name');        // e.g. abc1234_meeraji_db
define('DB_USER', 'your_db_user');        // e.g. abc1234_admin
define('DB_PASS', 'your_db_password');    // The password you set

// Admin login credentials (change these!)
define('ADMIN_USER', 'admin');
define('ADMIN_PASS', 'meeraji@2026');

// ============================================
// DO NOT EDIT BELOW
// ============================================

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// PDO connection
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed', 'message' => $e->getMessage()]);
    exit;
}

// Session for admin auth
session_start();

function isAdmin() {
    return isset($_SESSION['is_admin']) && $_SESSION['is_admin'] === true;
}

function requireAdmin() {
    if (!isAdmin()) {
        http_response_code(401);
        echo json_encode(['error' => 'Unauthorized. Please login as admin.']);
        exit;
    }
}

function jsonInput() {
    return json_decode(file_get_contents('php://input'), true) ?? [];
}

// Upload base URL (relative to /api/)
define('UPLOAD_DIR', __DIR__ . '/uploads/');
define('UPLOAD_URL', '/api/uploads/');

if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}

function saveUploadedImage($base64OrFile) {
    // Accept base64 data URL
    if (is_string($base64OrFile) && preg_match('/^data:image\/(\w+);base64,/', $base64OrFile, $m)) {
        $ext = strtolower($m[1]);
        if (!in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'])) return null;
        $data = base64_decode(substr($base64OrFile, strpos($base64OrFile, ',') + 1));
        if ($data === false) return null;
        $filename = uniqid('img_', true) . '.' . $ext;
        file_put_contents(UPLOAD_DIR . $filename, $data);
        return UPLOAD_URL . $filename;
    }
    return $base64OrFile; // already a URL
}