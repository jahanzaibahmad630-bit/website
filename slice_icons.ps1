Add-Type -AssemblyName System.Drawing

$masterPath = "C:\Users\LAPTOP GODAM\.gemini\antigravity\brain\242d870d-6350-4395-bbef-0a76ad2dad80\.user_uploaded\media_1790398057509.png"
if (!(Test-Path $masterPath)) {
    $masterPath = "C:\Users\LAPTOP GODAM\.gemini\antigravity\brain\242d870d-6350-4395-bbef-0a76ad2dad80\.user_uploaded\media_1790398344999.png"
}
$src = [System.Drawing.Bitmap]::FromFile($masterPath)
Write-Host "Master image loaded: $($src.Width)x$($src.Height)"

$outDir = Join-Path $PSScriptRoot "assets\icons"
if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

# Calibrated bounding boxes for the 12 frosted glass squircles
$calibrated = @(
    # Row 1: Heimweg-Optionen
    @{ Name = "icon_1_walk";     X = 49;  Y = 31;  W = 56; H = 56 },
    @{ Name = "icon_2_train";    X = 296; Y = 31;  W = 56; H = 56 },
    @{ Name = "icon_3_taxi";     X = 550; Y = 31;  W = 56; H = 56 },
    @{ Name = "icon_4_bike";     X = 801; Y = 31;  W = 56; H = 56 },

    # Row 2: Vertrauens- & Sicherheits-Badges
    @{ Name = "icon_5_verified"; X = 49;  Y = 260; W = 56; H = 56 },
    @{ Name = "icon_6_lantern";  X = 296; Y = 260; W = 56; H = 56 },
    @{ Name = "icon_7_home";     X = 552; Y = 260; W = 56; H = 56 },
    @{ Name = "icon_8_care";     X = 801; Y = 260; W = 56; H = 56 },

    # Row 3: Begleiter-Filter & Wohlfühl-Kriterien
    @{ Name = "icon_9_flinta";   X = 48;  Y = 490; W = 78; H = 60 },
    @{ Name = "icon_10_direct";  X = 296; Y = 492; W = 56; H = 56 },
    @{ Name = "icon_11_moon";    X = 550; Y = 492; W = 56; H = 56 },
    @{ Name = "icon_12_knot";    X = 801; Y = 492; W = 56; H = 56 }
)

foreach ($c in $calibrated) {
    $rect = New-Object System.Drawing.Rectangle($c.X, $c.Y, $c.W, $c.H)
    $cropped = $src.Clone($rect, $src.PixelFormat)
    $outPath = Join-Path $outDir "$($c.Name).png"
    $cropped.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $cropped.Dispose()
    Write-Host "Exported $($c.Name).png from ($($c.X), $($c.Y), $($c.W), $($c.H))"
}

$src.Dispose()
Write-Host "All 12 icons exported successfully!"
