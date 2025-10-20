<?php
header("Content-Type: application/json");

$file = __DIR__ . '/punkte.json';

// Wenn die Datei fehlt, neu anlegen
if (!file_exists($file)) {
    file_put_contents($file, json_encode(["punkte" => 0], JSON_PRETTY_PRINT));
}

// Aktuelle Punkte aus Datei laden
$data = json_decode(file_get_contents($file), true);
if (!is_array($data) || !isset($data['punkte'])) {
    $data = ["punkte" => 0];
}

$current = (int)$data['punkte'];

// --- GET: Punktestand abrufen ---
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode(["punkte" => $current]);
    exit;
}

// --- POST: Punkte erhöhen ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $delta = isset($_POST['delta']) ? (int)$_POST['delta'] : 0;
    $new = max(0, $current + $delta); // verhindert negative Werte

    $data['punkte'] = $new;
    $ok = file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX);

    if ($ok === false) {
        http_response_code(500);
        echo json_encode(["error" => "Fehler beim Schreiben."]);
        exit;
    }

    echo json_encode(["success" => true, "punkte" => $new]);
    exit;
}

// Falls keine erlaubte Methode
http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);