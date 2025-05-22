# UchiVibe Music - Enhanced First Section Fix Script
# This script updates any remaining references to the old SVG logo with the new uchi_logo.png image

Write-Output "Starting enhanced first section fix..."

$files = @(
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\index.html",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\pages\404.js",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-2",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-3"
)

foreach ($file in $files) {
    Write-Output "Checking $file for any remaining logo SVG references..."
    $content = Get-Content $file -Raw -Encoding UTF8
    
    # Look for any variant of the SVG logo pattern
    $svgPatterns = @(
        '<svg xmlns="http://www\.w3\.org/2000/svg".*?</svg>',
        '<div class="bg-\[#ea366f\] p-4"><svg.*?</svg></div>',
        '<div class="bg-\[#ff0000\] p-4"><svg.*?</svg></div>'
    )
    
    $replacementCount = 0
    
    foreach ($pattern in $svgPatterns) {
        if ($content -match $pattern) {
            Write-Output "Found SVG pattern in $file"
            $replacement = '<div class="bg-[#ea366f] p-4"><img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" /></div>'
            $content = $content -replace $pattern, $replacement
            $replacementCount++
        }
    }
    
    # Also look specifically for logo-like div containers that might contain the old SVG
    $divPatterns = @(
        '<div class="bg-\[#ea366f\] p-4">(?!<img).*?</div>',
        '<div class="bg-\[#ff0000\] p-4">(?!<img).*?</div>'
    )
    
    foreach ($pattern in $divPatterns) {
        if ($content -match $pattern) {
            Write-Output "Found non-image logo container in $file"
            $replacement = '<div class="bg-[#ea366f] p-4"><img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" /></div>'
            $content = $content -replace $pattern, $replacement
            $replacementCount++
        }
    }
    
    # Check for first section occurrences specifically (large block match)
    $firstSectionPattern = '<header class="flex items-center justify-center border-b border-black".*?<div class="border-r border-forrestGreen \[&.*?\]:border-forrestGreen">.*?<div class="bg-\[#ea366f\] p-4">(?!<img).*?</div>'
    if ($content -match $firstSectionPattern) {
        Write-Output "Found first section without image in $file"
        $content = $content -replace $firstSectionPattern, '<header class="flex items-center justify-center border-b border-black"$1<div class="border-r border-forrestGreen [&$2]:border-forrestGreen"><div class="bg-[#ea366f] p-4"><img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" /></div>'
        $replacementCount++
    }
    
    if ($replacementCount -gt 0) {
        Write-Output "Made $replacementCount replacements in $file"
        Set-Content -Path $file -Value $content -Encoding UTF8
    } else {
        Write-Output "No SVG logos found in $file"
    }
}

Write-Output "Enhanced first section fix completed"
