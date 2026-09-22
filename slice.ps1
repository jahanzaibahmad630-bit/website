Add-Type -AssemblyName System.Drawing
$srcPath = "c:\Users\LAPTOP GODAM\Documents\grand operation\website\wavaid-10-screens.jpg"
$outDir = "c:\Users\LAPTOP GODAM\Documents\grand operation\website\screens"
if (!(Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force }

$bmp = New-Object System.Drawing.Bitmap($srcPath)

$names = @(
  "01-Discover-Your-Voice",
  "02-Who-Are-You",
  "03-Home-Dashboard",
  "04-Active-Recording",
  "05-Take-Saved",
  "06-Analysis-Checklist",
  "07-Sessions-Library",
  "08-Multi-Take-Comparison",
  "09-Vocal-Coaching-Score",
  "10-Practice-Drill"
)

$colWidth = 196
$colHeight = 385
$xOffsets = @(48, 276, 502, 730, 958)
$yOffsets = @(60, 465)

$idx = 0
for ($r = 0; $r -lt 2; $r++) {
  for ($c = 0; $c -lt 5; $c++) {
    $rect = New-Object System.Drawing.Rectangle($xOffsets[$c], $yOffsets[$r], $colWidth, $colHeight)
    $crop = $bmp.Clone($rect, $bmp.PixelFormat)
    $savePath = Join-Path $outDir "$($names[$idx]).png"
    $crop.Save($savePath, [System.Drawing.Imaging.ImageFormat]::Png)
    $crop.Dispose()
    Write-Host "Successfully saved: $($names[$idx]).png"
    $idx++
  }
}
$bmp.Dispose()
Write-Host "All 10 screens sliced cleanly!"
