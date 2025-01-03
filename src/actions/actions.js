export const SET_LOADING = "SET_LOADING";
export const SET_STORIES = "SET_STORIES";
export const REMOVE_STORY = "REMOVE_STORY";
export const HANDLE_PAGE = "HANDLE_PAGE";
export const HANDLE_SEARCH = "HANDLE_SEARCH";

// Use actions like this and then impoet and call in context

// actions/actions.js
export const setLoading = () => ({
  type: SET_LOADING, // Action type for loading
});

export const setStories = (hits, nbPages) => ({
  type: SET_STORIES, // Action type for setting stories
  payload: { hits, nbPages }, // Data to be updated in the state
});

export const removeStory = (id) => ({
  type: REMOVE_STORY, // Action type for removing a story
  payload: id, // ID of the story to remove
});

export const handleSearch = (query) => ({
  type: HANDLE_SEARCH, // Action type for handling search
  payload: query, // New search query
});

export const handlePage = (value) => ({
  type: HANDLE_PAGE, // Action type for handling page changes
  payload: value, // Page direction (increment or decrement)
});
