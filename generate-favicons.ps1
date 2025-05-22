Add-Type -AssemblyName System.Drawing

function Resize-Image {
    param(
        [string]$InputFile,
        [string]$OutputFile,
        [int]$Width,
        [int]$Height
    )
    $originalImage = [System.Drawing.Image]::FromFile($InputFile)
    $newImage = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($newImage)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($originalImage, 0, 0, $Width, $Height)
    $newImage.Save($OutputFile)
    $graphics.Dispose()
    $newImage.Dispose()
    $originalImage.Dispose()
}

# Source image
$sourceImage = "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\uchi_logo.png"

# Generate favicon-16x16.png
Resize-Image -InputFile $sourceImage -OutputFile "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\favicon-16x16.png" -Width 16 -Height 16

# Generate favicon-32x32.png
Resize-Image -InputFile $sourceImage -OutputFile "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\favicon-32x32.png" -Width 32 -Height 32

# Generate apple-touch-icon.png (180x180)
Resize-Image -InputFile $sourceImage -OutputFile "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\apple-touch-icon.png" -Width 180 -Height 180

# Generate android-chrome-192x192.png
Resize-Image -InputFile $sourceImage -OutputFile "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\android-chrome-192x192.png" -Width 192 -Height 192

# Generate android-chrome-256x256.png
Resize-Image -InputFile $sourceImage -OutputFile "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\android-chrome-256x256.png" -Width 256 -Height 256

# Generate mstile-150x150.png
Resize-Image -InputFile $sourceImage -OutputFile "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\mstile-150x150.png" -Width 150 -Height 150

Write-Host "Favicon images generated successfully!"
