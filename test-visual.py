from playwright.sync_api import sync_playwright
import os

# Create screenshots directory
os.makedirs('/tmp/adrial-screenshots', exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})

    # Homepage
    print("Testing homepage...")
    page.goto('http://localhost:3001')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)  # Wait for animations

    # Full page screenshot
    page.screenshot(path='/tmp/adrial-screenshots/01-homepage-full.png', full_page=True)
    print("  - Captured full homepage")

    # Hero section (viewport)
    page.screenshot(path='/tmp/adrial-screenshots/02-homepage-hero.png')
    print("  - Captured hero section")

    # Scroll to work section
    page.evaluate('document.querySelector("#work").scrollIntoView()')
    page.wait_for_timeout(500)
    page.screenshot(path='/tmp/adrial-screenshots/03-homepage-work.png')
    print("  - Captured work section")

    # Scroll to process section
    page.evaluate('window.scrollTo(0, document.body.scrollHeight * 0.7)')
    page.wait_for_timeout(500)
    page.screenshot(path='/tmp/adrial-screenshots/04-homepage-process.png')
    print("  - Captured process section")

    # Work index page
    print("\nTesting /work page...")
    page.goto('http://localhost:3001/work')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path='/tmp/adrial-screenshots/05-work-index.png', full_page=True)
    print("  - Captured work index")

    # Project detail page
    print("\nTesting project detail page...")
    page.goto('http://localhost:3001/work/gillings-school')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path='/tmp/adrial-screenshots/06-project-hero.png')
    print("  - Captured project hero")

    page.screenshot(path='/tmp/adrial-screenshots/07-project-full.png', full_page=True)
    print("  - Captured full project page")

    # Strategy page
    print("\nTesting /strategy page...")
    page.goto('http://localhost:3001/strategy')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path='/tmp/adrial-screenshots/08-strategy.png', full_page=True)
    print("  - Captured strategy page")

    # About page
    print("\nTesting /about page...")
    page.goto('http://localhost:3001/about')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path='/tmp/adrial-screenshots/09-about.png', full_page=True)
    print("  - Captured about page")

    # Contact page
    print("\nTesting /contact page...")
    page.goto('http://localhost:3001/contact')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path='/tmp/adrial-screenshots/10-contact.png', full_page=True)
    print("  - Captured contact page")

    # Mobile view
    print("\nTesting mobile view...")
    page.set_viewport_size({'width': 390, 'height': 844})
    page.goto('http://localhost:3001')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path='/tmp/adrial-screenshots/11-mobile-home.png', full_page=True)
    print("  - Captured mobile homepage")

    browser.close()
    print("\n✓ All screenshots saved to /tmp/adrial-screenshots/")
