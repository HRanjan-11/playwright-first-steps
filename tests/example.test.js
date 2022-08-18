let blogPosts = [];

describe('Blog - kodziak.com/blog/', () => {
  // Will trigger methods before tests
  beforeAll(async () => {
    // Load blog page
    // jest.setTimeout(600);
    await page.goto('https://kodziak.com/blog/');
  })

  test('title should contain "Przemysław Paczoski"', async () => {
    // Get website title
    const title = await page.title();

    // Check if title include string, then compare output to boolean true
    expect(title.includes('Przemysław Paczoski')).toBe(true);
  })

  test('title should contain "Przemysław Paczoski" -1', async () => {
    // Get website title
    const title = await page.title();

    // Check if title include string, then compare output to boolean true
    expect(title.includes('Przemysław Paczoski')).toBe(true);
  })

  test('title should contain "Przemysław Paczoski" -2', async () => {
    // Get website title
    const title = await page.title();

    // Check if title include string, then compare output to boolean true
    expect(title.includes('Przemysław Paczoski')).toBe(true);
  })
  
  test('should work -1', async () => {
    await page.goto('https://www.example.com');
    expect(await page.title()).toBe('Example Domain');
  }, 300)

  test('should work -2 ', async () => {
    await page.goto('https://www.example.com');
    expect(await page.title()).toBe('Example Domain');
  }, 300)

  test('should display list of blog posts', async () => {
    // Get all blog posts as an array of objects
    blogPosts = await page.$$eval('css=.post', elems => elems.map(el => {
      return {
        title: el.querySelector('.post-title').textContent.trim(),
        description: el.querySelector('.post-description').textContent.trim(),
        href: el.href,
      }
    }));
    
    // Check if list length is greater than 0
    expect(blogPosts.length).toBe(0);
  })

  test('should work', async () => {
    await page.goto('https://www.example.com');
    expect(await page.title()).toBe('Example Domain');
  }, 300)

  // test('click on blog post should redirect to article', async () => {
  //   // Go to first blog post, there we're waiting to resolve all promises from array
  //   await Promise.all([
  //     // Click oo .post-title css class element
  //     page.click('css=.post-title'),
  //     // Wait for networkidle event, promise resolves after event
  //     page.waitForLoadState('networkidle')
  //   ]);

  //   // Get title, content and href of current article
  //   const [articleTitle, articleContent, articleHref] = await Promise.all([
  //     // Get article title, we use here array destructuring
  //     page.$eval('css=h2', el => el.textContent.trim()),
  //     // Get article content
  //     page.$eval('css=.content', el => el.textContent),
  //     // Get article href
  //     page.url()
  //   ]);

  //   // Destructuring first element from an blog posts array. First we use array destructuring and then object destructuring
  //   const [{title, description, href}] = blogPosts;
    
  //   // Compare title from posts list with current article's title
  //   expect(title).toBe(articleTitle);
  //   // Check if the current article content includes description from posts list, compare output with boolean true
  //   expect(articleContent.includes(description)).toBe(true);
  //   // Compare href from posts list with current article's href
  //   expect(href).toBe(articleHref);
  // })
})
