// Language switcher functionality
(function() {
  function initLanguageSwitcher() {
    const select = document.getElementById('lang-select');
    if (!select) return;
    
    select.addEventListener('change', function() {
      try {
        const lang = this.value;
        let path = this.getAttribute('data-path') || '/';
        
        // Ensure path starts with /
        if (!path.startsWith('/')) {
          path = '/' + path;
        }
        
        // Build the new URL
        let newPath = '/' + lang;
        
        // Only add path if it's not just the root
        if (path !== '/') {
          newPath += path;
        } else {
          newPath += '/';
        }
        
        // Redirect to selected language
        window.location.href = newPath;
      } catch (error) {
        console.error('Error changing language:', error);
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();

