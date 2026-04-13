function clickme()
{
    alert("Button Clicked");
}

// H1 Tag Functionality
document.addEventListener('DOMContentLoaded', function() {
    const h1Tag = document.querySelector('h1');
    
    if (h1Tag) {
        // Add click animation
        h1Tag.addEventListener('click', function() {
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 600);
        });
        
        // Add double-click to toggle details
        h1Tag.addEventListener('dblclick', function() {
            const lis = this.querySelectorAll('li');
            lis.forEach(li => {
                li.style.opacity = li.style.opacity === '0.5' ? '1' : '0.5';
            });
        });
        
        // Add keyboard support
        h1Tag.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                alert('H1 Content: ' + this.innerText.substring(0, 100) + '...');
            }
        });
        
        // Make it focusable
        h1Tag.setAttribute('tabindex', '0');
        
        console.log('H1 tag enhanced with interactive functionality');
    }
});