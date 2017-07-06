## Simple Mind Map for simplify direction
![alt tag](https://raw.githubusercontent.com/OlegLustenko/flatearth/master/docs/MindMap.png)

# Backend
  ## Database 
  MongoDB seems enough
TODO: User model
   ```ts
     type User {
      name:string,
      email:string,
      salt: {
        required: true,
        type: String
      },
      role: {
        type: ObjectId,
        required: true,
        ref: 'Roles',
        default: oid('admin-role')
      },
      lastVisited: { 
        type: Number, 
        default: Date.now() },
     }
```
TODO: Earth coordinates
```ts
   
    type Earth {
      userId: {
        type: ObjectId
      },
      google_coordinates: {
        type: String,
        required: true
      },
      flat_earth: {
        type: String,
        required: true
      }
    }
```
TODO: Users roles
TODO: Back-end endpoints

# Frontend

# Model
  What data should we store ?


  TODO: EarthCoordinates

  * db
    * EarthCoordinates: EarthCoordinates
  * local
    * ui
      * activeRequests: number
    * user  
      * userInfo: Object
      * accessToken: string
      * coordinates: string
  * vendor
    * forms
      * status message
    * router?


# Update
  What can be done in app ?

  * Sign in
  * Sign out
  * Update status
  * Open user profile
  * Update on new user signed
  * Update on new user status
  * Update map on new user signed
  * Look on total Map


## UI
  What are the Logical Section/Groupings of our UI? 
 
  * App view
    * header
      * INFO
      * User/Profile
        * User/Profile picture
        * User/Profile status
      * LOGO
    * main
      * FlatEarth
        * asd
          * Start point/dot
          * Another humans dots
          * connect start point with another human dot
      * Sidebar
        * New people
         * Users List
          * show user pic and country
        * Last status update
         * Users List
          * User with new status
    * footer
      * status form
            

    * Pages
      * Auth
      * Flat earth
      * User public profile
      * User secret profile