[![Netlify Status](https://api.netlify.com/api/v1/badges/cd063d89-1886-42b5-a748-fa6b0a806f5a/deploy-status)](https://app.netlify.com/sites/martastic/deploys)

Live Version!! [Martastic.net](https://www.martastic.net/)

Martastic Frontend

React version 16.8.6
Redux version 4.0.4 for state management

Styling:
* styled-components for the Home page only
* Semantic UI for comments and "About Me" section on the profile
* Material-UI for all forms, buttons, schedule and friend cards, and tooltips (to view user info on Single Pic pages)
* Custom CSS for everything else

Goes along with [Martastic Backend](https://github.com/dekadekadeka/martastic-backend). Please get both for the full experience.

TODO:
* The main issues surrounding this app are related to updating state and showing changes instantly. The way backend data is structured is a bit problematic (making heavy use of serializers) and heavily nested when fetched. Data at the top level will be updated instantly to show changes, anything nested deeply requires reloading or solutions that only work superficially, such as the fix for optimistically rendering comments. While all the changes do get correctly posted/deleted on the backend, the state on the frontend will not be updated immediately to reflect this some models (namely, editing your own info on the profile page and adding/deleting friendships) without a reload.

While there are many libraries that help with this, the best solution per Redux documentation is to [normalize your state](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/).

* Allow user to directly upload a picture rather than have it hosted somewhere else and put in the URL.
