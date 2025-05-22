# UchiVibe Music - Final Logo Cleanup Script
# This script ensures that the GASS SVG logo path is completely removed from all files
# and replaced with the UchiVibe PNG logo

Write-Output "Starting final logo cleanup..."

# Define the pattern for the GASS SVG logo path
$svgLogoPath = "M35,353.1c0-62.4,37-120.9,88.7-162.8c38,16.6,86.8,26.3,143.3,26.3c49.7,0,82.9-8.8,103.3-21.4l-1,1"

# Search for the pattern in all relevant files
$files = Get-ChildItem -Path "g:\OneDrive\Documenti\GitHub\UchiVibe-Music" -Recurse -File | Where-Object {
    $_.Extension -in @(".html", ".js", ".css", ".json") -and 
    $_.Name -notlike "*.ps1" -and
    $_.FullName -notlike "*\node_modules\*"
}

$replaceCount = 0

foreach ($file in $files) {
    Write-Output "Checking $($file.FullName)"
    $content = Get-Content -Path $file.FullName -Raw -ErrorAction SilentlyContinue
    
    if ($content -match $svgLogoPath) {
        Write-Output "Found SVG logo path in $($file.FullName)"
        
        # Replace SVG component with img element for PNG logo
        if ($file.Extension -eq ".js") {
            $newContent = $content -replace 'f\.E\.svg.*viewBox="0 0 792 479", xmlSpace: "preserve", children: \(0, r\.jsx\)\(f\.E\.path, \{ d: "M35,353\.1c0.*461\.3z" \}\) \}\) \}', 'img", { src: "/static/uchi_logo.png", alt: "UchiVibe Logo", className: "w-full h-auto" }) }'
            
            # Also update any occurrences of "FINDING THE UNFOUND" to "MUSIC FOR THE SOUL"
            $newContent = $newContent -replace 'FINDING THE UNFOUND', 'MUSIC FOR THE SOUL'
        }
        elseif ($file.Extension -eq ".html") {
            $newContent = $content -replace '<svg[^>]*>.*?<path d="M35,353\.1c0.*?461\.3z"[^>]*>.*?</svg>', '<img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" />'
        }
        else {
            # For other file types, just try a general replacement
            $newContent = $content -replace '<svg[^>]*>.*?<path d="M35,353\.1c0.*?461\.3z"[^>]*>.*?</svg>', '<img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" />'
        }
        
        if ($newContent -ne $content) {
            Set-Content -Path $file.FullName -Value $newContent -NoNewline
            $replaceCount++
            Write-Output "Updated logo in $($file.FullName)"
        }
    }
}

Write-Output "Final logo cleanup completed with $replaceCount replacements"
