// Wait for the page to fully load
window.addEventListener('load', function() {
  // Function to replace priority listings with red lines
  function replacePriorityListings() {
    // Find all elements with priority listing sections
    const prioritySections = document.querySelectorAll('.priority-section, .priorityListings, section[data-testid="priority-section"]');
    
    // Replace priority sections with red lines
    if (prioritySections.length > 0) {
      prioritySections.forEach(section => {
        const redLine = document.createElement('div');
        redLine.style.height = '20px';
        redLine.style.backgroundColor = '#FF0000';
        redLine.style.margin = '10px 0';
        redLine.style.borderRadius = '4px';
        section.innerHTML = '';
        section.appendChild(redLine);
      });
      console.log('AutoTrader Priority Listings Hider: Replaced ' + prioritySections.length + ' priority sections');
    }
    
    // Find any items marked as priority listings
    const priorityItems = document.querySelectorAll('.priority-item, [data-listing-type="priority"], [data-testid="priority-listing"]');
    
    // Replace priority items with red lines
    if (priorityItems.length > 0) {
      priorityItems.forEach(item => {
        const redLine = document.createElement('div');
        redLine.style.height = '20px';
        redLine.style.backgroundColor = '#FF0000';
        redLine.style.margin = '10px 0';
        redLine.style.borderRadius = '4px';
        item.innerHTML = '';
        item.appendChild(redLine);
      });
      console.log('AutoTrader Priority Listings Hider: Replaced ' + priorityItems.length + ' priority items');
    }
  }
  
  // Run the function immediately after page load
  replacePriorityListings();
  
  // Set up a mutation observer to detect when new content is added to the page
  const observer = new MutationObserver(function(mutations) {
    replacePriorityListings();
  });
  
  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});