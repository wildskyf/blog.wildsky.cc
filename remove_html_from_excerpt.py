#!/usr/bin/env python3
"""Remove HTML tags from excerpt fields in markdown files."""

import re
from pathlib import Path
import html

def remove_html_tags(text):
    """Remove all HTML tags from text and decode HTML entities."""
    # First decode HTML entities like &quot;
    text = html.unescape(text)
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Clean up extra whitespace
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    return text

def process_file(file_path):
    """Process a single markdown file to remove HTML tags from excerpt."""
    content = file_path.read_text(encoding='utf-8')

    # Pattern to match excerpt field with HTML tags
    # Handle both single-line and multi-line excerpts
    pattern = r'^excerpt:\s*["\']?(<[^>]*>.*?(?:</[^>]*>)?)["\']?\s*$'

    modified = False
    lines = content.split('\n')
    new_lines = []

    for line in lines:
        if line.strip().startswith('excerpt:'):
            # Extract the excerpt content
            match = re.match(r'^excerpt:\s*(["\']?)(.+?)\1\s*$', line)
            if match:
                quote_char = match.group(1) or '"'
                excerpt_content = match.group(2)

                # Check if it contains HTML tags
                if '<' in excerpt_content and '>' in excerpt_content:
                    # Remove HTML tags
                    cleaned_content = remove_html_tags(excerpt_content)
                    # Reconstruct the line
                    new_line = f'excerpt: {quote_char}{cleaned_content}{quote_char}'
                    new_lines.append(new_line)
                    modified = True
                    print(f"Modified: {file_path.name}")
                    print(f"  Before: {line}")
                    print(f"  After:  {new_line}")
                else:
                    new_lines.append(line)
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)

    if modified:
        file_path.write_text('\n'.join(new_lines), encoding='utf-8')
        return True
    return False

def main():
    """Process all markdown files in posts directories."""
    base_path = Path(__file__).parent

    # Process both tw and en posts
    dirs_to_process = [
        base_path / 'src' / 'content' / 'posts-tw',
        base_path / 'src' / 'content' / 'posts-en',
    ]

    total_modified = 0

    for posts_dir in dirs_to_process:
        if not posts_dir.exists():
            print(f"Directory not found: {posts_dir}")
            continue

        print(f"\nProcessing directory: {posts_dir}")
        md_files = list(posts_dir.glob('*.md'))
        print(f"Found {len(md_files)} markdown files")

        for md_file in md_files:
            if process_file(md_file):
                total_modified += 1

    print(f"\n✅ Total files modified: {total_modified}")

if __name__ == '__main__':
    main()
