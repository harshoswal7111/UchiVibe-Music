// Script to extract the first section logo HTML to examine its structure

$file = "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404"
$content = Get-Content $file -Raw

# Use regex to find the header section div with logo
$pattern = '<div class="bg-\[#ea366f\] p-4">.*?</div>'
$matches = [regex]::Matches($content, $pattern)

if ($matches.Count -gt 0) {
    Write-Host "Found the first section logo HTML:"
    Write-Host $matches[0].Value
    
    # Save to a file for examination
    Set-Content -Path "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\logo-section.txt" -Value $matches[0].Value
    Write-Host "Saved to logo-section.txt for examination"
} else {
    Write-Host "Could not find the first section logo HTML"
}
