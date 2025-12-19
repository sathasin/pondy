<?php
ini_set('display_errors', 0);

$host = 'localhost';
$db_name = 'u184589548_best';
$username = 'u184589548_best';
$password = 'Mail@best2025';

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Connection failed");
}

$id = $_GET['id'] ?? 0;

if (!$id) die("Invalid ID");

// Fetch Member
$stmt = $conn->prepare("SELECT * FROM members WHERE id = ?");
$stmt->execute([$id]);
$member = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$member) die("Member not found");

// Path to photo
$photoUrl = $member['photo_path'] ? '../' . str_replace('../', '', $member['photo_path']) : 'https://via.placeholder.com/150';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membership Card - <?php echo htmlspecialchars($member['name']); ?></title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Outfit', sans-serif;
            background: #f1f5f9;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }

        .card-container {
            width: 650px;
            height: 400px;
            background: #fff;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.15);
            overflow: hidden;
            display: flex;
            position: relative;
            border: 1px solid #eef2f6;
        }

        .sidebar {
            width: 38%;
            background: linear-gradient(145deg, #0284c7 0%, #0369a1 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 30px 20px;
            position: relative;
            color: white;
            text-align: center;
        }

        .sidebar-circle {
            position: absolute; top: -50px; left: -50px; width: 200px; height: 200px;
            background: rgba(255,255,255,0.05); border-radius: 50%;
        }

        .profile-img-container {
            position: relative; width: 140px; height: 140px; margin-bottom: 20px; z-index: 2;
        }

        .profile-img {
            width: 100%; height: 100%; object-fit: cover; border-radius: 50%;
            border: 4px solid rgba(255,255,255,0.9); box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .joined-text {
            font-size: 14px; font-weight: 500; opacity: 0.9;
        }

        .badge {
            background: rgba(255,255,255,0.2); padding: 6px 16px; border-radius: 50px;
            font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
            margin-top: 10px; border: 1px solid rgba(255,255,255,0.3);
        }

        .main-content {
            width: 62%; padding: 30px 35px; position: relative; display: flex; flex-direction: column;
        }

        .watermark {
            position: absolute; bottom: -20px; right: -20px; opacity: 0.03; transform: rotate(-15deg);
            font-size: 100px; font-weight: 900; color: #000; pointer-events: none; z-index: 0;
        }

        .header {
            display: flex; align-items: center; margin-bottom: 30px; border-bottom: 1px solid #f1f5f9; padding-bottom: 15px;
        }

        .logo-text {
            font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; line-height: 1.2;
        }

        .logo-sub {
            font-size: 10px; color: #64748b; font-weight: 500; text-transform: uppercase; letter-spacing: 1.5px; display: block;
        }

        .field-label {
            font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600; margin-bottom: 2px;
        }

        .field-value {
            font-size: 22px; color: #0f172a; font-weight: 700; margin-bottom: 4px;
        }

        .field-value-sm {
            font-size: 15px; color: #334155; font-weight: 600;
        }

        .membership-id {
            font-family: monospace; color: #0284c7; font-weight: 700; fontSize: 16px; letter-spacing: 1px;
        }

        .validity-tag {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;
            padding: 8px 20px; border-radius: 8px; font-size: 11px; font-weight: 700;
            text-transform: uppercase; letter-spacing: 1px; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.25);
            display: inline-flex; align-items: center; gap: 6px;
        }

        .download-btn {
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            background: #0f172a; color: white; border: none; padding: 12px 24px;
            border-radius: 50px; cursor: pointer; font-weight: 600; box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            transition: transform 0.2s; font-family: 'Outfit', sans-serif;
            display: flex; align-items: center; gap: 8px;
        }
        
        .download-btn:hover { transform: translateX(-50%) scale(1.05); }

        @media print {
            .download-btn { display: none; }
            body { background: white; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .card-container { box-shadow: none; border: 1px solid #ddd; }
            @page { margin: 0; size: auto; }
        }
    </style>
</head>
<body>

    <div class="card-container" id="card">
        <div class="sidebar">
            <div class="sidebar-circle"></div>
            <div class="profile-img-container">
                <img src="<?php echo htmlspecialchars($photoUrl); ?>" alt="Profile" class="profile-img">
            </div>
            <div class="joined-text">Joined <?php echo date('Y', strtotime($member['created_at'])); ?></div>
            <div class="badge">Lifetime Member</div>
        </div>

        <div class="main-content">
            <div class="watermark">BEST</div>
            
            <div class="header">
                <!-- Using text logo if no image provided, or standard placeholder -->
                <div>
                    <div class="logo-text">BEST PUDUCHERRY</div>
                    <span class="logo-sub">Community & Excellence</span>
                </div>
            </div>

            <div style="flex-grow: 1;">
                <div style="margin-bottom: 16px;">
                    <div class="field-label">Name</div>
                    <div class="field-value"><?php echo htmlspecialchars($member['name']); ?></div>
                </div>

                <div style="margin-bottom: 16px;">
                    <div class="field-label">Membership ID</div>
                    <div class="membership-id">MEM-<?php echo str_pad($member['id'], 4, '0', STR_PAD_LEFT); ?></div>
                </div>

                <div style="display: flex; gap: 20px;">
                    <div style="margin-bottom: 16px;">
                        <div class="field-label">Education</div>
                        <div class="field-value-sm"><?php echo htmlspecialchars($member['education']); ?></div>
                    </div>
                </div>
                <div>
                    <div class="field-label">Phone</div>
                    <div class="field-value-sm"><?php echo htmlspecialchars($member['phone']); ?></div>
                </div>
            </div>

            <div style="position: absolute; bottom: 30px; right: 35px;">
                <div class="validity-tag">
                    <span>★</span> Lifetime Validity
                </div>
            </div>
        </div>
    </div>

    <button class="download-btn" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download / Print Card
    </button>

</body>
</html>
