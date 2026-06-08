<?php
// ============================================
// FILE-BASED STORAGE (No database required!)
// ============================================
// Posts & gallery saved as JSON files in /api/data/
// Images saved in /api/uploads/

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
define('DATA_DIR', __DIR__ . '/data/');

if (!is_dir(UPLOAD_DIR)) {
    mkdir(UPLOAD_DIR, 0755, true);
}
if (!is_dir(DATA_DIR)) {
    mkdir(DATA_DIR, 0755, true);
}

function readData($file) {
    $path = DATA_DIR . $file;
    if (!file_exists($path)) return [];
    $raw = file_get_contents($path);
    $arr = json_decode($raw, true);
    return is_array($arr) ? $arr : [];
}

function writeData($file, $data) {
    $path = DATA_DIR . $file;
    $fp = fopen($path, 'c+');
    if (!$fp) return false;
    flock($fp, LOCK_EX);
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT));
    fflush($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    return true;
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