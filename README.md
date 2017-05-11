# DynamicScrollableList
Angular2 Dynamic Scrollable List - Expansion of the list when the user scrolls down

# Note
Please follow the steps listed on https://angular.io/docs/ts/latest/guide/setup.html in order to set up your environment.

The structure of the code is based off of the Angular.io Introduction, please feel free to view their documentation for more information on Angular.

# Description
The dynamic scrollable list is an implementation of a "lazy-loading" list which does not using css to hide or show all the data. Instead, it uses a directive to listen to host events (scrolling) and splices the original data into two separate arrays - the hidden items and the shown items.

The use of ngFor to display the information in a given data structure can be taxing when the data structure is huge. The creation of all its DOM elements and the rendering of all its CSS properties can lead to an increase in performance.

The goal of this implementation was to increase performance by setting a view limit and loading the information which can be seen by the user.
