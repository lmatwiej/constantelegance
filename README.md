**Project Description**

Constant Elegance is a consumer application that provides users with on-demand access to wardrobe care services. This is how it works:

1. **Purchase Package.**
   Users first need to purchase a "package", which entitles them to a specific set of services on eligible items. For example, the "Shirts" package will allow users to request 2 tailorings + 2 dry cleanings on any set of 3 shirts. The user can also donate their 3-shirt package to charity or exchange it for a variable $ amount.

   Users can purchase packages by tapping the "+" icon in the upper right of the "Wardrobe" tab.
   
3. **Place Orders.**
   Users can request orders on purchased packages on the "Services" tab, and they can view their remaining eligibility / packages on the "Wardrobe" tab. The rules for placing orders are very simple:
   
  - Each order can only be placed once a time
  - All clothes get picked up at your select location on the specified date and time
  - Your service rep will reach out directly if there are any issues

3. **Tracking Orders.**
   Placed orders appear in the "Active Orders" section of the "Services" tab. Tap the icons to view the details, status (pending pickup / delivery), and service rep details.

**Getting Started**

Run "npm install" in the constantelegance/ and constantelegance/Backend folders to install all dependencies for both frontend and backend.

Inside the file at constantelegance/Backend/data/client.js, input the URI for an empty MongoDB cluster and modify the database / collection names as needed.

Modify domain and port in the constantelegance/Backend/config/development.json file as needed. Make the same changes in the constantelegance/app/api/client.js file.

Run "node index.js" inside constantelegance/Backend on one terminal, and run "npm start" inside constantelegance/ on another terminal. Use the Expo app to see the app in action.
