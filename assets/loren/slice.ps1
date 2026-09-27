Add-Type -AssemblyName System.Drawing

function Crop-Image($srcPath, $dstPath, $x, $y, $w, $h) {
    $src = [System.Drawing.Image]::FromFile($srcPath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $bmp.Save($dstPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    $src.Dispose()
    Write-Host "Created $dstPath ($w x $h)"
}

$dir = "c:\Users\LAPTOP GODAM\Documents\grand operation\website\assets\loren"

# 1. Clean Hero Banner (0, 0 to 679, 435)
Crop-Image "$dir\hero-iris-noir.png" "$dir\hero-banner.png" 0 0 679 435

# 2. Iris Noir Product + Flower Art (right portion of hero: 330, 80 to 345, 350)
Crop-Image "$dir\hero-iris-noir.png" "$dir\product-iris-noir.png" 340 70 335 365

# 3. Magnolia Cendree (0, 0 to 338, 185) from collection-ritual.png
Crop-Image "$dir\collection-ritual.png" "$dir\product-magnolia.png" 0 0 338 180

# 4. Nuit de Jasmin (338, 0 to 344, 185) from collection-ritual.png
Crop-Image "$dir\collection-ritual.png" "$dir\product-jasmin.png" 338 0 344 180

# 5. The Ritual Scene (0, 215 to 682, 235) from collection-ritual.png
Crop-Image "$dir\collection-ritual.png" "$dir\ritual-scene.png" 0 215 682 235

# 6. Fleur d'Orchidee (0, 240 to 340, 210) from manifesto-duo.png
Crop-Image "$dir\manifesto-duo.png" "$dir\product-fleur.png" 0 240 340 210

# 7. Tubereuse Royale (340, 240 to 339, 210) from manifesto-duo.png
Crop-Image "$dir\manifesto-duo.png" "$dir\product-tubereuse.png" 340 240 339 210

Write-Host "All LORÉN assets successfully sliced and cleaned!"
