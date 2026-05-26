<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

try {
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM blog_posts ORDER BY created_at DESC");
        echo json_encode($stmt->fetchAll());

    } elseif ($method === 'POST') {
        requireAdmin();
        $input = jsonInput();
        $title   = trim($input['title'] ?? '');
        $content = trim($input['content'] ?? '');
        $image   = $input['image'] ?? null;
        $author  = trim($input['author'] ?? 'Admin');

        if (!$title || !$content) {
            http_response_code(400);
            echo json_encode(['error' => 'Title and content required']);
            exit;
        }

        $imageUrl = $image ? saveUploadedImage($image) : null;

        $stmt = $pdo->prepare("INSERT INTO blog_posts (title, content, image_url, author) VALUES (?, ?, ?, ?)");
        $stmt->execute([$title, $content, $imageUrl, $author]);

        echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);

    } elseif ($method === 'DELETE') {
        requireAdmin();
        $id = $_GET['id'] ?? null;
        if (!$id) { http_response_code(400); echo json_encode(['error' => 'ID required']); exit; }

        $stmt = $pdo->prepare("SELECT image_url FROM blog_posts WHERE id = ?");
        $stmt->execute([$id]);
        $row = $stmt->fetch();
        if ($row && $row['image_url'] && strpos($row['image_url'], UPLOAD_URL) === 0) {
            $file = UPLOAD_DIR . basename($row['image_url']);
            if (file_exists($file)) @unlink($file);
        }

        $stmt = $pdo->prepare("DELETE FROM blog_posts WHERE id = ?");
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