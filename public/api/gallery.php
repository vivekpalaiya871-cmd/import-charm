<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

try {
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM gallery_photos ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll());

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

        $stmt = $pdo->prepare("INSERT INTO gallery_photos (image_url, caption, category) VALUES (?, ?, ?)");
        $stmt->execute([$imageUrl, $caption, $category]);

        echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);

    } elseif ($method === 'DELETE') {
        requireAdmin();
        $id = $_GET['id'] ?? null;
        if (!$id) { http_response_code(400); echo json_encode(['error' => 'ID required']); exit; }

        $stmt = $pdo->prepare("SELECT image_url FROM gallery_photos WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if ($row && $row['image_url'] && strpos($row['image_url'], UPLOAD_URL) === 0) {
            $file = UPLOAD_DIR . basename($row['image_url']);
            if (file_exists($file)) @unlink($file);
        }

        $stmt = $pdo->prepare("DELETE FROM gallery_photos WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['success' => true]);

    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}