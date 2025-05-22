# UchiVibe Music - Update Border Classes Script
# This script updates all border-babyBlue classes to border-uchi-blue for consistent branding
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
    
    # Update all border-babyBlue classes to border-uchi-blue for consistent naming
    $updatedContent = $content -replace 'border-babyBlue', 'border-uchi-blue'
    
    # Update all occurrences of babyBlue in class attribute lists
    $updatedContent = $updatedContent -replace '\[&amp;&gt;\*\]:border-babyBlue', '[&amp;&gt;*]:border-uchi-blue'
    $updatedContent = $updatedContent -replace '\[&>\*\]:border-babyBlue', '[&>*]:border-uchi-blue'
    
    # Save the modified file if changes were made
    if ($content -ne $updatedContent) {
        Set-Content -Path $file -Value $updatedContent
        Write-Host "Updated border classes in $file"
    } else {
        Write-Host "No border class changes needed in $file"
    }
}

# Update the CSS file to ensure all styles are correctly overridden
$cssFile = "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\static\uchi-theme.css"
$cssContent = Get-Content $cssFile -Raw

# Ensure the CSS file has border-uchi-blue override
if (-not ($cssContent -match "\.border-uchi-blue")) {
    $cssAddition = @"

/* Additional override for border-babyBlue to border-uchi-blue */
.border-uchi-blue {
    --tw-border-opacity: 1 !important;
    border-color: rgb(8 180 194 / var(--tw-border-opacity)) !important;
}
"@
    Add-Content -Path $cssFile -Value $cssAddition
    Write-Host "Added border-uchi-blue class to CSS file"
}

Write-Host "All files have been checked and updated with consistent border classes!"
