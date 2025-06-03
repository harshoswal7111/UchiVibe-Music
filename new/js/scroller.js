// scroller.js - Handles the scrolling marquee with proper text spacing
document.addEventListener('DOMContentLoaded', () => {
    const scrollerContainer = document.querySelector('.scroller-container');
    if (!scrollerContainer) return;    // Clear any existing content
    scrollerContainer.innerHTML = '';
    
    const sectionsData = [
        {
            id: 'section1',
            mainText: 'About Us',
            bgColor: 'hotpink',
            textColor: '#000000',
            aboutUsText: "We're Uchi Vibe Music — Certified Vibe Dealers since day one.\nBorn in Pune, raised by chaos, bass drops, and 3 a.m. brainstorms, we're here to turn your \"maybe this is cool?\" into \"yo, this SLAPS.\"\n\nNo suits. No scripts. Just a bunch of music-heads on a mission to find the unfound, vibe with the unheard, and drop tracks that hit harder than Monday blues.\n\nPull up. Plug in. Welcome to the Uchi side.",
            showAboutUs: true,
            linksPrefix: null,
            links: []
        },
        {
            id: 'section2',
            mainText: 'DREAMTRAK — OPEN SOURCE',
            bgColor: 'mediumspringgreen',
            textColor: '#000000',
            releaseTagText: 'RELEASE',
            releaseTagBgColor: '#000000',
            releaseTagTextColor: 'mediumspringgreen',
            linksPrefix: 'release:',
            links: [
                { text: 'info', url: '#' },
                { text: 'purchase', url: '#' },
                { text: 'listen', url: '#' }
            ]
        },
        {
            id: 'section3',
            mainText: 'BLAQSTARR — MOANHERLEASEHER',
            bgColor: 'cyan',
            textColor: '#000000',
            releaseTagText: 'RELEASE',
            releaseTagBgColor: 'black',
            releaseTagTextColor: 'cyan',
            linksPrefix: 'stream:',
            links: [
                { text: 'bandcamp', url: '#' },
                { text: 'youtube', url: '#' },
                { text: 'spotify', url: '#' }
            ]
        },
        {
            id: 'section4',
            mainText: 'TECHNOSEXUAL — BODYMECHANIC',
            bgColor: '#2c2c2c',
            textColor: '#FFF5EE',
            releaseTagText: 'RELEASE',
            releaseTagBgColor: '#FFF5EE',
            releaseTagTextColor: '#2c2c2c',
            linksPrefix: 'explore:',
            links: [
                { text: 'website', url: '#' },
                { text: 'tour dates', url: '#' }
            ]
        }
    ];

    sectionsData.forEach(data => {
        // Format text with proper spacing
        const formattedMainText = data.mainText.replace('—', ' — ');
        
        const section = document.createElement('div');
        section.classList.add('scroller-section');
        section.id = data.id;
        section.style.backgroundColor = data.bgColor;

        // Visible Content (Marquee)
        const visibleContent = document.createElement('div');
        visibleContent.classList.add('scroller-visible-content');
        visibleContent.style.height = '120px'; // Increased height for better spacing        const marqueeContent = document.createElement('div');
        marqueeContent.classList.add('marquee-content');
        
        // Create marquee items (original + duplicate for seamless loop)
        for (let i = 0; i < 2; i++) { // Duplicate content
            const marqueeItem = document.createElement('div');
            marqueeItem.classList.add('marquee-item');
            marqueeItem.style.margin = '0 30px'; // Additional spacing between items

            const mainTextSpan = document.createElement('span');
            mainTextSpan.classList.add('main-text');
            mainTextSpan.textContent = formattedMainText;
            mainTextSpan.style.color = data.textColor;
            mainTextSpan.style.letterSpacing = '0'; // Prevent negative letter spacing
            
            // Special styling for About Us section
            if (data.showAboutUs) {
                mainTextSpan.style.fontSize = '4rem';
                mainTextSpan.style.fontWeight = 'bold';
                mainTextSpan.style.marginRight = '0'; // No release tag for About Us
                marqueeItem.appendChild(mainTextSpan);
            } else {
                // Regular section with release tag
                mainTextSpan.style.marginRight = '40px'; // More space before release tag
                marqueeItem.appendChild(mainTextSpan);
                
                if (data.releaseTagText) {
                    const releaseTagSpan = document.createElement('span');
                    releaseTagSpan.classList.add('release-tag');
                    releaseTagSpan.textContent = data.releaseTagText;
                    releaseTagSpan.style.backgroundColor = data.releaseTagBgColor;
                    releaseTagSpan.style.color = data.releaseTagTextColor;
                    releaseTagSpan.style.padding = '12px 32px'; // Increased padding for better visibility
                    marqueeItem.appendChild(releaseTagSpan);
                }
            }
            
            marqueeContent.appendChild(marqueeItem);
        }

        visibleContent.appendChild(marqueeContent);
        section.appendChild(visibleContent);        // Expandable Content (Links or About Us text)
        const expandableContent = document.createElement('div');
        expandableContent.classList.add('scroller-expandable-content');        // Check if this is the About Us section
        if (data.showAboutUs && data.aboutUsText) {
            // Create About Us content with better formatting
            const aboutUsContent = document.createElement('div');
            aboutUsContent.classList.add('about-us-content');
            
            // Split by newlines and create paragraphs
            const paragraphs = data.aboutUsText.split('\n\n');
            
            paragraphs.forEach((paragraph, index) => {
                if (paragraph.trim()) {
                    const p = document.createElement('p');
                    p.textContent = paragraph.trim();
                    p.style.marginBottom = '2rem';
                    p.style.lineHeight = '1.8';
                    p.style.fontSize = '1.4rem';
                    p.style.color = data.textColor;
                    p.style.maxWidth = '700px';
                    p.style.margin = '0 auto 2rem auto';
                    p.style.textAlign = 'left';
                    p.style.fontWeight = '400';
                    p.style.letterSpacing = '0.5px';
                    p.style.wordSpacing = '2px';
                    aboutUsContent.appendChild(p);
                }
            });
            
            aboutUsContent.style.padding = '40px 20px';
            aboutUsContent.style.textAlign = 'center'; // Center the container
            aboutUsContent.style.maxWidth = '900px';
            aboutUsContent.style.margin = '0 auto';
            aboutUsContent.style.display = 'block';
            
            expandableContent.appendChild(aboutUsContent);
        } else {
            // Regular links section
            if (data.linksPrefix) {
                const prefixLabel = document.createElement('span');
                prefixLabel.classList.add('links-prefix');
                prefixLabel.textContent = data.linksPrefix;
                prefixLabel.style.color = data.textColor;
                prefixLabel.style.marginRight = '15px';
                expandableContent.appendChild(prefixLabel);
            }

            data.links.forEach(linkInfo => {
                const a = document.createElement('a');
                a.href = linkInfo.url;
                a.textContent = linkInfo.text;
                a.target = '_blank';
                a.style.color = data.textColor;
                a.style.margin = '0 10px';
                expandableContent.appendChild(a);
            });
        }
        section.appendChild(expandableContent);

        // Click listener for expansion
        visibleContent.addEventListener('click', () => {
            const isExpanded = section.classList.contains('expanded');
            const allSections = document.querySelectorAll('.scroller-section');

            // Collapse all other sections
            allSections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.classList.remove('expanded');
                    const otherExpandable = otherSection.querySelector('.scroller-expandable-content');
                    otherExpandable.style.maxHeight = '0';
                    otherExpandable.style.paddingTop = '0';
                    otherExpandable.style.paddingBottom = '0';
                }
            });            // Toggle current section
            if (isExpanded) {
                section.classList.remove('expanded');
                expandableContent.style.maxHeight = '0';
                expandableContent.style.paddingTop = '0';
                expandableContent.style.paddingBottom = '0';
                expandableContent.style.opacity = '0';
            } else {
                section.classList.add('expanded');
                
                // For About Us section, give more space
                if (data.showAboutUs) {
                    expandableContent.style.paddingTop = '30px';
                    expandableContent.style.paddingBottom = '40px';
                    // Add extra height for the about us section
                    expandableContent.style.maxHeight = (expandableContent.scrollHeight + 100) + 'px';
                } else {
                    expandableContent.style.paddingTop = '15px';
                    expandableContent.style.paddingBottom = '15px';
                    expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
                }
                
                expandableContent.style.opacity = '1';
            }
        });

        scrollerContainer.appendChild(section);
    });
});
