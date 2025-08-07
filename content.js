// Wait for the page to fully load
window.addEventListener('load', function() {
  // Function to hide priority listings
  function hidePriorityListings() {
    // Find all elements with priority listing sections
    const prioritySections = document.querySelectorAll('.priority-section, .priorityListings, section[data-testid="priority-section"]');
    
    // If we found any priority listing sections, hide them
    if (prioritySections.length > 0) {
      prioritySections.forEach(section => {
        section.style.display = 'none';
      });
      console.log('AutoTrader Priority Listings Hider: Hidden ' + prioritySections.length + ' priority sections');
    }
    
    // Find any items marked as priority listings
    const priorityItems = document.querySelectorAll('.priority-item, [data-listing-type="priority"], [data-testid="priority-listing"]');
    
    // If we found any priority items, hide them
    if (priorityItems.length > 0) {
      priorityItems.forEach(item => {
        item.style.display = 'none';
      });
      console.log('AutoTrader Priority Listings Hider: Hidden ' + priorityItems.length + ' priority items');
    }
  }
  
  // Run the function immediately after page load
  hidePriorityListings();
  
  // Set up a mutation observer to detect when new content is added to the page
  const observer = new MutationObserver(function(mutations) {
    hidePriorityListings();
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});