# UchiVibe Music - Complete Branding Update Script
# This script runs all the branding update scripts in sequence
# and then verifies that all changes have been applied correctly

Write-Output "========== UCHIVIBE MUSIC COMPLETE BRANDING UPDATE =========="

# Step 1: Run the fix-first-section script
Write-Output "`nStep 1: Running fix-first-section.ps1 script..."
& "$PSScriptRoot\fix-first-section.ps1"

# Step 2: Run the border classes update script
Write-Output "`nStep 2: Running update-border-classes.ps1 script..."
& "$PSScriptRoot\update-border-classes.ps1"

# Step 3: Verify all changes
Write-Output "`nStep 3: Running verification script..."
& "$PSScriptRoot\verify-branding.ps1"

Write-Output "`nUchiVibe Music branding update complete!"
