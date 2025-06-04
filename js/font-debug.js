// Font loading debug script
document.addEventListener('DOMContentLoaded', function() {
  // Log which fonts are actually loaded
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function() {
      console.log('All fonts loaded!');
      
      // Check if Smakaran is loaded
      let smakaranLoaded = false;
      document.fonts.forEach(function(font) {
        console.log(`Font loaded: ${font.family} - ${font.style} ${font.weight}`);
        if (font.family.toLowerCase().includes('smakaran')) {
          smakaranLoaded = true;
        }
      });
      
      if (!smakaranLoaded) {
        console.warn('Smakaran font not loaded! Adding fallback class...');
        document.body.classList.add('no-smakaran-font');
      }
    });
  }
});
