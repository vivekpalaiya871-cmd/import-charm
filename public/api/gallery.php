<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$FILE = 'gallery.json';

try {
    if ($method === 'GET') {
        $photos = readData($FILE);
        usort($photos, fn($a, $b) => strcmp($b['created_at'] ?? '', $a['created_at'] ?? ''));
        echo json_encode($photos);

    } elseif ($method === 'POST') {
        requireAdmin();
        $input = jsonInput();
        $image    = $input['image'] ?? null;
        $caption  = trim($input['caption'] ?? '');
        $category = trim($input['category'] ?? '');

        if (!$image) {
            http_response_code(400);
            echo json_encode(['error' => 'Image required']);
            exit;
        }

        $imageUrl = saveUploadedImage($image);

        $photos = readData($FILE);
        $newPhoto = [
            'id'         => uniqid('pic_', true),
            'image_url'  => $imageUrl,
            'caption'    => $caption,
            'category'   => $category,
            'created_at' => date('Y-m-d H:i:s'),
        ];
        array_unshift($photos, $newPhoto);
        writeData($FILE, $photos);
        echo json_encode(['success' => true, 'photo' => $newPhoto]);

    } elseif ($method === 'DELETE') {
        requireAdmin();
        $id = $_GET['id'] ?? null;
        if (!$id) { http_response_code(400); echo json_encode(['error' => 'ID required']); exit; }

        $photos = readData($FILE);
        $kept = [];
        foreach ($photos as $p) {
            if (($p['id'] ?? '') == $id) {
                if (!empty($p['image_url']) && strpos($p['image_url'], UPLOAD_URL) === 0) {
                    $file = UPLOAD_DIR . basename($p['image_url']);
                    if (file_exists($file)) @unlink($file);
                }
            } else {
                $kept[] = $p;
            }
        }
        writeData($FILE, $kept);
        echo json_encode(['success' => true]);

    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}