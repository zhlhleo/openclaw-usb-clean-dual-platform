param(
    [string]$Output = "",
    [int]$Monitor = 0
)

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

if ($Output -eq "") {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $Output = "$env:TEMP\screenshot_$timestamp.png"
}

$screens = [System.Windows.Forms.Screen]::AllScreens
if ($Monitor -ge $screens.Count) { $Monitor = 0 }
$screen = $screens[$Monitor]
$bounds = $screen.Bounds

$bitmap = New-Object System.Drawing.Bitmap($bounds.Width, $bounds.Height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.CopyFromScreen($bounds.Location, [System.Drawing.Point]::Empty, $bounds.Size)
$bitmap.Save($Output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()

Write-Output $Output
