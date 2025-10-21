<?php
header("Content-Type: application/json");

// --- Datenbankverbindung ---
$servername = "sql210.infinityfree.com";
$username = "if0_36777011";
$password = "mkkVergleich";
$dbname = "if0_36777011_AmonsLernSeite";

// Verbindung herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Fehler prüfen
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Verbindung fehlgeschlagen: " . $conn->connect_error]);
    exit;
}

// Sicherstellen, dass es mindestens einen Datensatz gibt
$conn->query("INSERT IGNORE INTO zahlen (id, wert) VALUES (1, 0)");

// --- GET: Wert abrufen ---
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT wert FROM zahlen WHERE id = 1");
    $row = $result->fetch_assoc();
    echo json_encode(["punkte" => (int)$row['wert']]);
    $conn->close();
    exit;
}

// --- POST: Wert ändern ---
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $delta = isset($_POST['delta']) ? (int)$_POST['delta'] : 0;

    // Wert aktualisieren
    $conn->query("UPDATE zahlen SET wert = GREATEST(0, wert + $delta) WHERE id = 1");

    // Neuen Wert abrufen
    $result = $conn->query("SELECT wert FROM zahlen WHERE id = 1");
    $row = $result->fetch_assoc();

    echo json_encode(["success" => true, "punkte" => (int)$row['wert']]);
    $conn->close();
    exit;
}

// --- Wenn Methode nicht erlaubt ---
http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);
$conn->close();
?>