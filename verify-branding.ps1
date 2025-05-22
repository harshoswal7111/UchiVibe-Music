# UchiVibe Music - Branding Verification Script
# This script verifies that all branding changes have been properly applied
# This file needs to be run with PowerShell

function Check-FileForString {
    param (
        [string]$FilePath,
        [string]$SearchString
    )
    
    $content = Get-Content $FilePath -Raw
    return $content -match [regex]::Escape($SearchString)
}

$files = @(
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\index.html",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\pages\404.js",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-2",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-3"
)

Write-Output "========== UCHIVIBE MUSIC BRANDING VERIFICATION =========="

$issues = 0

# Check for Red color updates
Write-Output "`nChecking for red color updates (#ff0000 -> #ea366f)..."
foreach ($file in $files) {
    if (Check-FileForString -FilePath $file -SearchString "#ff0000") {
        Write-Output "  [ERROR] Found old red color #ff0000 in $file"
        $issues++
    }
    
    if (Check-FileForString -FilePath $file -SearchString "rgb(255 0 0)") {
        Write-Output "  [ERROR] Found old RGB red color rgb(255 0 0) in $file"
        $issues++
    }
}

# Check for purple/cyan color updates
Write-Output "`nChecking for purple/cyan color updates (#d2bad8 -> #08b4c2)..."
foreach ($file in $files) {
    if (Check-FileForString -FilePath $file -SearchString "#d2bad8") {
        Write-Output "  [ERROR] Found old purple color #d2bad8 in $file"
        $issues++
    }
}

# Check for logo updates
Write-Output "`nChecking for logo image updates..."
foreach ($file in $files) {
    if (-not (Check-FileForString -FilePath $file -SearchString "uchi_logo.png")) {
        Write-Output "  [ERROR] The file $file might be missing the uchi_logo.png reference"
        $issues++
    }
}

# Check for class updates
Write-Output "`nChecking for CSS class updates..."
foreach ($file in $files) {
    if (Check-FileForString -FilePath $file -SearchString "bg-babyBlue") {
        Write-Output "  [ERROR] Found old bg-babyBlue class in $file"
        $issues++
    }
    
    if (Check-FileForString -FilePath $file -SearchString "border-babyBlue") {
        Write-Output "  [ERROR] Found old border-babyBlue class in $file"
        $issues++
    }
}

# Check for text updates
Write-Output "`nChecking for text updates..."
foreach ($file in $files) {
    if (Check-FileForString -FilePath $file -SearchString "FINDING THE UNFOUND") {
        Write-Output "  [ERROR] Found old tagline 'FINDING THE UNFOUND' in $file"
        $issues++
    }
    
    if (Check-FileForString -FilePath $file -SearchString "GASS") {
        Write-Output "  [ERROR] Found old brand name 'GASS' in $file"
        $issues++
    }
}

# Check for email updates
Write-Output "`nChecking for contact information updates..."
foreach ($file in $files) {
    if (Check-FileForString -FilePath $file -SearchString "info@gass.zone") {
        Write-Output "  [ERROR] Found old email address 'info@gass.zone' in $file"
        $issues++
    }
}

# Check for year updates
Write-Output "`nChecking for copyright year updates..."
foreach ($file in $files) {
    if (Check-FileForString -FilePath $file -SearchString "2022") {
        Write-Output "  [ERROR] Found old copyright year '2022' in $file"
        $issues++
    }
}

# Final summary
if ($issues -eq 0) {
    Write-Output "`n✅ SUCCESS: All branding updates have been properly applied!"
} else {
    Write-Output "`n❌ ATTENTION: Found $issues issues that need to be fixed"
}

Write-Output "`nThe following files are now using UchiVibe branding:"
$files | ForEach-Object { Write-Output "  - $_" }

Write-Output "`n======================================================="
