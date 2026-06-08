<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$FILE = 'posts.json';

try {
    if ($method === 'GET') {
        $posts = readData($FILE);
        usort($posts, fn($a, $b) => strcmp($b['created_at'] ?? '', $a['created_at'] ?? ''));
        echo json_encode($posts);

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

        $posts = readData($FILE);
        $newPost = [
            'id'         => uniqid('post_', true),
            'title'      => $title,
            'content'    => $content,
            'image_url'  => $imageUrl,
            'author'     => $author,
            'created_at' => date('Y-m-d H:i:s'),
        ];
        array_unshift($posts, $newPost);
        writeData($FILE, $posts);
        echo json_encode(['success' => true, 'post' => $newPost]);

    } elseif ($method === 'DELETE') {
        requireAdmin();
        $id = $_GET['id'] ?? null;
        if (!$id) { http_response_code(400); echo json_encode(['error' => 'ID required']); exit; }

        $posts = readData($FILE);
        $kept = [];
        foreach ($posts as $p) {
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