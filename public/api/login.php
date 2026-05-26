<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    $input = jsonInput();
    $user = $input['username'] ?? '';
    $pass = $input['password'] ?? '';

    if ($user === ADMIN_USER && $pass === ADMIN_PASS) {
        $_SESSION['is_admin'] = true;
        echo json_encode(['success' => true, 'message' => 'Logged in']);
    } else {
        http_response_code(401);
        echo json_encode(['success' => false, 'error' => 'Invalid credentials']);
    }
} elseif ($method === 'DELETE') {
    session_destroy();
    echo json_encode(['success' => true, 'message' => 'Logged out']);
} elseif ($method === 'GET') {
    echo json_encode(['is_admin' => isAdmin()]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}