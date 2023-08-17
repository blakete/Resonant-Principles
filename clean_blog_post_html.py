from bs4 import BeautifulSoup

blog_post_html_path = '/home/iuris/Downloads/MakingGoodDecisions.html'
with open(blog_post_html_path, 'r', encoding='utf-8') as file:
    html_content = file.read()

soup = BeautifulSoup(html_content, 'html.parser')

# Remove all attributes except 'src' for images
for tag in soup.find_all(True):
    if tag.name == 'img':
        src = tag.attrs.get('src')
        tag.attrs.clear()
        tag.attrs['src'] = src
    else:
        tag.attrs.clear()

# Remove span tags but keep their contents
for span in soup.find_all('span'):
    span.unwrap()

cleaned_html = str(soup)

# Write the cleaned HTML to a new file
with open('public/output.html', 'w', encoding='utf-8') as file:
    file.write(cleaned_html)

print("HTML has been cleaned and written to output.html")

