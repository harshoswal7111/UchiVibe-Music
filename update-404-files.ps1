# PowerShell script to update the 404 static files with UchiVibe branding

$files = @(
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-2",
    "g:\OneDrive\Documenti\GitHub\UchiVibe-Music\_\static\404-3"
)

foreach ($file in $files) {
    Write-Host "Updating file: $file"
    
    # Read the file content
    $content = Get-Content -Path $file -Raw
      # Replace SVG logo with UchiVibe logo image - using specific string matching to catch all variants
    $content = $content -replace '<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" enable-background="new 0 0 792 479" version="1.1" viewBox="0 0 792 479" xml:space="preserve" fill="rgb\(0,34,11\)"><path.*?</path></svg>', '<img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" />'
    $content = $content -replace '<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" enable-background="new 0 0 792 479" version="1.1" viewBox="0 0 792 479" xml:space="preserve" fill="#08b4c2"><path.*?</path></svg>', '<img src="/static/uchi_logo.png" alt="UchiVibe Logo" class="w-full h-auto" />'
    
    
    # Replace "FINDING THE UNFOUND" with "MUSIC FOR THE SOUL"
    $content = $content -replace 'FINDING THE UNFOUND', 'MUSIC FOR THE SOUL'
    
    # Replace UchiVibe Music with UchiVibe Music
    $content = $content -replace 'UchiVibe Music', 'UchiVibe Music'
    $content = $content -replace 'GASS  Records', 'UchiVibe Music'
    
    # Update email
    $content = $content -replace 'info@gass.zone', 'info@uchivibe.com'
    $content = $content -replace 'https://www.gass.zone', 'http://uchivibe.com'
    
    # Update copyright info and year
    $content = $content -replace '2022 UchiVibe Music. Design and Development by Eric Hu.', '2025 UchiVibe Music.'
    $content = $content -replace '2022 UchiVibe Music. Design and Development by Eric Hu.', '2025 UchiVibe Music.'
    $content = $content -replace 'UchiVibe Music, 2022', 'UchiVibe Music, 2025'
    $content = $content -replace 'UchiVibe Music, 2022', 'UchiVibe Music, 2025'
    $content = $content -replace 'GASS wordmark drawn from the typeface Millionaire, published by Altiplano.', ''
    
    # Replace social media links
    $content = $content -replace 'http://gassrecords.bandcamp.com/', 'http://uchivibe.bandcamp.com/'
    $content = $content -replace 'https://www.instagram.com/gassarmy/', 'https://www.instagram.com/uchivibe/'
    $content = $content -replace 'https://twitter.com/gassarmy', 'https://twitter.com/uchivibe'
    $content = $content -replace 'https://soundcloud.com/gassrecords', 'https://soundcloud.com/uchivibe'
    $content = $content -replace 'https://www.youtube.com/channel/UCWQHWMJCk-pDSM1KerZX36Q', 'https://www.youtube.com/@uchivibe'
    $content = $content -replace 'https://www.facebook.com/gassrecords', 'https://www.facebook.com/uchivibe'
    $content = $content -replace 'https://vimeo.com/gass', 'https://vimeo.com/uchivibe'

    # Update Twitter/social media metadata
    $content = $content -replace '@gassarmy', '@uchivibe'
    
    # Replace babyPink background with uchi-blue (#08b4c2)
    $content = $content -replace 'bg-babyPink', 'bg-[#08b4c2]'
    
    # Save the updated content back to the file
    Set-Content -Path $file -Value $content -NoNewline
}

Write-Host "All 404 static files have been updated with UchiVibe branding!"