# UchiVibe Music - Branding Update Script
# This script updates all references to legacy styling and replaces them with UchiVibe branding
# This file needs to be run with PowerShell

$files = @(
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\index.html",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\pages\404.js",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-2",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-3"
)

foreach ($file in $files) {
    Write-Host "Processing $file..."
    $content = Get-Content $file -Raw
    
    # 1. Replace the SVG logo in any remaining sections
    $logoPattern = '<div class="bg-\[#ea366f\] p-4"><svg xmlns="http://www\.w3\.org/2000/svg".*?</path></svg></div>'
    $logoReplacement = '<div class="bg-[#ea366f] p-4"><img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" /></div>'
    $content = $content -replace $logoPattern, $logoReplacement
    
    # 2. Update all bg-babyBlue classes to bg-uchi-blue for consistent naming
    $content = $content -replace 'bg-babyBlue', 'bg-uchi-blue'
    
    # 3. Make sure all instances of #d2bad8 are changed to #08b4c2
    $content = $content -replace '#d2bad8', '#08b4c2'
    
    # 4. Make sure all instances of #ff0000 or rgb(255 0 0) are changed to #ea366f or rgb(234 54 111)
    $content = $content -replace '#ff0000', '#ea366f'
    $content = $content -replace 'rgb\(255 0 0', 'rgb(234 54 111'
    
    # Save the modified file
    Set-Content -Path $file -Value $content
    Write-Host "Updated branding in $file"
}

# Update the CSS file to ensure all styles are correctly overridden
$cssFile = "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\uchi-theme.css"
$cssContent = Get-Content $cssFile -Raw

# Ensure the CSS file has all necessary overrides
if (-not ($cssContent -match "\.bg-uchi-blue")) {
    $cssAddition = @"

/* Additional override for bg-babyBlue to bg-uchi-blue */
.bg-uchi-blue {
    --tw-bg-opacity: 1 !important;
    background-color: rgb(8 180 194 / var(--tw-bg-opacity)) !important;
}
"@
    Add-Content -Path $cssFile -Value $cssAddition
    Write-Host "Added bg-uchi-blue class to CSS file"
}

Write-Host "All files have been updated with UchiVibe branding!"
Write-Host "Colors updated: #ff0000 -> #ea366f, #d2bad8 -> #08b4c2"
Write-Host "Classes updated: bg-babyBlue -> bg-uchi-blue"
