Instructions for Installing and Running the Application Locally
Follow these steps to set up and run the project locally:

1. Clone the repository
First, clone the GitHub repository to your local machine:
bash
Copy code
git clone https://github.com/yourusername/your-repository-name.git
Replace yourusername and your-repository-name with your GitHub username and the repository name.
2. Install Dependencies
Navigate to the project folder:

bash
Copy code
cd your-repository-name
If you're using npm, install the required dependencies:

bash
Copy code
npm install
Or, if you're using Yarn:

bash
Copy code
yarn install
3. Run the Application
After installing the dependencies, you can run the development server:

bash
Copy code
npm start
Or, if you're using Yarn:

bash
Copy code
yarn start
The app should now be running locally. Open your browser and navigate to http://localhost:3000 (or the port specified by the terminal).

Additional Libraries and Tools Used
React: JavaScript library for building user interfaces.
React Router: For routing within the application.
Tailwind CSS: For utility-first CSS styling.
React Icons: For adding vector icons to the application.
React Hooks: useState, useEffect for managing component states and side effects.
JSON Server (optional): Used to mock an API for fetching products data, if applicable.
You can install any missing libraries by running:

bash
Copy code
npm install react-router-dom tailwindcss react-icons
Challenges Faced and How They Were Overcome
Aligning Product Cards Horizontally:

Challenge: Initially, the product cards were appearing vertically instead of horizontally.
Solution: I implemented a flex layout with overflow-x-auto and adjusted the card sizes. Tailwind CSS utilities such as max-w-xs, hover:scale-105, and space-x-6 were used to create responsive horizontal cards with hover effects.
Making Images Interactive on Hover:

Challenge: I needed to ensure that when the user hovered over the image, it should scale and move forward, giving a 3D-like effect.
Solution: I used Tailwind's transition utilities (transition-all, transform, hover:scale-110) to achieve the hover effect.
Routing for Product Details Page:

Challenge: Proper routing was required for product details, which needed to dynamically display information based on the clicked product.
Solution: I used react-router-dom to create dynamic routes and pass product details through the route parameters.
Optional Enhancements Implemented
Search and Filter Functionality:

Implemented a search bar to filter products by name.
Added a category filter so users can narrow down products by category.
Hover Animations:

Enhanced the product card UI with hover animations using Tailwind's hover:scale-105 and hover:shadow-2xl to provide an interactive experience.
Responsive Layout:

Ensured the product list is responsive, adapting to different screen sizes by using Tailwind’s grid and flex utilities (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4).
Cart Feature (Optional Enhancement):

Added a cart feature to allow users to add products to their cart and view the total number of items in the cart.
Screenshots of the Application
Unfortunately, I cannot provide screenshots directly, but you can capture the following screens on your local setup:

Homepage with Product List:

Show the main page where products are displayed in horizontal cards.
Capture the hover effect where the product image scales up when the user hovers over it.
Product Details Page:

Capture the product detail page after clicking on a product, showing detailed information like name, price, description, etc.
Search and Filter:

Show how the user can search for products or filter them by category.
Cart Feature (if implemented):

Capture the cart icon with a number indicating the number of items added to the cart.
